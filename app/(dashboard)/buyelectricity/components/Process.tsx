import React from "react";
import Progress from "./Progress";
import CustomButton from "../../../(homepage)/home/components/CustomBotton";

interface Props {
  progress: number;
  handleNextStep: () => void;
}

const Process = ({ progress, handleNextStep }: Props) => {
  return (
    <section className="md:mb-[100px] mb-[25px]">
      <Progress progress={progress} />
      <div className="flex flex-col justify-evenly items-center mt-[50px] ">
        <div className="w-[390px]">
          <div className="">
            <div className="flex flex-col justify-center items-center mb-[32px]">
              <h4 className="text-center text-[#56585C] text-2xl font-semibold mb-[16px]">
                Processing
              </h4>
              <span className="text-[#075DED] text-sm font-medium">
                Token is been generated, please wait...
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
                </div>
                <span> Payment of N3,100. 00 received</span>
              </div>
              <div className="w-[1px] bg-[#52C41A] h-3 relative left-[12px]"></div>
              <div className="flex gap-4">
                <div className="h-[24px] w-[24px] border border-[#52C41A] flex justify-center items-center rounded-full">
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
                </div>
                <span>Generating token</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F9FF] w-[390px] h-[56px] text-center mb-[12px]">
          Please select <span className="text-[#075DED]">Refresh</span> button
          below if token is not generated in 30 seconds.
        </div>

        <div className="space-y-3">
          <CustomButton
            title={"Refresh"}
            btnType="submit"
            containerStyles="border border-primary h-[48px] font-bold   text-primary rounded-md w-[390px] "
            handleClick={() => {
              handleNextStep();
            }}
            //   disabled={isLoading}
          />
          <CustomButton
            title={"Proceed to dashboard"}
            containerStyles="border border-primary  h-[48px] bg-primary font-bold text-white rounded-md w-[390px]"
            //   disabled={isLoading}
          />

          <CustomButton
            title={"Need help?"}
            btnType="submit"
            containerStyles="h-[48px] text-[#56585C] rounded-md w-[390px]"

            //   disabled={isLoading}
          />
        </div>

       
      </div>
    </section>
  );
};

export default Process;
