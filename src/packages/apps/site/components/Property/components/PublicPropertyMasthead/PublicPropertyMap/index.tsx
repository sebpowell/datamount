import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const PublicPropertyMap = () => {
  const { property } = usePropertyProfileContext();

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      zoom={16}
      center={{ lat: property?.latitude, lng: property?.longitude }}
      options={{
        fullscreenControl: false,
        zoomControl: false,
        mapTypeControl: false,
      }}
    >
      <Marker
        position={{
          lat: property?.latitude,
          lng: property?.longitude,
        }}
      />
    </GoogleMap>
  );
};
