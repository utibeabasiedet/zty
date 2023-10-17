import React from "react";
import Image from "next/image";

type Props = {
  img: any;
  text: string;
  containerStyles?: string;
};

const FloatingDiv = ({ img, text, containerStyles }: Props) => {
  return (
    <div
      className={`inline-flex z-50 p-[auto] sm:p-[12px] flex-row items-center justify-center  gap-2 sm:gap-5 h-[47px] sm:h-[80px] bg-white max-w-[102px] sm:max-w-[170px] rounded-[8px] shadow-md ${containerStyles}`}
    >
      <Image
        src={img}
        height={40}
        width={40}
        alt="hero"
        className="object-contain ml-1"
      />
      <span className="sm:text-[14px] text-[10px]">{text}</span>
    </div>
  );
};

export default FloatingDiv;
