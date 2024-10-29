"use client";
import { BuyCreditsModal } from "@/packages/apps/dashboard/components/BuyCreditsModal";
import { Account } from "@/packages/apps/dashboard/components/PageSection";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import { Column, Grid } from "@/packages/components/ui/Grid";
import { Panel, PanelStat, PanelTitle } from "@/packages/components/ui/Panel";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";
import { Queries, client } from "@/packages/server/clients/api";
import { format, parseISO } from "date-fns";

{
  /* <Column className="col-span-12 lg:col-span-6">
            <Panel>
              <PanelTitle>Requests</PanelTitle>

              {!isLoading && (
                <Box>
                  {format(parseISO(data.body.startDate), "dd MMM")} –{" "}
                  {format(parseISO(data.body.endDate), "dd MMM")}
                </Box>
              )}
              <PanelStat>{data?.body.numberOfRequests}</PanelStat>
            </Panel>
          </Column> */
}

const AccountDashboard = () => {
  const { data, isLoading } = client.account.dashboard.fetch.useQuery([
    Queries.account_dashboard,
  ]);

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Account.PageWrapper>
      <Account.PageHeader>
        <Account.PageTitle>Dashboard</Account.PageTitle>
      </Account.PageHeader>
      {!isLoading && data?.body ? (
        <Grid gap={4}>
          <Column className="col-span-12 lg:col-span-6">
            <BuyCreditsModal open={isOpen} onOpenChange={onClose} />
            <Panel>
              <PanelTitle>Available credits</PanelTitle>
              <PanelStat>{data?.body.credits}</PanelStat>
            </Panel>
          </Column>
        </Grid>
      ) : (
        <></>
      )}
    </Account.PageWrapper>
  );
};

export { AccountDashboard, BuyCreditsModal };
