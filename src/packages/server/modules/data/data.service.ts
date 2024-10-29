import { Account } from "@/packages/server/modules/database/schema/account.schema";
import {
  DataServiceEndpoints,
  IApiKey,
  RequestStatusEnum,
} from "@/packages/server/modules/database/schema/api-keys.schema";
import {
  IAutoCompleteRequestSchema,
  IAutoCompleteResponseSchema,
} from "@/packages/server/modules/data/schemas/autocomplete.schema";
import {
  ApiRequestRepository,
  apiRequestRepository,
} from "@/packages/server/modules/api-requests/api-request.repository";
import axios from "axios";
import { NextApiRequest } from "next";
import { ZodSchema } from "zod";
import { performance } from "perf_hooks";
import {
  IPostcodeLookupRequestSchema,
  IPostcodeLookupResponseSchema,
} from "@/packages/server/modules/data/schemas/postcode-lookup.schema";
import {
  IAddressCleanseRequestSchema,
  IAddressCleanseResponseSchema,
} from "@/packages/server/modules/data/schemas/address-cleanse.schema";
import {
  IPropertyRequestSchema,
  IPropertyResponseSchema,
} from "@/packages/server/modules/data/schemas/property.schema";
import { constructRequestUrl } from "@/packages/utils/construct-request-url";
import {
  AreaProfileRequest,
  AreaProfileResponse,
} from "@/packages/server/modules/data/schemas/area-profile.schema";
import { apiKeyGuard } from "@/packages/server/modules/data/data.guard";
import { IncomingHttpHeaders } from "http";
import {
  AreaLookupRequest,
  AreaLookupResponse,
} from "@/packages/server/modules/data/schemas/area-lookup.schema";
import {
  AddressMatchRequest,
  AddressMatchResponse,
} from "@/packages/server/modules/data/schemas/adress-match.schema";
import {
  SearchRequest,
  SearchResponse,
} from "@/packages/server/modules/data/schemas/search.schema";
import {
  LoggerService,
  loggerService,
} from "@/packages/server/modules/logger/logger.service";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { BadRequestError } from "@/packages/server/exceptions";
import cuid2 from "@paralleldrive/cuid2";
import { dataServices } from "@/packages/server/modules/data/data.config";
import { endpoints } from "@/packages/config/endpoints";

type BaseRequest<T extends object> = { headers: IncomingHttpHeaders } & T;

class DataService {
  private apiRequestRepository: ApiRequestRepository;
  private loggerService: LoggerService;

  constructor({
    apiRequestRepository,
    loggerService,
  }: {
    apiRequestRepository: ApiRequestRepository;
    loggerService: LoggerService;
  }) {
    this.apiRequestRepository = apiRequestRepository;
    this.loggerService = loggerService;
  }

