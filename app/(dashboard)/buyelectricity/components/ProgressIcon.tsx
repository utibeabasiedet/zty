import React from "react";

interface Props {
  title: string;
  current: boolean;
  passed: boolean;
}

const ProgressIcon = ({ title, current, passed }: Props) => {
  return (
    <div className="relative ">
      <div
        className={`w-[40px] h-[40px] flex bg-[#F6F9FF] z-50 justify-center items-center border-2 border-[#b5cdf8] rounded-full cursor-pointer ${
          current && "border-[4px] border-primary-1 "
        } ${passed && "bg-primary-1"}`}
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.6666 5L7.49992 14.1667L3.33325 10"
            stroke="#F6F9FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-[12px] md:text-[14px]">
        <span
          className={`absolute -left-2 ${
            current && " text-primary-1 font-[500] md:font-bold"
          } ${passed && "text-primary-1"}`}
        >
          {title}
        </span>
      </span>
    </div>
  );
};

export default ProgressIcon;
