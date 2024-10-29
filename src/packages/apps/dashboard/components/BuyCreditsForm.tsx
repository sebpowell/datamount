"use client";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/packages/components/ui/Form";
import { client } from "@/packages/server/clients/api";
import {
  BuyCreditsRequest,
  IBuyCreditsRequest,
} from "@/packages/server/modules/account/account-credits/account-credits.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const BuyCreditsForm = ({ onSuccess }: { onSuccess(): void }) => {
  const options = [
    {
      credits: 500,
    },
    {
      credits: 1000,
    },
    {
      credits: 1500,
    },
    {
      credits: 2000,
    },
  ];

  const form = useForm<IBuyCreditsRequest>({
    resolver: zodResolver(BuyCreditsRequest),
    defaultValues: {
      quantity: options[0].credits,
    },
  });

  const { mutate, isLoading } = client.account.credits.purchase.useMutation({
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {},
  });

  const onSubmit = async (values: IBuyCreditsRequest) => {
    mutate({ body: values });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Box>
                  {options.map((option, i) => {
                    return (
                      <Box
                        key={i}
                        onClick={() => field.onChange(option.credits)}
                        className="flex cursor-pointer p-3"
                        // backgroundColor={
                        //   field.value === option.credits ? "brand" : "primary"
                        // }
                      >
                        {option.credits}
                        <Box className="ml-auto">£120</Box>
                      </Box>
                    );
                  })}
                </Box>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isLoading}>
          Buy credits
        </Button>
      </form>
    </Form>
  );
};

export { BuyCreditsForm };
