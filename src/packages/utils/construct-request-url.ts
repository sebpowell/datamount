import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { endpoints } from "@/packages/config/endpoints";

function extractUrlParams(url: string): string[] {
  const regex = /\/:([a-zA-Z0-9]+)/g;
  let match;
  const params = [];

  while ((match = regex.exec(url)) !== null) {
    params.push(match[1]);
  }

  return params;
}

export const constructRequestUrl = ({
  baseUrl,
  type,
  endpoint,
  query,
}: {
  baseUrl: string;
  type: "inner" | "outer";
  endpoint: DataServiceEndpoints;
  query: unknown;
}): string => {
  const path =
    type === "inner"
      ? endpoints[endpoint]?.externalUrl
      : endpoints[endpoint]?.url;

  let url = `${baseUrl}${path}`;

  const params = extractUrlParams(url);

  params.forEach((param) => {
    // @ts-ignore
    const value = query[param];

    if (value) url = url.replace(`:${param}`, value);
  });

  return url + constructQueryParams({ endpoint, query });
};

export const constructQueryParams = ({
  endpoint,
  query,
}: {
  endpoint: DataServiceEndpoints;
  query: unknown;
}): string => {
  let url = "";

  const { fields } = endpoints[endpoint];

  const queryParams = Object.keys(fields)
    .map((key) => {
      return `${key}=${encodeURIComponent(
        (query as { [key: string]: any })[key],
      )}`;
    })
    .join("&");

  if (queryParams) {
    url += `?${queryParams}`;
  }

  return url;
};
