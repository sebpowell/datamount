import { Paragraph } from "@/packages/components/ui/Paragraph";
import ReactMarkdown from "react-markdown";

const Markdown = (props: { content: string }) => {
  const { content } = props;

  return (
    <ReactMarkdown
      components={{
        p(props) {
          return (
            <Paragraph className="mb-4 last-of-type:mb-0">
              {props.children}
            </Paragraph>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export { Markdown };
