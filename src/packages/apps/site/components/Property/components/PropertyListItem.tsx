// import { addressMatch } from "@/services/api/data/data";
// import { differenceInMonths, parseISO } from "date-fns";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { formatPrice } from "@/utils/formatPrice";
// import { SoldNearby } from "@/models/property/property.interface";
// import { ApiLoadingStatus } from "@/enum/api-loading-status.enum";

// export const PublicPropertyListItem = ({
//   property,
// }: {
//   property: SoldNearby;
// }) => {
//   const [loadingState, setLoadingState] = useState<ApiLoadingStatus>(
//     ApiLoadingStatus.IDLE
//   );

//   const router = useRouter();

//   const handleFetchUdprn = (address: string) => {
//     setLoadingState(ApiLoadingStatus.LOADING);

//     addressMatch(address).then((resp) => {
//       // @ts-ignore
//       router.push(`/properties/${resp.data[0].udprn}`);
//       setLoadingState(ApiLoadingStatus.IDLE);
//     });
//   };

//   return (
//     <div
//       className="relative flex px-3 py-3 cursor-pointer hover:bg-white"
//       onClick={() => handleFetchUdprn(property.address)}
//     >
//       {loadingState === "LOADING" && (
//         <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-40"></div>
//       )}
//       <div className="flex flex-1">
//         <div className="mr-5">
//           <div
//             className="aspect-[16/9] bg-gray-200 w-32 h-24 rounded-md bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://media.rightmove.co.uk/224k/223601/130972628/223601_197529_IMG_00_0000.jpeg)",
//             }}
//           ></div>
//         </div>
//         <div>
//           <div className="mb-3 text-sm">
//             <div className="inline-block px-2 py-0.5 mb-1 text-xs uppercase bg-gray-300 rounded-sm">
//               {property.type}
//             </div>
//           </div>
//           <h2 className="mb-2 font-medium leading-none text-md hover:underline">
//             {property.address}
//           </h2>

//           {property.total_floor_area}

//           {property.estimate}

//           <div className="mb-2">£{formatPrice(property.last_sold_amount)}</div>
//           <div className="text-sm text-gray-500">
//             Sold{" "}
//             {differenceInMonths(new Date(), parseISO(property.last_sold_date))}{" "}
//             mo. ago
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export {};
