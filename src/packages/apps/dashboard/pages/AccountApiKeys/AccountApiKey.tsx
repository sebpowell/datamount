"use client";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { Box } from "@/packages/components/ui/Box";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";
import { client } from "@/packages/server/clients/api";
import { useParams } from "next/navigation";

const AccountApiKeyPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const router = useParams();

  const cuid = Array.isArray(router?.cuid) ? router?.cuid[0] : router?.cuid;

  const { data, isLoading, status } =
    client.account.keys.findOneByCuid.useQuery([], {
      params: { cuid: cuid || "" },
    });

  // const {} = client.account.keys.delete.mutation({
  //   params: { cuid: "" },
  //   body: null,
  // });

  return (
    <Box className="space-y-5">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <Account.PageHeader>
            <Account.PageTitle>Key: {data?.body.name}</Account.PageTitle>
          </Account.PageHeader>
          {data?.body.lastUsedAt}
          {data?.body.createdAt}
          {data?.body.domains}
        </>
      )}
    </Box>
  );
};

export { AccountApiKeyPage };
