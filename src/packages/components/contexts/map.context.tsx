import { env } from "@/env.mjs";
import { createContext } from "@/packages/utils/react/create-context";
import { useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";
import { setKey } from "react-geocode";

const [MapContext, useMapContext] = createContext<{ isLoaded: boolean }>();

const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  setKey(env.NEXT_PUBLIC_GOOGLE_API_KEY);

  return <MapContext value={{ isLoaded }}>{children}</MapContext>;
};

export { MapContext, MapContextProvider, useMapContext };
