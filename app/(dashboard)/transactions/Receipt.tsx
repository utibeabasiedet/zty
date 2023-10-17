
import { getUser } from "@/services/utilities";
import React, { useState, useEffect } from "react";
import useStateManager from "@/services/stateManager";
import CustomButton from '../../(homepage)/home/components/CustomBotton'



interface PropFix {
    address: string;
    maxWords: number;
  }

  interface ReceiptProps {
    transaction: {
      rechargeAmount
: string;
serviceCharge
: string;
      status: string;
      stateDisco: string;
      dateTimeStamp:string;
      meterNumber:string;
      token:string,
      receiptNumber
:string,
totalAmount:string,
numberOfUnits:string
      // Add more properties as needed
    };
  }

  const Receipt: React.FC<ReceiptProps> = ({ transaction }) => {
    const { dateTimeStamp, status, meterNumber, rechargeAmount,token,serviceCharge
      ,receiptNumber,numberOfUnits,totalAmount
    } = transaction;
   
  
    const getWordWithEllipsis = ({ address, maxWords }: PropFix) => {
        if (address.length <= maxWords) {
          return address;
        } else {
          const truncatedAddress = address.slice(0, maxWords);
          return `${truncatedAddress} ...`;
        }
      };
  return (
    
    <section className=''>
        

        <div className=' h-full'>
            <div className=' pb-[24px] pt-[32px] text-[24px] font-[500] border-b'>Transaction Details</div>
            <div className='w-[390px] mx-auto  '>
                <div className='text-center w-full mt-[40px] mb-[24px] text-[#808184]'>{dateTimeStamp}</div>
                <div className='p-[24px] rounded-[8px] bg-[#FCFCFC]  shadow-lg'>
                    <div className='border-b'>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Electricity</span><span>{totalAmount}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Fee:</span><span>{serviceCharge
}</span></div>
                    </div>
                    <div className='border-b'>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Status</span><span className='text-[#52C41A] text-[14px] font-medium'>SUCCESS</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>State Disco</span><span>{}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Meter Type</span><span>Prepaid</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Meter Name:</span><span>{}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Meter Number:</span><span >{meterNumber}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Address</span><span>{}</span></div>
                    </div >
                    <div className='border-b'>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Token</span><span className='text-primary'>{token}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Units</span><span>{numberOfUnits}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Amount Generated</span><span> {rechargeAmount}</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>VAT Amount</span><span>110</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Arrears</span><span>N/A</span></div>
                    <div className='flex justify-between items-center text-[#808184] my-4'><span>Debt Remaining</span><span>N/A</span></div>
                    </div>

                    <div className='flex justify-between items-center text-[#808184] my-2'><span>Transaction ID</span><span>{receiptNumber
}</span></div>
                   
                </div>
                <div className='mt-[24px]'>
                <CustomButton
            title={"Share Receipt"}
            btnType="button"
            containerStyles="border border-primary h-full bg-primary  text-white rounded-md  w-full "
            // handleClick={() => {
            //   handleNextStep();
            // }}
            // disabled={isLoading}
          />
            <CustomButton
            title={"Need help?"}
            btnType="submit"
            containerStyles="h-[48px] text-[#56585C] rounded-md w-[390px]"

            //   disabled={isLoading}
          />
                </div>
                
            </div>
            
        </div>
    </section>
  )
}


export default Receipt