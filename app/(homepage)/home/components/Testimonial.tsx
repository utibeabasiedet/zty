// Testimonial.js
import React from "react";
import Image from "next/image";

type props = {
    name:string,
    location:string,
    content:string,
    imageSrc:any
}

const Testimonial = ({ name, location, content, imageSrc }:props) => {
  return (
    <div className="flex border-r bg-white min-h-[372px] md:h-[384px] rounded-xl p-6 md:p-16">
      <div className="slideme md:border-r flex flex-col gap-12 items-start pr-4">
        <span className="flex items-center gap-4">
          <Image src={imageSrc} height={56} width={56} alt="px" />
          <div>
            <h4 className="font-semibold text-[18px] text-[#2C2F34]">{name}</h4>
            <p className="font-[400px] text-[14px] text-[#2C2F34]">{location}</p>
          </div>
        </span>
        <p className="text-[16px] font-[400px] text-[#2C2F34]">{content}</p>
      </div>
    </div>
  );
};

export default Testimonial;
