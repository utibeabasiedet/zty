import React from "react";
import CustomButton from "./CustomBotton";

const Searchbar = () => {
  return (
    <form
      action=""
      className="md:flex w-full justify-start items-start mt-[16px] relative   md:space-x-2 "
    >
      <div className="flex  space-x-2 h-[52px] w-full  sub-border mb-[16px]  placeholder:text-sm rounded-[8px] px-2 py-2.5">
        <input
          type="text"
          className="bg-transparent w-full"
          placeholder="Enter your email"
        />
      </div>

      <CustomButton
        title="Subscribe"
        btnType="submit"
        containerStyles="border border-primary bg-primary text-white w-full rounded-md  md:max-w-[140px]"
      />
    </form>
  );
};

export default Searchbar;
