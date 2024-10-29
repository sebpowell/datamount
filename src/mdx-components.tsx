import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Heading as="h1" className="mb-5">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" className="mb-4 mt-12">
        {children}
      </Heading>
    ),
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    p: ({ children }) => (
      <Paragraph className="mb-4 leading-relaxed last-of-type:mb-0">
        {children}
      </Paragraph>
    ),
    hr: ({}) => {
      return <>sfdgs</>;
    },
    code: ({ children }) => {
      return (
        <Box as="code" className="border p-1">
          {children}
        </Box>
      );
    },
    td: ({ children }) => {
      return <td>{children}</td>;
    },
    table: ({ children }) => {
      return <table className="w-full border">{children}</table>;
    },
    strong: ({ children }) => {
      return <Box as="strong">{children}</Box>;
    },
    li: ({ children }) => <Box>{children}</Box>,
    ...components,
  };
}
