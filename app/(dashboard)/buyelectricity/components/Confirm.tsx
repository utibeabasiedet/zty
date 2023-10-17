import React from "react";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";
import Progress from "./Progress";
import useStateManager from "@/services/stateManager";

interface Props {
  progress: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}
interface PropFix {
  address: string;
  maxWords: number;
}

const Confirm = ({ progress, handlePrevStep, handleNextStep }: Props) => {
  const getWordWithEllipsis = ({ address, maxWords }: PropFix) => {
    if (address.length <= maxWords) {
      return address;
    } else {
      const truncatedAddress = address.slice(0, maxWords);
      return `${truncatedAddress} ...`;
    }
  };

  const { recharge } = useStateManager();

  return (
    <div>
      <Progress progress={progress} />
      <div className="max-w-[390px] mx-auto  text-[#808184]">
        <button
          className="text-primary  py-4 rounded-xl"
          onClick={handlePrevStep}
        >
          <span className="text-sm font-medium">&lt; Previous</span>
        </button>

        <div className="text-[18px] font-semibold mb-6">Confirm Details</div>
        <div className="my-2 confirmdetails h-[369px] p-6">
          <div className="flex justify-between items-center mb-4">
            <span>State Disco:</span>
            <span>{recharge.stateDisco.get()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Meter Number:</span>
            <span>{recharge.customerMeterNumber.get()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Meter Name:</span>
            <span title={recharge.customerName.get()}>
              {getWordWithEllipsis({
                address: recharge.customerName.get(),
                maxWords: 15,
              })}
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Address:</span>
            <span title={recharge.customerAddress.get()}>
              {getWordWithEllipsis({
                address: recharge.customerAddress.get(),
                maxWords: 15,
              })}
            </span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Amount:</span>
            <span>{recharge.amount.get()}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Fee:</span>
            <span>{recharge.fee.get()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Phone:</span>
            <span>{recharge.customerPhone.get()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Email:</span>
            <span title={recharge.customerEmail.get()}>
              {getWordWithEllipsis({
                address: recharge.customerEmail.get(),
                maxWords: 20,
              })}
            </span>
          </div>
        </div>

        <div className="my-6 flex justify-between items-center">
          <CustomButton
            title={"Next"}
            btnType="button"
            containerStyles="border border-primary h-full bg-primary  text-white rounded-md  w-full "
            handleClick={() => {
              handleNextStep();
            }}
            // disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
