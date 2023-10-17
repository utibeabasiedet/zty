import React, { useState, useEffect } from "react";
import { getUser } from "@/services/utilities";
import DisplayCard from './DisplayCard';
import { get_transactions } from "@/services/api/rechargeService";
import CustomButton from '../../(homepage)/home/components/CustomBotton'
import Plus from '../../../public/assets/images/dashboard/plus.png'

const Displays = () => {
  const [listTransactions, setListTransactions] = useState<any[]>([]);
  const currentUser = getUser();
//   console.log(currentUser)
  const { userId } = currentUser;

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await get_transactions(userId);
        setListTransactions(data.response);
        console.log("API call successful:", data);
      } catch (error) {
        console.error("API call error:", error);
      }
    };

    // Call the API function when the component mounts
    getTransactions();
  }, [userId]);

  
  const lastThreeTransactions = listTransactions.slice(-3);
  return (
    <div >
        <div className="flex justify-between border-b items-end pb-6 ">
        <div className="flex flex-col gap-1 text-[#949597]"><span>Welcome back, </span><span className="text-[#56585C] font-medium gap-1 text-2xl">070315908717</span> <span>Sunday, Mar 26 | 7:00PM</span></div>
            <div>
            <CustomButton
            title="Buy Again"
            btnType="submit"
            containerStyles="flex-row-reverse bg-primary text-white gap-1  rounded-[6px] custom-button-override2 w-auto"
            // containerStyles="h-[32px] px-0 !important border text-[#206DEF] text-[12px] border-primary text-primary px-0 rounded-md w-[96px]"
            rightIcon={Plus}

            //   disabled={isLoading}
          />
            </div>
        </div>
       
        <div className="mb-[28px] flex justify-between  items-center mt-6">
            <span className="text-[#56585C] text-[18px] font-medium">Your Last 3 Transactions</span>
            <span className="text-[#808184] text-[16px] font-[400px]">View More</span>
        </div>
        
        <div className=' flex flex-wrap gap-6 lg:justify-start justify-center items-center '>
        <>
        
{lastThreeTransactions.map((d) => {
  console.log("Data for DisplayCard:", d); //  line for debugging
  return (
    <div key={d.token} className="flex gap-3">
      <DisplayCard
        dateTimeStamp={d.dateTimeStamp}
        status={d.status}
        meterNumber={d.meterNumber}
        amount={d.rechargeAmount}
      />
    </div>
  );
})}

                    </>
        </div>
      
      
     
    </div>
  );
};

export default Displays;
