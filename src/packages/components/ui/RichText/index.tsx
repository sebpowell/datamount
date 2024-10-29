import { Box } from "@/packages/components/ui/Box";
import { Heading } from "@/packages/components/ui/Heading";
import { Paragraph } from "@/packages/components/ui/Paragraph";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  Block,
  Document,
  Inline,
} from "@contentful/rich-text-types";
import { cva } from "class-variance-authority";

const baseRichTextStyles = cva(
  "mb-4 last:mb-0 leading-[1.6] text-text-secondary",
);

const baseHeadingRichTextStyles = cva("mb-2 mt-8 font-medium");

export const RichTextConfigBase: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Block | Inline, children) => {
      return (
        <Box
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
          href={node.data.uri}
        >
          {children}
        </Box>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Heading
          as="h2"
          className={baseHeadingRichTextStyles({ className: "text-2xl" })}
        >
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <Heading
          as="h3"
          className={baseHeadingRichTextStyles({ className: "text-xl" })}
        >
          {children}
        </Heading>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children) => {
      return (
        <Box as="p" className={baseRichTextStyles()}>
          {children}
        </Box>
      );
    },
    [MARKS.BOLD]: (node: Block | Inline, children) => {
      return (
        <Box as="strong" className="font-medium">
          {children}
        </Box>
      );
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return (
        <Box
          as="li"
          className={baseRichTextStyles({
            className: "mb-4 last-of-type:mb-0",
          })}
        >
          {children}
        </Box>
      );
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return (
        <Box
          as="ul"
          className={baseRichTextStyles({
            className: "list-disc pl-4 marker:text-xs",
          })}
        >
          {children}
        </Box>
      );
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return (
        <Box
          as="ul"
          className={baseRichTextStyles({
            className: "list-disc pl-4",
          })}
        >
          {children}
        </Box>
      );
    },
  },
};

export type IRichTextProps = {
  content: Document | undefined;
  options?: Options | undefined;
};

export const RichText = (props: IRichTextProps) => {
  const {
    content = { nodeType: BLOCKS.DOCUMENT, content: [], data: [] },
    options = RichTextConfigBase,
  } = props;

  return <>{documentToReactComponents(content, options)}</>;
};
