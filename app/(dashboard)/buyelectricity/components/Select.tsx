// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import { get_states_discos } from "@/services/api/rechargeService";
// import Image from "next/image";

// // Define the type for a disco state object
// interface DiscoState {
//   stateID: number;
//   stateName: string;
//   discoLogo: string;
// }

// const CustomSelect = ({
//   selectedState,
//   setSelectedState,
// }: {
//   selectedState: string | null;
//   setSelectedState: (value: string | null) => void;
// }) => {
//   const [discoStates, setDiscoStates] = useState<DiscoState[]>([]);

//   useEffect(() => {
//     (async function GetStates() {
//       const { data } = await get_states_discos();
//       setDiscoStates(data.response);
//     })();
//   }, []);

//   const options = discoStates.map((d) => ({
//     value: d.stateID.toString(),
//     label: (
//       <div className="flex gap-3">
//         <Image
//           src="/assets/images/dashboard/disco/PHED.png"
//           alt={d.stateName}
//           height="30"
//           width="70"
//         />
//         {d.stateName}
//       </div>
//     ),
//   }));

//   const customStyles = {
//     control: (provided: any) => ({
//       ...provided,
//       height: "25px", // Change the height
//        // Change the background color
//       borderRadius: "0.375rem",
//     }),
//   };

//   return (
//     <div>
//       <Select
//         className="p-0 rounded-3xl"
//         styles={customStyles}
//         options={options}
//         isSearchable={false}
//         placeholder="Select State..."
//         value={options.find((option) => option.value === selectedState)}
//         onChange={(selectedOption) =>
//           setSelectedState(selectedOption?.value || null)
//         }
//       />
//     </div>
//   );
// };

// export default CustomSelect;

import React, { useState, useEffect } from "react";
import Select from "react-select";
import { get_states_discos } from "@/services/api/rechargeService";
import Image from "next/image";

// Define the type for a disco state object
interface DiscoState {
  stateID: number;
  stateName: string;
  discoLogo: string;
}

const CustomSelect = ({
  selectedState,
  setSelectedState,
}: {
  selectedState: string | null;
  setSelectedState: (value: string | null) => void;
}) => {
  const [discoStates, setDiscoStates] = useState<DiscoState[]>([]);

  useEffect(() => {
    (async function GetStates() {
      const { data } = await get_states_discos();
      setDiscoStates(data.response);
    })();
  }, []);

  const options = discoStates.map((d) => ({
    value: d.stateID.toString(),
    label: (
      <div className="flex gap-3">
        <Image
          src="/assets/images/dashboard/disco/PHED.png"
          alt={d.stateName}
          height="30"
          width="70"
        />
        {d.stateName}
      </div>
    ),
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      height: "25px",
      borderRadius: "0.375rem",
    }),
    indicatorSeparator: (provided: any) => ({
      display: "none", // Remove the horizontal line
    }),
  };

  return (
    <div>
      <Select
        className="p-0 rounded-3xl"
        styles={customStyles}
        options={options}
        isSearchable={false}
        placeholder="Select State..."
        value={options.find((option) => option.value === selectedState)}
        onChange={(selectedOption) =>
          setSelectedState(selectedOption?.value || null)
        }
      />
    </div>
  );
};

export default CustomSelect;

