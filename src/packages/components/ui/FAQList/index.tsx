import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/packages/components/ui/Accordion";
import { Box } from "@/packages/components/ui/Box";
import { Markdown } from "@/packages/components/ui/Markdown";
import { IFAQ } from "@/packages/server/modules/content/content.service";

const FAQList = ({ faqs = [] }: { faqs: IFAQ[] }) => {
  return (
    <Accordion type="multiple">
      <Box className="divide-y">
        {faqs.map((item) => {
          return (
            <AccordionItem value={item.fields.title} key={item.sys.id}>
              <AccordionTrigger>{item.fields.title}</AccordionTrigger>
              <AccordionContent>
                <Markdown content={item.fields.content || ""} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Box>
    </Accordion>
  );
};

export { FAQList };
