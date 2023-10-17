

'use client'

import React, { useState, useEffect, useCallback } from "react";
import Receipt from "./Receipt";
import CustomButton from "../../(homepage)/home/components/CustomBotton";
import { get_transactions } from "@/services/api/rechargeService";
import { getUser } from "@/services/utilities";
import Left from '../../../public/assets/images/dashboard/arrow-left.png'
function Page() {
  const [transactions, setTransactions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently displayed receipt
  const currentUser = getUser();
  const { userId } = currentUser;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await get_transactions(userId);
        setTransactions(data.response);
      } catch (error) {
        console.error("API call error:", error);
      }
    };

    fetchTransactions();
  }, [userId]);

  const handleNext = useCallback(() => {
    if (currentIndex < transactions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, transactions]);

  const handleBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  return (
    <main className="">
      <div className="flex justify-between ">
      <div>
      <div>
        <CustomButton
          title="Back"
          btnType="button"
          containerStyles="   text-slate-500 custom-button-override3 gap-2   w-auto"
          handleClick={handleBack}
          disabled={currentIndex === 0}
          rightIcon={Left}
        />
        
      </div>
      </div>
      
      <div>
      <button disabled={currentIndex === 0} onClick={handleBack} className="p-2 rounded-l-md border-[#B5CDF8] border">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#B5CDF8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
      </button>
      <button onClick={handleNext}
  disabled={currentIndex === transactions.length - 1} className="p-2 rounded-r-md border-[#B5CDF8] border">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#075DED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
      </button>
      </div>
      
      </div>
      <div className="card-electric px-4 mt-4">
      {transactions.length > 0 && currentIndex >= 0 && currentIndex < transactions.length && (
        <Receipt transaction={transactions[currentIndex]} />
      )}
      </div>
      
      
    </main>
  );
}

export default Page;
