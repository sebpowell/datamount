"use client";
import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Box } from "@/packages/components/ui/Box";
import { EndpointSelector } from "@/packages/components/ui/CodeSandbox/CodeSandboxEndpointSelector";
import { endpoints } from "@/packages/config/endpoints";
import { Form, FormField } from "@/packages/components/ui/Form";
import { Loader } from "@/packages/components/ui/Loader";
import { SyntaxHighlighter } from "@/packages/components/ui/SyntaxHighlighter";
import { client } from "@/packages/server/clients/api";
import { requestSchemas } from "@/packages/server/modules/data/schemas/data-request.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CodeSandboxField } from "@/packages/components/ui/CodeSandbox/CodeSandboxField";

type CodeSandboxProps = {
  defaultEndpoint?: DataServiceEndpoints;
};

export const CodeSandbox = (props: CodeSandboxProps) => {
  const [endpoint, setEndpoint] = useState<DataServiceEndpoints>(
    props.defaultEndpoint || DataServiceEndpoints.property,
  );

  const [data, setData] = useState<any | null>();

  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const query = client.data[endpoint].query;

  const generateDefaults = () => {
    const result: any = {};

    Object.keys(endpoints[endpoint]?.fields).map((key) => {
      result[key] = endpoints[endpoint]?.fields[key].defaultValue;
    });

    return result;
  };

  const form = useForm<z.TypeOf<typeof requestSchemas>>({
    resolver: zodResolver(requestSchemas),
  });

  useEffect(() => {
    const values = {
      ...generateDefaults(),
    };

    form.reset(values);

    onSubmit(values);
  }, [endpoint]);

  async function onSubmit(values: z.TypeOf<typeof requestSchemas>) {
    // @ts-ignore
    const resp = await query({ query: values });

    if (resp.status === 200) {
      setData(resp.body);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-1 flex-col overflow-hidden"
      >
        <EndpointSelector selected={endpoint} onChange={setEndpoint} />

        {Object.keys(endpoints[endpoint]?.fields).map((key, i) => {
          const _field = endpoints[endpoint]?.fields[key];

          return (
            <FormField
              key={i}
              control={form.control}
              name={_field.name as any}
              render={({ field }) => {
                return (
                  <CodeSandboxField
                    label={_field.label}
                    placeholder={_field.placeholder}
                    description={_field.description}
                    {...field}
                    onBlur={() => {
                      field.onBlur();
                      onSubmit(form.getValues());
                    }}
                  />
                );
              }}
            />
          );
        })}

        <Box className="flex flex-1 flex-col overflow-scroll">
          {isLoading ? (
            <Box className="flex flex-1 items-center justify-center">
              <Loader />
            </Box>
          ) : (
            <>
              {error ? (
                <>Something went wrong...</>
              ) : (
                <SyntaxHighlighter language="json">
                  {JSON.stringify(data, null, 2)}
                </SyntaxHighlighter>
              )}
            </>
          )}
        </Box>
      </form>
    </Form>
  );
};
