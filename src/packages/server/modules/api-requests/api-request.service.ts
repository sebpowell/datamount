import { Account } from "@/packages/server/modules/database/schema/account.schema";
import { ICreateApiRequest } from "@/packages/server/modules/database/schema/api-keys.schema";
import {
  ApiRequestRepository,
  apiRequestRepository,
} from "@/packages/server/modules/api-requests/api-request.repository";

class ApiRequestService {
  private apiRequestRepository: ApiRequestRepository;

  constructor({
    apiRequestRepository,
  }: {
    apiRequestRepository: ApiRequestRepository;
  }) {
    this.apiRequestRepository = apiRequestRepository;
  }

  async create(props: ICreateApiRequest) {
    return await this.apiRequestRepository.create(props);
  }
  async getAllByAccount({ accountId }: { accountId: Account["id"] }) {
    return await this.apiRequestRepository.getAllByAccount({ accountId });
  }
}

const apiRequestService = new ApiRequestService({
  apiRequestRepository,
});

export { apiRequestService, ApiRequestService };
