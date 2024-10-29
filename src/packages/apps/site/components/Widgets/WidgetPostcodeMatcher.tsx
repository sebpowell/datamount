"use client";
import { Box } from "@/packages/components/ui/Box";
import { Button } from "@/packages/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormStack,
} from "@/packages/components/ui/Form";
import { Input } from "@/packages/components/ui/Input";
import { Text } from "@/packages/components/ui/Text";
import { client } from "@/packages/server/clients/api";
import {
  IPostcodeLookupRequestSchema,
  IPostcodeLookupResponseSchema,
  PostcodeLookupRequestSchema,
} from "@/packages/server/modules/data/schemas/postcode-lookup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const WidgetPostcodeLookup = () => {
  const form = useForm<IPostcodeLookupRequestSchema>({
    resolver: zodResolver(PostcodeLookupRequestSchema),
  });

  const [isLoading, setLoading] = useState(false);

  const [data, setData] = useState<
    IPostcodeLookupResponseSchema["data"]["addresses"]
  >([]);

  const { query } = client.data.postcodeLookup;

  async function onSubmit(values: IPostcodeLookupRequestSchema) {
    setLoading(true);

    const resp = await query({ query: values });

    if (resp.status === 200) {
      setData(resp?.body.data.addresses);

      setLoading(false);
    } else {
      alert(JSON.stringify(resp.body));
    }
  }

  const watchedValues = JSON.stringify(form.watch());

  useEffect(() => {
    setData([]);
  }, [watchedValues]);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormStack>
            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      size="lg"
                      {...field}
                      placeholder="Enter postcode (e.g. IG9 5BN)"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" isLoading={isLoading} isBlock size="lg">
              Lookup
            </Button>
          </FormStack>
        </form>
      </Form>

      {data?.length > 0 && (
        <Box className="p-1">
          {data.map((item) => {
            return (
              <Box
                key={item.udprn}
                className="flex h-10 items-center px-3 hover:bg-background-primary"
              >
                <Text className="truncate">{item.address}</Text>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};
