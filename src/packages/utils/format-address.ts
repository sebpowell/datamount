import { IPropertyResponseSchema } from "@/packages/server/modules/data/schemas/property.schema";

export const formatAddress = (
  property: IPropertyResponseSchema["data"] | null,
) => {
  const result = [];

  property?.post_town && result.push(property.post_town);

  property?.postcode && result.push(property.postcode);

  property?.county && result.push(property.county);

  return result.join(", ");
};
