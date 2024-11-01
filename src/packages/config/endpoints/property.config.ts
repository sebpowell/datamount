import { Endpoint } from "@/packages/config/endpoints";
import { DataServiceNames } from "@/packages/server/modules/data/data.config";
import {
  IPropertyRequestSchema,
  IPropertyResponseSchema,
} from "@/packages/server/modules/data/schemas/property.schema";

const propertyConfig: Endpoint<
  IPropertyRequestSchema,
  IPropertyResponseSchema
> = {
  name: "Property Profile",
  active: true,
  service: DataServiceNames.alpha,
  url: "/property/udprn/:udprn",
  slug: "property",
  color: "violet",
  externalUrl: "/property",
  description: "Return specific information about a given property.",
  contentfulId: "2TdqfXnLXyQMUlMe5HvDj5",
  credits: 3,
  fields: {
    udprn: {
      name: "udprn",
      placeholder: "e.g. 12 Map",
      description: "",
      type: "INPUT",
      defaultValue: "7348377",
      label: "UDPRN",
      required: true,
    },
  },
  example: {
    object: "property",
    url: "/property/udprn/7348377",
    udprn: "7348377",
    data: {
      udprn: 7348377,
      address_line_1: "The Map House",
      address_line_2: "Skelton",
      address_line_3: null,
      post_town: "Goole",
      formatted_address: "The Map House, Skelton, Goole, DN14 7RP",
      postcode: "DN14 7RP",
      outcode: "DN14",
      longitude: -0.8396,
      latitude: 53.7157,
      region: "Yorkshire and The Humber",
      district: "East Riding of Yorkshire",
      county: null,
      last_sold: [
        {
          date: "2005-09-27",
          amount: 345000,
        },
      ],
      sold_history: [
        {
          date: "2005-09-27",
          amount: 345000,
          pct_change: 136,
        },
        {
          date: "2001-10-26",
          amount: 146000,
          pct_change: null,
        },
      ],
      sold_nearby: [
        {
          last_sold_date: "2022-04-12",
          address: "1, Poplar Drive, Goole, East Riding Of Yorkshire, DN14 5PU",
          short_address: "1, Poplar Drive",
          last_sold_amount: 165000,
          type: "semi-detached",
          estimate: 175000,
          total_floor_area: "46",
        },
      ],
      valuation_estimate: 336000,
      valuation_upper: 357000,
      valuation_lower: 315000,
      lettings_estimate: 1330,
      lettings_upper: 1410,
      lettings_lower: 1250,
      valuation_indexed: 538000,
      valuation_indexed_upper: 568000,
      valuation_indexed_lower: 509000,
      property_type: "detached",
      built_form: null,
      current_energy_rating: null,
      potential_energy_rating: null,
      current_energy_efficiency: null,
      potential_energy_efficiency: null,
      lighting_cost_current: null,
      heating_cost_current: null,
      hot_water_cost_current: null,
      hotwater_description: null,
      total_floor_area: null,
      mains_gas_flag: null,
      extension_count: null,
      number_habitable_rooms: null,
      number_open_fireplaces: null,
      windows_description: null,
      mainheat_description: null,
      main_fuel: null,
      tenure: null,
      construction_age_band: null,
      beds: null,
      beds_estimate: null,
      listing_price_history: null,
      listing_date: null,
    },
  },
};

export { propertyConfig };
