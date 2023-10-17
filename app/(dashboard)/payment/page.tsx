// 'use client'
// import React, {useState} from 'react'
// import Process from './components/Processing'
// import Completing from './components/Completing'

// export default function Page() {
//     const [currentStep, setCurrentStep] = useState(3);

//   const handleNextStep = () => {
//     setCurrentStep(currentStep );
//   };
//   return (
//     <div>
//        <Process
//           progress={currentStep+2}
//           handleNextStep={handleNextStep}
//           // handlePrevStep={handlePrevStep}
//         />
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react';
import Process from './components/Processing';
import Completing from './components/Completing';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(3);
  const [isCompleting, setIsCompleting] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep);
    if (currentStep === 3) {
      setIsCompleting(true); // Set isCompleting to true when the "Refresh" button is clicked
    }
  };

  return (
    <div>
      {isCompleting ? (
        <Completing progress={4} handleNextStep={function (): void {  } } /> 
      ) : (
        <Process progress={currentStep + 2} handleNextStep={handleNextStep} />
      )}
    </div>
  );
}
