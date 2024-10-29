"use client";
import { BuyCreditsForm } from "@/packages/apps/dashboard/components/BuyCreditsForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/packages/components/ui/Dialog";
import { Queries, client, queryClient } from "@/packages/server/clients/api";
import { DialogProps } from "@radix-ui/react-dialog";

const BuyCreditsModal = (
  props: Required<Pick<DialogProps, "open" | "onOpenChange">>,
) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buy credits</DialogTitle>
        </DialogHeader>
        <BuyCreditsForm
          onSuccess={() => {
            queryClient.invalidateQueries([Queries.account_dashboard]);
            props.onOpenChange(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export { BuyCreditsModal };
