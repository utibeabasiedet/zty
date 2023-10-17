"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CustomButton from "./CustomBotton";
import { setUserToken } from "@/services/utilities";
import { quick_register } from "@/services/api/accountService";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Nigeria from '../../../../public/assets/images/home/nigeria.png'
import { FaSpinner } from 'react-icons/fa';

const validationSchema = z.object({
  phoneNumber: z
    .string()
    .length(11, { message: "Phone number should be 11 characters." }),
});
type formData = z.infer<typeof validationSchema>;

const GetStarted = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

 


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(validationSchema),
  });

 
  const onSubmitForm = async (form: formData) => {
    try {
      setIsLoading(true);

      const { data } = await quick_register(form);
      console.log(data)
      setUserToken(data.response.securityToken);

      router.push("/buyelectricity");
    } catch (error) {
      alert("An error occurred while processing your request.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="md:flex md:space-x-2 mt-[50px] relative"
      >
        <span className="text-red-500 text-sm font-semibold absolute top-[-30px]">
          {errors.phoneNumber && errors.phoneNumber.message}
        </span>
        <div className="flex space-x-2 h-[52px] border border-primary-1 ml-[-3px] mb-[16px] placeholder:text-sm rounded-md px-2 py-2.5">
          <Image
            src={Nigeria}
            height={24}
            width={36}
            alt="hero"
            className="object-contain w-auto"
          />

          <input
            type="text"
            className="h-full  bg-transparent outline-none"
            placeholder="Enter phone number"
            {...register("phoneNumber")}
          />
        </div>

        <CustomButton
          title={isLoading ? (
            <FaSpinner className="animate-spin mr-2 h-6 w-6" /> 
          ) : (
            'Get Started'
          )}
          btnType="submit"
          containerStyles="border border-primary h-full bg-primary  text-white rounded-md min-w-[100px] w-full md:max-w-[140px]"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default GetStarted;
