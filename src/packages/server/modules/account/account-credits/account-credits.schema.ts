import { TypeOf, number, z } from "zod";

const BuyCreditsRequest = z.object({ quantity: number() });

type IBuyCreditsRequest = TypeOf<typeof BuyCreditsRequest>;

export { BuyCreditsRequest };

export type { IBuyCreditsRequest };
