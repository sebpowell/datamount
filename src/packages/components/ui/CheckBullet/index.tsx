import { Box } from "@/packages/components/ui/Box";
import { Text } from "@/packages/components/ui/Text";
import { CheckmarkOutline } from "@carbon/icons-react";

const CheckBullet = () => {
  return (
    <Box className="flex items-center gap-2">
      <CheckmarkOutline size={24} />
      <Text>Zero up-front costs</Text>
    </Box>
  );
};

export { CheckBullet };
