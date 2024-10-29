import {
  BadRequestError,
  PaymentRequiredError,
  UnauthorisedError,
} from "@/packages/server/exceptions";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import {
  AccountRepository,
  accountRepository,
} from "@/packages/server/modules/account/account.repository";
import {
  ApiKeysRepository,
  apiKeysRepository,
} from "@/packages/server/modules/api-keys/api-keys.repository";
import { IncomingHttpHeaders } from "http";

class ApiKeyGuard {
  private accountRepository: AccountRepository;
  private apiKeysRepository: ApiKeysRepository;

  constructor({
    accountRepository,
    apiKeysRepository,
  }: {
    accountRepository: AccountRepository;
    apiKeysRepository: ApiKeysRepository;
  }) {
    this.accountRepository = accountRepository;
    this.apiKeysRepository = apiKeysRepository;
  }

  private isDomainMatched(host: string | undefined, domains: string[]) {
    return domains.some((domain) => {
      if (domain.startsWith("*.")) {
        const wildcardDomain = domain.slice(2);
        return host?.endsWith(wildcardDomain);
      }
      return host === domain;
    });
  }

  public async guard(headers: IncomingHttpHeaders) {
    const host = headers.host;

    const apiKey = headers["x-api-key"];

    if (!apiKey) {
      throw new BadRequestError(ErrorCodes.api_key_missing);
    }

    if (typeof apiKey !== "string") {
      throw new BadRequestError(ErrorCodes.api_key_format_invalid);
    }

    const key = await this.apiKeysRepository.getByKey({ key: apiKey });

    if (!key) {
      throw new UnauthorisedError(ErrorCodes.api_key_does_not_exist);
    }

    if (key.domains.length > 0 && !this.isDomainMatched(host, key.domains)) {
      throw new UnauthorisedError(ErrorCodes.api_key_domain_not_whitelisted);
    }

    const account = await this.accountRepository.findOneById(key.accountId);

    if (!account) {
      throw new UnauthorisedError(ErrorCodes.account_does_not_exist);
    }

    if (account.credits === 0) {
      throw new PaymentRequiredError(ErrorCodes.insufficient_credits);
    }

    await this.apiKeysRepository.update({
      keyId: key.id,
      values: {
        lastUsedAt: new Date(),
      },
    });

    return { account, key };
  }
}

export { ApiKeyGuard };

export const apiKeyGuard = new ApiKeyGuard({
  accountRepository,
  apiKeysRepository,
});
