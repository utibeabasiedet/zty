


import React from "react";

interface SaveDetailsProps {
  setIsRight: (value: boolean) => void; // Callback function to update isRight in the parent component
  isRight: boolean; // Current value of isRight
}

const SaveDetails: React.FC<SaveDetailsProps> = ({ setIsRight, isRight }) => {
  const handleClick = () => {
    setIsRight(!isRight); // Toggle the value of isRight when the button is clicked
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center w-8 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 focus:outline-none ${
        isRight ? "" : ""
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform -translate-x-[50%] rounded-full ${
          isRight ? "bg-primary translate-x-[40%]" : "bg-gray-400"
        }`}
      ></span>
    </button>
  );
};

export default SaveDetails;



