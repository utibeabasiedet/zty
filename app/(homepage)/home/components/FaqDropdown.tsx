import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqDropdownProps {
  faqItem: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}

const FaqDropdown = ({ faqItem, isOpen, onClick }: FaqDropdownProps) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 border-b focus:outline-none transition-opacity duration-300 ease-in-out"
      >
        <span className="text-[16px] max-w-[90%] text-left tracking-tight leading-[140%] font-medium text-[#56585C]">
          {faqItem.question}
        </span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#075DED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#075DED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div
          className={`p-4 bg-white border-b transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <p dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
