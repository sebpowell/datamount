import { Box } from "@/packages/components/ui/Box";
import { SyntaxHighlighter } from "@/packages/components/ui/SyntaxHighlighter";
import { Clipboard } from "lucide-react";
import { useEffect } from "react";
import { useCopyToClipboard } from "react-use";

function unindent(code: string) {
  let isJSON = false;
  try {
    JSON.parse(code);
    isJSON = true;
  } catch (e) {
    isJSON = false;
  }

  if (isJSON) {
    const parsed = JSON.parse(code);
    return JSON.stringify(parsed, null, 2);
  }

  const lines = code.split("\n");

  const indent = Math.min(
    ...lines
      .filter((line) => line.trim())
      .map((line) => {
        const match = line.match(/^ */);

        return match ? match[0].length : 0;
      }),
  );
  const trimmedLines = lines.map((line) => line.slice(indent));

  while (trimmedLines.length && !trimmedLines[0].trim()) trimmedLines.shift();

  while (trimmedLines.length && !trimmedLines[trimmedLines.length - 1].trim())
    trimmedLines.pop();

  return trimmedLines.join("\n");
}

type CodeProps = {
  examples: { language: "bash" | "json"; code: string }[];
};

const Code = (props: CodeProps) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const { examples } = props;

  useEffect(() => {
    if (state.value) {
      alert("Copied!");
    }
  }, [state]);

  return (
    <Box className="group relative rounded-lg bg-background-secondary">
      {examples.map((example, i) => {
        return (
          <>
            <Box
              className="border-border-primary-on-secondary absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-background-secondary lg:opacity-100 lg:group-hover:opacity-100"
              onClick={() => copyToClipboard(example.code)}
            >
              <Clipboard size={16} />
            </Box>
            <SyntaxHighlighter language={example.language} key={i}>
              {unindent(example.code)}
            </SyntaxHighlighter>
          </>
        );
      })}
    </Box>
  );
};

export type { CodeProps };

export { Code };
