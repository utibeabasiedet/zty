// 'use client'
// import React, { useState, useEffect } from "react";

// import Displays from './Displays'
// import {  getUser } from "@/services/utilities";
// import {
//     get_transactions,
//   } from "@/services/api/rechargeService";



// function page() {
    
//   const [pageLoaded, setPageLoaded] = useState(false);

//   if (!pageLoaded) {
//     return (
//       <div className="flex flex-col justify-center items-center h-[80vh]">
//         <div className="relative w-32 h-32">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
//             <div className="w-16 h-16 bg-blue-300 rounded-full animate-pulse"></div>
//           </div>
//           <div className="w-32 h-32 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
//         </div>
//         <p className="mt-4 text-xl font-semibold text-blue-500">Loading...</p>
//       </div>
//     );
//   }

   
//   return (
//     <main className="">
//       <Displays/>
//     </main>
//   );
// }

// export default page;
'use client'
import React, { useState, useEffect } from "react";
import Displays from './Displays';
import { getUser } from "@/services/utilities";
import { get_transactions } from "@/services/api/rechargeService";

function Page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const currentUser = getUser();
//   console.log(currentUser)
  const { userId } = currentUser;
  useEffect(() => {
    // Perform an API call
    get_transactions( userId)
      .then((response) => {
        // Data has been successfully fetched, so set pageLoaded to true
        setPageLoaded(true);
      })
      .catch((error) => {
        // Handle the error here, and you may set pageLoaded to false if needed.
        setPageLoaded(false);
      });
  }, []);

  if (!pageLoaded) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-16 h-16 bg-blue-300 rounded-full animate-pulse"></div>
          </div>
          <div className="w-32 h-32 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-xl font-semibold text-blue-500">Loading...</p>
      </div>
    );
  }

  return (
    <main className="">
      <Displays />
    </main>
  );
}

export default Page;
