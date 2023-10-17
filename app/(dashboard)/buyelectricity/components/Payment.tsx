

import React, { useEffect, useState } from "react";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";
import Progress from "./Progress";
import useStateManager from "@/services/stateManager";
import PaymentCard, { Card } from "./PaymentCard";
import { get_customer_card_history } from "@/services/api/rechargeService";
import NewA from '../../../../public/assets/images/dashboard/card/NEWA.png'

import PaymentModal from "./Modal";

interface Props {
  progress: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Payment = ({ progress, handlePrevStep, handleNextStep }: Props) => {
  const { recharge } = useStateManager();
  const [cards, setCards] = useState<Card[]>();
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [isSelectedNew, setIsSelectedNew] = useState<boolean>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    (async function GetStates() {
      const data = get_customer_card_history();
      setCards(data);
    })();
  }, [setCards]);

  const handleCardClick = (cardId: number) => {
    if (selectedCardId === cardId) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(cardId);
    }
    setIsSelectedNew(false);
  };

  const handlePaymentClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleConfirmPayment = () => {
    
    handleClosePaymentModal();
  };

  return (
    <div>
      <Progress progress={progress} />

      <form className="max-w-[390px] mx-auto">
        <button
          className="text-primary mt-6 mb-6 rounded-xl"
          onClick={handlePrevStep}
        >
          <span className="text-sm font-medium">&lt; Previous</span>
        </button>
        <div className="flex items-center justify-center flex-col gap-3 mb-5">
          <span className="text-[#808184] text-sm font-medium">
            Total Payment
          </span>
          <h3 className="text-[#2C2F34] text-[24px] font-medium">
            {recharge.amount.get()}.00
          </h3>
        </div>

        <div className="my-2 confirmdetails h-[154px] p-6">
          <div className="flex justify-between items-center mb-4 text-[#808184]">
            <span>Meter Name:</span>
            <span>{recharge.customerName.get()}</span>
          </div>
          <div className="flex justify-between items-center mb-4 text-[#808184]">
            <span>Meter Number:</span>
            <span>{recharge.customerMeterNumber.get()}</span>
          </div>
          <div className="flex justify-between items-center mb-4 text-[#808184]">
            <span>Fee:</span>
            <span>{recharge.fee.get()}</span>
          </div>
        </div>
        <div className="confirmdetails">
          <div className="bg-[#F6F9FF] font-semibold text-[16px] py-[16px] px-[24px] text-[#808184]">
            {" "}
            Payment Method
          </div>
          <div className="bg-[#FCFCFC] px-[24px]">
            {cards?.map((c) => (
              <PaymentCard
                key={c.cardId}
                card={c}
                isSelected={c.cardId === selectedCardId}
                onClick={() => handleCardClick(c.cardId)}
              />
            ))}

            {/* Custom Payment Card */}
            <PaymentCard
              card={{
                cardId: 0,
                bank: "Pay with New Card",
                // cardType: "NEW",
              }}
              isSelected={isSelectedNew}
              onClick={handlePaymentClick}
              cardTypeStyle="text-red-500"
              bankStyle=" text-[16px] text-[#56585C]"
              containerStyle="bg-blue-200"
              customImage={NewA }
            />
          </div>
        </div>

        <div className="my-2 flex justify-between items-center">
          <CustomButton
            title={`Pay ${recharge.amount.get()}.00`}
            btnType="button"
            containerStyles="border border-primary h-full bg-primary text-white rounded-md w-full "
            handleClick={handlePaymentClick}
          />
        </div>
      </form>
      {/* <div className="  flex items-center justify-center">
      <PaymentModal
  isOpen={isPaymentModalOpen}
  onClose={handleClosePaymentModal}
  onConfirmPayment={handleConfirmPayment}
  handleNextStep={handleNextStep} // Add this line
/>
       </div> */}
       <div className={isPaymentModalOpen ? "overlay " : ""}>
  <PaymentModal
    isOpen={isPaymentModalOpen}
    onClose={handleClosePaymentModal}
    onConfirmPayment={handleConfirmPayment}
    handleNextStep={handleNextStep}
  />
</div>

      

    </div>
  );
};

export default Payment;

