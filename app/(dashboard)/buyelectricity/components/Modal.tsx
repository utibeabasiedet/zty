// PaymentModal.tsx
import Image from "next/image";
import React from "react";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";
import Input from "../../components/Input";
import { useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPayment: () => void;
  handleNextStep: () => void;
}

const PaymentModal = ({ isOpen, onClose, handleNextStep }: Props) => {
  const router = useRouter();
  if (!isOpen) {
    return null;
  }

  const handleButtonClick = () => {
    // handleNextStep();
    router.push("/payment");
  };

  return (
    <div className=" flex flex-col justify-evenly items-center absolute top-10 border border-primary bg-white rounded-[8px] shadow-2xl h-[394px] w-[400px]">
      <div className="w-[64px] h-[64px] p-2 rounded-full bg-[#56585C] bg-opacity-10 ">
        <div className="w-[48px] h-[48px] p-2 bg-[#D8E5FE] rounded-full">
          <Image
            src="/assets/images/dashboard/card-pin-1.png"
            width={48}
            height={48}
            alt=""
          />
        </div>
      </div>
      <p className="text-[16px] font-semibold text-[#56585C]">Enter CVV Code</p>

      <div className="space-x-2">
        <Input />
        <Input />
        <Input />
      </div>

      <div className="flex space-x-2 border-t pt-[24px] border-[#D3D4D5] ">
        <CustomButton
          title={"Cancel"}
          containerStyles="border border-primary h-[48px] text-primary rounded-md w-[146px] "
          handleClick={() => {
            onClose();
          }} // Handle cancel button click
        />

        <CustomButton
          title={"Confirm"}
          containerStyles="border border-primary  h-[48px] bg-primary text-white rounded-md w-[146px]"
          // handleClick={() => {
          //   handleNextStep();
          // }}
          handleClick={handleButtonClick}
          // handleClick={() => {
          //   handleNextStep();
          // }}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
