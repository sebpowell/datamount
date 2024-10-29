import { usePropertyProfileContext } from "@/packages/apps/site/components/Property/components/Property.context";
import { useMapContext } from "@/packages/components/contexts/map.context";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

export const PublicPropertyImage = () => {
  const { property } = usePropertyProfileContext();

  const { isLoaded } = useMapContext();

  return (
    <div className="h-full w-full bg-gray-200">
      {isLoaded && property ? (
        <GoogleMap
          mapContainerClassName="w-full h-full"
          zoom={7}
          center={{ lat: property?.latitude, lng: property?.longitude }}
          options={{
            fullscreenControl: false,
          }}
        >
          <StreetViewPanorama
            options={{
              visible: true,
              clickToGo: false,
              addressControl: false,
              panControl: false,
              linksControl: false,
              fullscreenControl: false,
              imageDateControl: false,
              motionTrackingControl: false,
              enableCloseButton: false,
              zoomControl: false,
              position: {
                lat: property?.latitude,
                lng: property?.longitude,
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
