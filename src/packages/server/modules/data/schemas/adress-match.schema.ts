import { TypeOf, any, object, string, z } from "zod";

const addressMatchRequest = object({
  address: z
    .string()
    .optional()
    .refine((value) => value !== undefined && value.length >= 1, {
      message: "The input string must be at least 1 character long",
    }),
});

type AddressMatchRequest = TypeOf<typeof addressMatchRequest>;

const addressMatchResponseItem = object({
  building_name: string(),
  building_number: string(),
  delivery_point_suffix: string(),
  department_name: string(),
  dependent_locality: string(),
  dependent_thoroughfare_descriptor: string(),
  double_dependent_locality: string(),
  line_1: string(),
  line_2: string(),
  line_3: string(),
  organisation_name: string(),
  outcode: string(),
  po_box: string(),
  post_town: string(),
  postcode: string(),
  postcode_area: string(),
  postcode_sector: string(),
  postcode_type: string(),
  su_organisation_indicator: string(),
  sub_building_name: string(),
  thoroughfare_descriptor: string(),
  udprn: string(),
});

const addressMatchResponse = object({
  result: addressMatchResponseItem.array(),
});

type AddressMatchResponse = TypeOf<typeof addressMatchResponse>;

export type { AddressMatchRequest, AddressMatchResponse };

export { addressMatchRequest, addressMatchResponse };
