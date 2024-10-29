// import { Box } from "@/packages/components/ui/Box";
// import { Heading } from "@/packages/components/ui/Heading";
// import { Text } from "@/packages/components/ui/Text";
// import { client } from "@/packages/server/clients/api";
// import { formatPrice } from "@/packages/utils/formatPrice";
// import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";
// import { differenceInMonths, parseISO } from "date-fns";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { geocode, RequestType } from "react-geocode";

// const PropertyCardImage = ({ property }: { property: IPropertySoldNearby }) => {
//   const [loadingState, setLoadingState] = useState(false);

//   const [coordinates, setCoordinates] = useState<{ lat: number; lng: 0 }>({
//     lat: 0,
//     lng: 0,
//   });

//   const router = useRouter();

//   const handleGeocodeAddress = async (address: string) => {
//     try {
//       const response = await geocode(RequestType.ADDRESS, address);

//       const { lat, lng } = response.results[0].geometry.location;

//       setCoordinates({ lat, lng });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     if (property.address) {
//       handleGeocodeAddress(property.address);
//     }
//   }, [property.address]);

//   return (
//     <div className="aspect-[16/9]">
//       <GoogleMap
//         mapContainerClassName="w-full h-full"
//         zoom={7}
//         center={{ lat: coordinates.lat, lng: coordinates.lng }}
//         options={{
//           fullscreenControl: false,
//         }}
//       >
//         <StreetViewPanorama
//           options={{
//             visible: true,
//             clickToGo: false,
//             addressControl: false,
//             panControl: false,
//             linksControl: false,
//             fullscreenControl: false,
//             imageDateControl: false,
//             motionTrackingControl: false,
//             enableCloseButton: false,
//             zoomControl: false,
//             position: {
//               lat: coordinates.lat,
//               lng: coordinates.lng,
//             },
//           }}
//         />
//       </GoogleMap>
//     </div>
//   );
// };

// export const PublicPropertyCard = ({
//   property,
// }: {
//   property: IPropertySoldNearby;
// }) => {
//   const { query } = client.data.addressMatch;

//   const handleFetchUdprn = async () => {
//     // setLoadingState(ApiLoadingStatus.LOADING);

//     try {
//       const { body } = await query({ query: { address: property.address } });

//       console.log(body);
//     } catch (e) {
//       // router.push(`/properties/${resp.data[0].udprn}`);
//       // setLoadingState(ApiLoadingStatus.IDLE);
//     }
//   };

//   return (
//     <Box className="space-y-2" onMouseOver={handleFetchUdprn}>
//       <Box className="aspect-video bg-gray-100">
//         <PropertyCardImage property={property} />
//       </Box>
//       <Box className="space-y-1.5">
//         <Heading as="h4" size="h4" className="leading-none">
//           {property.short_address}
//         </Heading>
//         <Box className="flex items-center space-x-2">
//           <Text className="leading-none">
//             £{formatPrice(property.last_sold_amount)}
//           </Text>

//           <Text className="text-sm leading-none text-text-tertiary">
//             {differenceInMonths(new Date(), parseISO(property.last_sold_date))}{" "}
//             mo. ago
//           </Text>
//         </Box>
//       </Box>
//     </Box>
//   );
// };
