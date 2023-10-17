// import React from 'react'
// import CustomButton from '../../(homepage)/home/components/CustomBotton'
// import {AiOutlineRight} from 'react-icons/ai'
// import useStateManager from "@/services/stateManager";
// import Rotate from '../../../public/assets/images/dashboard/rotate-cw.png'

// type Props = {}

// function DisplayCard({}: Props) {
//     const { recharge } = useStateManager();
//   return (
//     <div className='p-[16px] w-[323px] rounded-[6px] border border-[#83ADF5]'>
//         <div className='text-[#949597] border-b pb-[16px]'>
//             <div className='flex justify-between items-center'><span>Meter Number:</span><span>{recharge.customerMeterNumber.get()}</span></div>
//             <div className='flex justify-between items-center'><span>Amount:</span><span>{recharge.amount.get()}</span></div>
//             <div className='flex justify-between items-center'><span>Date:</span><span>Mar 25, 2023 10:10 PM</span></div>
//             <div className='flex justify-between items-center '><span>Status</span><span className='text-[#52C41A] px-[2px] bg-[#EEF9E8]'>Success</span></div>
//         </div>
//         <div className='flex justify-between items-center mt-3'>
//             <div className='text-[#206DEF] text-[12px] flex items-center'>View Details <AiOutlineRight /> </div>
//             <CustomButton
//             title="Buy Again"
//             btnType="submit"
//             containerStyles="custom-button-override  rounded-[6px]"
//             // containerStyles="h-[32px] px-0 !important border text-[#206DEF] text-[12px] border-primary text-primary px-0 rounded-md w-[96px]"
//             rightIcon={Rotate}

//             //   disabled={isLoading}
//           />
//         </div>
//     </div>
//   )
// }

// export default DisplayCard 
import React from 'react';
import CustomButton from '../../(homepage)/home/components/CustomBotton';
import { AiOutlineRight } from 'react-icons/ai';
import useStateManager from "@/services/stateManager";
import Rotate from '../../../public/assets/images/dashboard/rotate-cw.png';

interface DisplayCardProps {
  dateTimeStamp: string;
  status: boolean;
  meterNumber: string;
  amount:string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ dateTimeStamp, status, meterNumber,amount }) => {
  const { recharge } = useStateManager();

  return (
    <div className='p-[16px] w-[323px] rounded-[6px] border border-[#83ADF5]'>
      <div className='text-[#949597] border-b pb-[16px]'>
        <div className='flex justify-between items-center'>
          <span>Meter Number:</span>
          <span>{meterNumber}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Amount:</span>
          <span>{amount}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Date:</span>
          <span>{dateTimeStamp}</span>
        </div>
        <div className='flex justify-between items-center '>
          <span>Status:</span>
          <span className={`px-[2px] ${status ? 'text-[#52C41A] bg-[#EEF9E8]' : 'bg-[#FFF7E7] text-[#FAAD14]'} `}>
            {status ? 'Success' : 'Failed'}
          </span>
        </div>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div className='text-[#206DEF] text-[12px] flex items-center'>
          View Details <AiOutlineRight />
        </div>
        <CustomButton
          title="Buy Again"
          btnType="submit"
          containerStyles="custom-button-override  rounded-[6px]"
          rightIcon={Rotate}
        />
      </div>
    </div>
  );
};

export default DisplayCard;
