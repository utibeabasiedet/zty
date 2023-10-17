import React from "react";
import Image from "next/image";

interface Props {
  image: any;
  title: string;
  description: string;
}

const BenefitsCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="flex  benshad    flex-col gap-4 w-[94%] md:w-[350px] my-4 p-[40px] rounded-[10px] mx-auto ">
      <div className="  ">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
        />
      </div>  
      <h3 className="text-2xl font-[600px] text-primary">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default BenefitsCard;
