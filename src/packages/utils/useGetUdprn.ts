import { client } from "@/packages/server/clients/api";

const useGetUdprn = async (address: string) => {
  const { query } = client.data.addressMatch;

  try {
    const { body } = await query({ query: { address } });

    return body;
  } catch (e) {}
};

export { useGetUdprn };
