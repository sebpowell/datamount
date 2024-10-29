import { TypeOf, any, object, string, z } from "zod";

const PropertyRequestSchema = object({ udprn: string() });

export enum BuiltForm {
  "enclosed_end_terrace" = "enclosed_end_terrace",
}

export enum EPCRatings {
  "A" = "A",
  "B" = "B",
  "C" = "C",
  "D" = "D",
  "E" = "E",
  "F" = "F",
  "G" = "G",
}

export enum HotWaterType {
  "electric_immersion_off_peak" = "electric_immersion_off_peak",
}

export enum MainHeat {
  "electric_storage_heaters" = "electric_storage_heaters",
}

export enum PropertyType {
  "flat_maisonette" = "flat_maisonette",
}

export enum Tenure {
  "owner_occupied" = "Owner occupied",
  "rental_private" = "Rental (private)",
}

export enum Windows {
  "fully_double_glazed" = "fully_double_glazed",
}

type IPropertyRequestSchema = TypeOf<typeof PropertyRequestSchema>;

const SoldHistorySchema = z.object({
  date: z.string(),
  amount: z.number(),
  pct_change: z.number().nullable().optional(),
});

type IPropertySoldHistory = TypeOf<typeof SoldHistorySchema>;

const SoldNearbySchema = z.object({
  last_sold_date: z.string(),
  address: z.string(),
  short_address: z.string(),
  last_sold_amount: z.number(),
  type: z.string(),
  estimate: z.number(),
  total_floor_area: z.string(),
});

type SoldNearby = TypeOf<typeof SoldNearbySchema>;

const PropertySchema = z.object({
  udprn: z.number(),
  address_line_1: z.string(),
  address_line_2: z.string(),
  address_line_3: z.string().nullable(),
  post_town: z.string(),
  formatted_address: z.string(),
  postcode: z.string(),
  outcode: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  region: z.string(),
  district: z.string(),
  county: z.string().nullable(),
  last_sold: z.array(SoldHistorySchema).nullable(),
  sold_history: z.array(SoldHistorySchema).nullable(),
  sold_nearby: z.array(SoldNearbySchema),
  valuation_estimate: z.number(),
  valuation_upper: z.number(),
  valuation_lower: z.number(),
  lettings_estimate: z.number(),
  lettings_upper: z.number(),
  lettings_lower: z.number(),
  valuation_indexed: z.number().nullable(),
  valuation_indexed_upper: z.number().nullable(),
  valuation_indexed_lower: z.number().nullable(),
  property_type: z.string().nullable(),
  built_form: z.string().nullable(),
  current_energy_rating: z.string().nullable(),
  potential_energy_rating: z.string().nullable(),
  current_energy_efficiency: z.number().nullable(),
  potential_energy_efficiency: z.number().nullable(),
  lighting_cost_current: z.number().nullable(),
  heating_cost_current: z.number().nullable(),
  hot_water_cost_current: z.number().nullable(),
  hotwater_description: z.string().nullable(),
  total_floor_area: z.number().nullable(),
  mains_gas_flag: z.string().nullable(),
  extension_count: z.number().nullable(),
  number_habitable_rooms: z.number().nullable(),
  number_open_fireplaces: z.number().nullable(),
  windows_description: z.string().nullable(),
  mainheat_description: z.string().nullable(),
  main_fuel: z.string().nullable(),
  tenure: z.string().nullable(),
  construction_age_band: z.string().nullable(),
  beds: z.string().nullable(),
  beds_estimate: z.number().nullable(),
  listing_price_history: z.array(any()).nullable(),
  listing_date: z.string().nullable(),
});

const PropertyResponseSchema = object({
  object: string(),
  url: string(),
  udprn: string(),
  data: PropertySchema,
});

type IPropertyResponseSchema = TypeOf<typeof PropertyResponseSchema>;

export type {
  IPropertyRequestSchema,
  IPropertyResponseSchema,
  IPropertySoldHistory,
  SoldNearby,
};

export { PropertyRequestSchema, PropertyResponseSchema };
