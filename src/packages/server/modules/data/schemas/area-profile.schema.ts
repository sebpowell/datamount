import { BaseResponseSchema } from "@/packages/server/modules/data/schemas/base-response.schema";
import { TypeOf, any, object, string, z } from "zod";

const locationSchema = z.object({
  match_type: z.string(),
  place: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  outcode: z.string(),
  district: z.string(),
  county: z.string(),
  region: z.string(),
  sector: z.string().nullable(),
});

const averagePricesSchema = z.object({
  detached: z.number(),
  flat_maisonette: z.number(),
  semi_detached: z.number(),
  terraced: z.number(),
});

const rentalEstimatesSchema = z.object({
  detached: z.number(),
  flat_maisonette: z.number(),
  semi_detached: z.number(),
  terraced: z.number(),
});

const recentlySoldSchema = z.array(
  z.object({
    address: z.string(),
    date: z.string(),
    type: z.string(),
    amount: z.number(),
    estimate: z.number(),
  }),
);

const areaDemographicValueSchema = z.object({
  label: z.string(),
  proportion: z.number(),
});

type AreaDemographicValueSchema = TypeOf<typeof areaDemographicValueSchema>;

const areaDemographicSchema = z.object({
  age: z.array(areaDemographicValueSchema),
  bedrooms: z.array(areaDemographicValueSchema),
  marital_status: z.array(areaDemographicValueSchema),
  social_grade: z.array(areaDemographicValueSchema),
  tenure: z.array(areaDemographicValueSchema),
});

type AreaDemographicSchema = TypeOf<typeof areaDemographicSchema>;

const floodRisksSchema = z.array(
  z.object({
    postcode: z.string(),
    longitude: z.number(),
    latitude: z.number(),
    risk: z.string(),
  }),
);

const stationsSchema = z.array(
  z.object({
    name: z.string(),
    operator: z.string(),
    longitude: z.number(),
    latitude: z.number(),
    postcode: z.string(),
    toilets: z.string(),
    wifi: z.string(),
    waiting_room: z.string().nullable(),
    lost_luggage: z.string(),
    lost_property: z.string().nullable(),
    distance: z.number(),
  }),
);

const schoolsSchema = z.array(
  z.object({
    establishment_name: z.string(),
    longitude: z.number(),
    latitude: z.number(),
    distance: z.number(),
    ofsted_rating_name: z.string(),
    phase_of_education_name: z.string(),
    postcode: z.string(),
    school_capacity: z.number(),
  }),
);

const listedBuildingsSchema = z.array(
  z.object({
    name: z.string(),
    location: z.string(),
    list_date: z.string(),
    grade: z.string(),
    longitude: z.number(),
    latitude: z.number(),
    distance: z.number(),
  }),
);

const propertyPriceTrendsSchema = z.array(
  z.object({
    date: z.string(),
    region_name: z.string(),
    detached_average_price: z.number(),
    semi_detached_average_price: z.number(),
    terraced_average_price: z.number(),
    flat_average_price: z.number(),
    overall_index: z.number(),
  }),
);

const areaProfile = z.object({
  location: locationSchema,
  average_prices: averagePricesSchema,
  rental_estimates: rentalEstimatesSchema,
  recently_sold: recentlySoldSchema,
  demographics: areaDemographicSchema,
  flood_risks: floodRisksSchema,
  stations: stationsSchema,
  schools: schoolsSchema,
  listed_buildings: listedBuildingsSchema,
  average_prices_over_time: propertyPriceTrendsSchema,
});

const areaProfileRequest = object({
  id: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type AreaProfileRequest = TypeOf<typeof areaProfileRequest>;

const areaProfileResponse = object({
  string: string(),
  data: areaProfile,
}).merge(BaseResponseSchema);

type AreaProfileResponse = TypeOf<typeof areaProfileResponse>;

export type {
  AreaProfileResponse,
  AreaProfileRequest,
  AreaDemographicSchema,
  AreaDemographicValueSchema,
};

export { areaProfileResponse, areaProfileRequest };
