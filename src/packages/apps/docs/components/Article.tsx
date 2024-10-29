"use client";
import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Docs } from "@/packages/apps/docs/layouts/LayoutDocs/Docs";
import { endpoints } from "@/packages/config/endpoints";
import { getBaseUrl } from "@/packages/config/global.config";
import { constructRequestUrl } from "@/packages/utils/construct-request-url";

const Article = ({ endpoint }: { endpoint: DataServiceEndpoints }) => {
  const { name, example, description, fields } = endpoints[endpoint];

  return (
    <>
      <Docs.H1>{name}</Docs.H1>
      <Docs.P>{description}</Docs.P>
      <Docs.H2>Endpoint</Docs.H2>
      <Docs.CodeExample
        examples={[
          {
            language: "bash",
            code: constructRequestUrl({
              baseUrl: getBaseUrl(),
              endpoint,
              type: "inner",
              query: Object.keys(fields).reduce((acc, field) => {
                return {
                  ...acc,
                  [field]: fields[field].defaultValue,
                };
              }, {}),
            }),
          },
        ]}
      />
      <Docs.H2>Parameters</Docs.H2>
      <Docs.Parameters endpoint={endpoint} />
      <Docs.H2>Response</Docs.H2>
      <Docs.CodeExample
        examples={[
          {
            language: "json",
            code: JSON.stringify(example),
          },
        ]}
      />
    </>
  );
};

export { Article };
