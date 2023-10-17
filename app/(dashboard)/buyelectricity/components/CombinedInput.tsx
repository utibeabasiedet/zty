


// import React, { useState, useEffect, useRef } from "react";
// import { z, ZodString } from "zod";

// export interface CombinedInputOptions {
//   text: string;
//   value: string;
// }

// interface Props {
//   options: CombinedInputOptions[];
//   value: string;
//   onChange: (value: string) => void;
//   validationSchema: ZodString;
// }



// const CombinedInput = ({ options, value, onChange, validationSchema }: Props) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [inputValue, setInputValue] = useState(value);
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     setInputValue(newValue);
//     onChange(newValue);
//   };

//   const handleSelectOption = (option: string) => {
//     setInputValue(option);
//     setShowOptions(false);
//     onChange(option);
//   };

//   const handleBlur = () => {
//     try {
//       validationSchema.parse(inputValue);
//     } catch (error) {
//       // Handle validation error here
//       console.error((error as Error).message);
//     }
//   };

//   useEffect(() => {
//     // Add event listener to close the dropdown when clicking outside
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         inputRef.current &&
//         !inputRef.current.contains(event.target as Node) &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setShowOptions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={inputRef}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         onBlur={handleBlur} // Add onBlur event
//         placeholder="Input meter number"
//         onClick={() => setShowOptions(!showOptions)}
//         className={`w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600`}
//       />
//       {showOptions && (
//         <div className="absolute z-10 top-full left-0 w-full border border-t-0 border-[#D3D4D5] bg-white" ref={dropdownRef}>
//           {options.map((o) => (
//             <div
//               key={o.value}
//               onClick={() => handleSelectOption(o.value)}
//               className="px-2 py-1 cursor-pointer hover.bg-[#F1F1F1]"
//             >
//               {o.value} - {o.text}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CombinedInput;

import React, { useState, useEffect, useRef } from "react";
import { z, ZodString } from "zod";

export interface CombinedInputOptions {
  text: string;
  value: string;
}

interface Props {
  options: CombinedInputOptions[];
  value: string;
  onChange: (value: string) => void;
  validationSchema: ZodString;
}

const CombinedInput = ({ options, value, onChange, validationSchema }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [selectedText, setSelectedText] = useState(""); // New state for selected text
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleSelectOption = (option: CombinedInputOptions) => {
    setInputValue(option.value);
    setSelectedText(option.text); // Set the selected text
    setShowOptions(false);
    onChange(option.value);
  };

  const handleBlur = () => {
    try {
      validationSchema.parse(inputValue);
    } catch (error) {
      // Handle validation error here
      console.error((error as Error).message);
    }
  };

  useEffect(() => {
    // Add event listener to close the dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      {selectedText && ( // Render selected text if available
        <div className="text-sm flex justify-end text-gray-600 mb-1">{selectedText}</div>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Input meter number"
        onClick={() => setShowOptions(!showOptions)}
        className={`w-full outline-none border border-[#D3D4D5] px-2 py-1 rounded-lg focus:border-blue-600`}
      />
      {showOptions && (
        <div className="absolute z-10 top-full left-0 w-full border border-t-0 border-[#D3D4D5] bg-white" ref={dropdownRef}>
          {options.map((o) => (
            <div
              key={o.value}
              onClick={() => handleSelectOption(o)}
              className="px-2 py-1 cursor-pointer hover:bg-[#F1F1F1] transition-colors"
            >
              {o.value} - {o.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CombinedInput;
