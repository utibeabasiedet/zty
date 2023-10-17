import React from "react";
import Progress from "./Progress";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";
import { FiCopy } from "react-icons/fi";
import { GoShare } from "react-icons/go";
import Link from "next/link";

interface Props {
  progress: number;
  handleNextStep: () => void;
}

const Completed = ({ progress }: Props) => {
  return (
    <section className="md:mb-[100px] mb-[25px]">
      <Progress progress={progress} />
      <div className="flex flex-col justify-evenly items-center mt-[50px] ">
        <div className="w-[390px]">
          <div className="">
            <div className="flex flex-col justify-center items-center mb-[32px]">
              <h4 className="text-center text-[#56585C] text-2xl font-semibold mb-[16px]">
                Completed
              </h4>
              <span className="text-[#075DED] text-sm font-medium">
                Token generation successful
              </span>
            </div>

            <div className="flex flex-col mb-[40px]">
              <div className="flex gap-4 ">
                <div className=" h-[24px] w-[24px] bg-[#52C41A] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={16}
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M12.3002 4.39993L5.7002 10.9999L2.7002 7.99993"
                      stroke="#F6F9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span> Payment of N3,100. 00 received</span>
              </div>
              <div className="w-[1px] bg-[#52C41A] h-3 relative left-[12px]"></div>
              <div className="flex gap-4">
                <div className="h-[24px] w-[24px] bg-[#52C41A] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14.4}
                    height={14.4}
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M12.3002 4.39993L5.7002 10.9999L2.7002 7.99993"
                      stroke="#F6F9FF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F9FF] border border-[#B5CDF8] rounded-md flex flex-col justify-evenly w-[390px] h-[85px] text-center mb-[12px]">
          <p className="text-[#808184] text-sm">Token:</p>
          <div className="flex justify-evenly">
            <p className="text-[#075DED] text-sm font-semibold">
              0898-0897-1488-9746-0548
            </p>
            <span className="flex items-center text-[#075DED]">
              copy{" "}
              <span className="ms-1">
                <FiCopy />
              </span>
            </span>
          </div>
        </div>

        <div className="border border-[#83ADF5] rounded-md flex flex-col justify-evenly items-center w-[390px] h-[72px] text-center mb-[12px]">
          <p className="text-[#075DED] text-sm ">
            <GoShare size={16} />
          </p>
          <div className="flex justify-evenly">
            <p className="text-[#56585C] text-sm">Share Receipt</p>
          </div>
        </div>

        <div className="space-y-3">
          <Link href='/transactions'>
          <CustomButton
            title={"View transaction details"}
            btnType="submit"
            containerStyles="border border-primary h-[48px] font-bold  text-primary rounded-md w-[390px] "
            //   disabled={isLoading}
          /></Link>
          
          <CustomButton
            title={"Proceed to dashboard"}
            btnType="submit"
            containerStyles="border border-primary  h-[48px] bg-primary font-bold   text-white rounded-md w-[390px]"
            //   disabled={isLoading}
          />

          <CustomButton
            title={"Need help?"}
            btnType="submit"
            containerStyles="h-[48px] text-[#56585C] rounded-md w-[390px]"
            //   disabled={isLoading}
          />
        </div>

        {/* <div>
            <p>Need help?</p>
        </div> */}
      </div>
    </section>
  );
};

export default Completed;
