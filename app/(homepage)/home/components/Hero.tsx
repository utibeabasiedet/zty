import React from "react";
import { GetStarted, FloatingDiv } from "./index";
import Image from "next/image";
import heroImage from '../../../../public/assets/images/home/hero-bg.png'
import payment from '../../../../public/assets/images/home/payment.png'
import secured from '../../../../public/assets/images/home/securedpayment.png'

const Hero = () => {
  return (
    <section className=" pt-[68px] padding-x home-banner">
      <div className="flex flex-col  max-w-[1150px] border-b mx-auto  lg:flex-row justify-between items-center">
        <div className="relative top-[-50px]">
          <div className="md:max-w-[500px] max-w-[273px] leading-[1] mb-[24px] text-primary-2100 md:text-[64px] text-[36px] tracking-[] font-bold">
            Buy Electricity In a Minute
          </div>
          <div className="md:max-w-[500px] max-w-full mt-0 text-primary-2101">
            MyRecharge.ng offers reliable solution for your electricity
            payments. Get started by entering your mobile number
          </div>
          <div>
            <GetStarted />
          </div>
          <div className="max-w-[500px] mt-[24px]">
            By clicking “Get Started”, an account will be created with your
            phone number. See
            <span className="text-primary"> Terms & Conditions</span>
          </div>
        </div>
        {/* right hero */}
        <div className=" relative ">
          <div className="absolute z-40  right-[10px] top-[60px] md:right-[-15px] md:top-[50px]">
            <FloatingDiv img={payment} text="100% secured" />
          </div>
          <div className="absolute z-40 bottom-6 left-12">
            <FloatingDiv img={secured} text="payment successful" />
          </div>
          <div className="relative ">
            <div className="hfactor absolute left-20 -z-10"></div>

            <Image
              priority={true}
              src={heroImage}
              height={617}
              width={563}
              alt="hero"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
