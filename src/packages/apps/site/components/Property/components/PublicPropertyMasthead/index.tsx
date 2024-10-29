import { PublicPropertyImage } from "@/packages/apps/site/components/Property/components/PublicPropertyMasthead/PublicPropertyImage";
import { PublicPropertyMap } from "@/packages/apps/site/components/Property/components/PublicPropertyMasthead/PublicPropertyMap";
import { Box } from "@/packages/components/ui/Box";

export const PublicPropertyMasthead = () => {
  return (
    <Box className="flex h-[300px] w-full overflow-hidden bg-background-secondary">
      <PublicPropertyMap />
    </Box>
  );
};
