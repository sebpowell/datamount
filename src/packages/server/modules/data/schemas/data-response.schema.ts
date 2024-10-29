import { typeEnum } from "@/packages/server/modules/data/schemas/data-request.schema";
import { z } from "zod";

export const responseSchemas = z.object({
  [typeEnum.enum.autocomplete]: z.any().nullable(),
  [typeEnum.enum.postcodeLookup]: z.any().nullable(),
});
