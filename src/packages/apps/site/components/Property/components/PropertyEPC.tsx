import { Stack } from "@/packages/components/ui/Stack";
import { usePropertyProfileContext } from "./Property.context";
import { EPCBands } from "@/packages/config/epc-bands.config";
import { EPCRatings } from "@/packages/server/modules/data/schemas/property.schema";
import {
  PageSection,
  PageSectionBody,
  PageSectionHeader,
  PageSectionTitle,
} from "@/packages/components/ui/PageSection";
import { Box } from "@/packages/components/ui/Box";

const EPCBar = ({ width, name, color }: any) => {
  return (
    <div
      className="flex h-10 items-center px-3"
      style={{
        width: width + "%",
        backgroundColor: color,
      }}
    >
      <Box className="flex items-center text-xl">{name}</Box>
    </div>
  );
};

export const PublicPropertyEPC = () => {
  const { property } = usePropertyProfileContext();

  const {
    current_energy_efficiency,
    current_energy_rating,
    potential_energy_rating,
    potential_energy_efficiency,
  } = property;

  return (
    <PageSectionBody>
      <Box className="flex border-b border-t border-black">
        <Box className="w-2/3"></Box>
        <Box className="flex w-1/3">
          <Box className="flex flex-1 text-center">Current</Box>
          <Box className="flex flex-1 items-center justify-center">
            Potential
          </Box>
        </Box>
      </Box>
      <Box className="flex border-b border-black">
        <Box className="w-2/3 border-r border-black">
          {Object.keys(EPCBands).map((key, index) => {
            const band = EPCBands[key as EPCRatings];
            const { width, color } = band;
            return (
              <Box className="border-b border-black" key={index}>
                <EPCBar name={key} width={width} color={color} />
              </Box>
            );
          })}
        </Box>

        <div className="flex w-1/3">
          <div className="relative w-1/2 border-r border-black">
            <Stack spaceY={1}>
              {Object.keys(EPCBands).map((key, index) => {
                const band = EPCBands[key as EPCRatings];

                return (
                  <div
                    key={index}
                    className="flex h-8 w-full items-center justify-center text-center text-xl font-bold"
                  >
                    {current_energy_rating === key && (
                      <div className="inline-block border bg-black px-4 py-2 leading-none">
                        {current_energy_efficiency}
                      </div>
                    )}
                  </div>
                );
              })}
            </Stack>
          </div>
          <div className="relative w-1/2">
            <Stack spaceY={1}>
              {Object.keys(EPCBands).map((key, index) => {
                const band = EPCBands[key as EPCRatings];

                return (
                  <div
                    className="h-8 text-center text-xl font-bold"
                    key={index}
                  >
                    {potential_energy_rating === key && (
                      <div className="inline-block border px-4 py-2 leading-none">
                        {potential_energy_efficiency}
                      </div>
                    )}
                  </div>
                );
              })}
            </Stack>
          </div>
        </div>
      </Box>
    </PageSectionBody>
  );
};
