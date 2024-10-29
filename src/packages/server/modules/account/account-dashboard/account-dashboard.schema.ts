import { TypeOf, number, string, z } from "zod";

const FetchAccountDashboardResponse = z.object({
  startDate: string(),
  endDate: string(),
  numberOfRequests: number(),
  credits: number(),
});

type IFetchAccountDashboardResponse = TypeOf<
  typeof FetchAccountDashboardResponse
>;

export { FetchAccountDashboardResponse };

export type { IFetchAccountDashboardResponse };
