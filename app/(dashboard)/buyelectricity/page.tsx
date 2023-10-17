"use client";

import React, { useState } from "react";
import Electricity from "./components/Electricity";
import Confirm from "./components/Confirm";
import Payment from "./components/Payment";
import Process from "./components/Process";
import Completion from "./components/Completion";
import Completed from "./components/Completed";

function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="pb-10">
      {currentStep === 1 && (
        <Electricity progress={currentStep} handleNextStep={handleNextStep} />
      )} 

      {currentStep === 2 && (
        <Confirm
          progress={currentStep}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )} 

       {currentStep === 3 && (
        <Payment
          progress={currentStep}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />
      )} 
      {currentStep === 4 && (
        <Process
          progress={currentStep}
          handleNextStep={handleNextStep}
          // handlePrevStep={handlePrevStep}
        />
      )}
      {currentStep === 5 && (
        <Completed
          progress={currentStep}
          handleNextStep={handleNextStep}
          // handlePrevStep={handlePrevStep}
        />
      )}

      {currentStep === 6 && (
        <Completion progress={currentStep} handleNextStep={handleNextStep} />
      )}
    </div>
  );
}

export default Page;
