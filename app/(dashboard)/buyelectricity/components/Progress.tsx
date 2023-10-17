import React from "react";
import ProgressIcon from "./ProgressIcon";

interface Props {
  progress: number;
}

const Progress = ({ progress }: Props) => {
  return (
    <section className="bg-[#F6F9FF]  rounded-md h-[116px] relative">
      <div className="items-center flex justify-between h-full w-[90%] max-w-[434px] mx-auto relative">
        <ProgressIcon
          title="Electricity"
          current={progress > 0}
          passed={progress > 1}
        />
        {/* <div
    className="absolute z-20 h-[2px] bg-[#b5cdf8]  left-10 top-1/2 transform -translate-y-3"
    style={{ width: 'calc(40% - 20px)' }} // Calculate the width here
  ></div> */}
        <div className="h-[2px] bg-[#b5cdf8] w-full "></div>
        <ProgressIcon
          title="Confirm"
          current={progress > 1}
          passed={progress > 2}
        />
        {/* <div
    className="absolute h-[2px]  bg-[#b5cdf8] right-14 top-1/2 transform -translate-y-3"
    style={{ width: 'calc(38% - 20px)' }} 
  ></div> */}
        <div className="h-[2px] bg-[#b5cdf8] w-full "></div>
        <ProgressIcon
          title="Payment"
          current={progress > 2}
          passed={progress > 3}
        />
      </div>
    </section>
  );
};

export default Progress;
