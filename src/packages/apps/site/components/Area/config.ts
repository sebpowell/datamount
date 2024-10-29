import { useEntityContext } from "@/packages/apps/explorer/components/Entity";
import { AreaProfileResponse } from "@/packages/server/modules/data/schemas/area-profile.schema";

const useAreaContext = () => useEntityContext<AreaProfileResponse>();

export { useAreaContext };