  async getAreaProfile({ headers, ...rest }: BaseRequest<AreaProfileRequest>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        AreaProfileRequest,
        AreaProfileResponse
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.areaProfile,
        query: { id: rest.id },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getAreaLookup({ headers, ...rest }: BaseRequest<AreaLookupRequest>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        AreaLookupRequest,
        AreaLookupResponse
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.areaLookup,
        query: { string: rest.string },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getAddressMatch({
    headers,
    ...rest
  }: BaseRequest<AddressMatchRequest>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        AddressMatchRequest,
        AddressMatchResponse
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.addressMatch,
        query: {
          address: rest.address,
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getAutocomplete({
    headers,
    ...rest
  }: BaseRequest<IAutoCompleteRequestSchema>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        IAutoCompleteRequestSchema,
        IAutoCompleteResponseSchema
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.autocomplete,
        query: {
          string: rest.string,
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getAddressCleanse({
    headers,
    ...rest
  }: BaseRequest<IAddressCleanseRequestSchema>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        IAddressCleanseRequestSchema,
        IAddressCleanseResponseSchema
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.addressCleanse,
        query: {
          string: rest.string,
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getProperty({ headers, ...rest }: BaseRequest<IPropertyRequestSchema>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        IPropertyRequestSchema,
        IPropertyResponseSchema
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.property,
        query: {
          udprn: rest.udprn,
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getPostcodeLookup({
    headers,
    ...rest
  }: BaseRequest<IPostcodeLookupRequestSchema>) {
    try {
      const { account, key } = await apiKeyGuard.guard(headers);

      const { data } = await dataService.fetchDataFromApi<
        IPostcodeLookupRequestSchema,
        IPostcodeLookupResponseSchema
      >({
        accountId: account.id,
        apiKeyId: key.id,
        endpoint: DataServiceEndpoints.postcodeLookup,
        query: {
          postcode: rest.postcode,
        },
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async getSearch({
    headers,
    ...rest
  }: BaseRequest<SearchRequest>): Promise<SearchResponse> {
    try {
      const autocompletePromise = this.getAutocomplete({
        headers,
        string: rest.query,
      });

      const areaLookupPromise = this.getAreaLookup({
        headers,
        string: rest.query,
      });

      const [autocompleteResults, areaLookupResults] = await Promise.all([
        autocompletePromise,
        areaLookupPromise,
      ]);

      const results: SearchResponse["items"] = [];

      autocompleteResults.data.addresses.map((item) => {
        results.push({
          ...item,
          id: cuid2.createId(),
          type: "address",
        });
      });

      areaLookupResults.data.areas.map((item) => {
        results.push({
          ...item,
          id: cuid2.createId(),
          type: "area",
        });
      });

      return {
        items: results,
      };
    } catch (e) {
      throw e;
    }
  }

  validateRequest = <T extends object>(
    schema: ZodSchema<T>,
    query: NextApiRequest["query"],
  ) => {
    const input = {} as Record<string, any>;

    Object.keys(query).map((k) => {
      const value = query[k];
      if (k !== "ts-rest" && value !== undefined) {
        if (typeof value === "string") {
          input[k] = value;
        } else if (Array.isArray(value)) {
          input[k] = value.join(",");
        } else {
          input[k] = "";
        }
      }
    });

    const validate = schema.safeParse(input);

    if (!validate.success) {
      const formattedErrors = validate.error.issues.map((issue) => {
        return {
          field: issue.path[0],
          issues: [issue.message],
        };
      });

      throw new BadRequestError(ErrorCodes.invalid_values, "", formattedErrors);
    }

    return input as T;
  };

  fetchDataFromApi = async <Request, Response>({
    accountId,
    apiKeyId,
    endpoint,
    query,
  }: {
    accountId: Account["id"];
    apiKeyId: IApiKey["id"];
    endpoint: DataServiceEndpoints;
    query: Request;
  }) => {
    const loggedRequest = await this.apiRequestRepository.create({
      accountId,
      apiKeyId,
      endpoint,
      request: query,
      status: RequestStatusEnum.pending,
    });

    let timeTaken = 0;

    try {
      const endpointConfig = endpoints[endpoint];

      const dataService = dataServices[endpointConfig.service];

      const requestUrl = constructRequestUrl({
        baseUrl: dataService.baseUrl,
        type: "outer",
        endpoint,
        query,
      });

      this.loggerService.getClient().info("Request url", requestUrl);

      const startTime = performance.now();

      const { data } = await axios.get<Response>(requestUrl, {
        headers: dataService.headers,
      });

      const endTime = performance.now();

      timeTaken = Math.round(endTime - startTime);

      await this.apiRequestRepository.update({
        id: loggedRequest[0].id,
        values: {
          response: data,
          status: RequestStatusEnum.success,
          duration: timeTaken,
        },
      });

      return { data };
    } catch (e: any) {
      let errorCode = ErrorCodes.unhandled;

      console.error(e.response);

      if (e.response) {
        if (e.response.data?.data?.error === "Invalid postcode")
          errorCode = ErrorCodes.invalid_postcode;
      }

      await this.apiRequestRepository.update({
        id: loggedRequest[0].id,
        values: { status: RequestStatusEnum.error, duration: timeTaken },
      });

      throw new BadRequestError(errorCode);
    }
  };
}

export { DataService };

export const dataService = new DataService({
  apiRequestRepository: apiRequestRepository,
  loggerService: loggerService,
});
