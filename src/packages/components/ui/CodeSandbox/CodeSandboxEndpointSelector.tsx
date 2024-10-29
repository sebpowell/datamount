import { DataServiceEndpoints } from "@/packages/server/modules/database/schema/api-keys.schema";
import { Box } from "@/packages/components/ui/Box";
import { endpoints } from "@/packages/config/endpoints";
import { ColorSwatch } from "@/packages/components/ui/ColorSwatch";
import { Icon } from "@/packages/components/ui/Icon";
import { Stack } from "@/packages/components/ui/Stack";
import { Text } from "@/packages/components/ui/Text";
import { useDisclosure } from "@/packages/utils/react/use-disclosure";

const EndpointValue = ({ endpoint }: { endpoint: DataServiceEndpoints }) => {
  return (
    <Stack spaceX={4} className="flex items-center">
      <Box>
        <ColorSwatch color={endpoints[endpoint].color} />
      </Box>
      <Stack spaceX={2} className="flex">
        <Text>{endpoints[endpoint]?.name}</Text>
      </Stack>
    </Stack>
  );
};

export const EndpointSelector = ({
  selected,
  onChange,
}: {
  selected: DataServiceEndpoints;
  onChange(value: DataServiceEndpoints): void;
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleChange = (endpoint: string) => {
    onChange(endpoint as DataServiceEndpoints);

    onClose();
  };

  return (
    <Box className="relative">
      <Box
        className="flex h-14 w-full cursor-pointer items-center border-b px-5"
        onClick={onToggle}
      >
        <EndpointValue endpoint={selected} />
        <Box className="ml-auto">
          <Icon icon="ChevronDown" size={18} />
        </Box>
      </Box>
      {isOpen && (
        <Box className="absolute left-0 top-full z-10 w-full">
          {Object.keys(endpoints).map((endpoint, i) => {
            return (
              <Box
                className="flex h-14 cursor-pointer items-center space-x-4 border-b bg-white px-4"
                key={i}
                onClick={() => handleChange(endpoint)}
              >
                <EndpointValue endpoint={endpoint as DataServiceEndpoints} />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
