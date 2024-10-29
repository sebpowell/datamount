"use client";

import { Docs } from "@/packages/apps/docs/layouts/LayoutDocs/Docs";
import { SiteConfig, getBaseUrl } from "@/packages/config/global.config";

export const GetStarted = () => {
  return (
    <>
      <Docs.H1>Getting started</Docs.H1>
      <Docs.H2>Base URL</Docs.H2>
      <Docs.P>All requests contain the following base URL:</Docs.P>
      <Docs.CodeExample
        examples={[
          {
            language: "bash",
            code: getBaseUrl(),
          },
        ]}
      />
      <Docs.H2>Authentication</Docs.H2>
      <Docs.P>
        To authenticate you need to add an Authorization header with your API
        key, as follows:
      </Docs.P>
      <Docs.CodeExample
        examples={[
          {
            language: "bash",
            code: "x-api-key: <your API key>",
          },
        ]}
      />
    </>
  );
};
