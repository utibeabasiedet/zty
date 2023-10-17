import React from "react";
import CustomButton from "./CustomBotton";

const Signup = () => {
  return (
    <section className="padding-x  mt-[50px] mx-auto h-[185px]  mb-12   ">
      <div className="px-4 bg-[#F6F9FF]  h-full shadow-lg rounded-[16px] flex flex-col justify-center items-center gap-[24px]">
        <h3>Ready to recharge your meter like never beforee?</h3>
        <CustomButton
          title="Sign Up"
          btnType="submit"
          containerStyles="border border-primary bg-primary text-white rounded-md w-full md:max-w-[140px]"
        />
      </div>
    </section>
  );
};

export default Signup;
