import { camelCase, startCase } from "lodash";

export const toTitleCase = (value: string | number | null) => {
  return startCase(camelCase(value?.toString()));
};
