import { EPCRatings } from "@/packages/server/modules/data/schemas/property.schema";

export type EPCBand = {
  min: number;
  max: number;
  width: number;
  color: string;
};

export const EPCBands: { [key in EPCRatings]: EPCBand } = {
  [EPCRatings.A]: {
    min: 92,
    max: 100,
    width: 40,
    color: "#12853a",
  },
  [EPCRatings.B]: {
    min: 81,
    max: 91,
    width: 50,
    color: "#2c9f28",
  },
  [EPCRatings.C]: {
    min: 69,
    max: 80,
    width: 60,
    color: "#a0d20b",
  },
  [EPCRatings.D]: {
    min: 55,
    max: 68,
    width: 70,
    color: "#f6f403",
  },
  [EPCRatings.E]: {
    min: 39,
    max: 54,
    width: 80,
    color: "#f2c300",
  },
  [EPCRatings.F]: {
    min: 21,
    max: 38,
    width: 90,
    color: "#e77b16",
  },
  [EPCRatings.G]: {
    min: 1,
    max: 20,
    width: 100,
    color: "#de0024",
  },
};
