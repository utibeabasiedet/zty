import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Subscribe } from "./index";
import Logo from '../../../../public/assets/images/home/logo.png'

function Footer() {
  return (
    <footer className="padding-x bg-[#F6F9FF] ">
      <div className="flex flex-col   md:flex-row md:justify-between md:items-center border-b border-b-[#E8E9EA] justify-center  items-center pt-[64px] pb-[64px]">
        <div>
          <div className="flex justify-center md:block">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={269}
                height={51}
              
              />
            </Link>
          </div>
          <div className="flex gap-8 flex-wrap  text-primary-2100 mt-[32px]">
            <Link href="/about" className="md:min-w-[auto] min-w-[40%]">
              About Us
            </Link>
            <Link href="/faq" className="md:min-w-[auto] min-w-[40%]">
              FAQ
            </Link>
            <Link href="/PrivacyPolicy" className="md:min-w-[auto] min-w-[40%]">
              Privacy Policy
            </Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
        </div>

        <div className="md:mt-0 mt-[32px] flex flex-col w-full md:max-w-[500px] max-w-full">
          <p className="text-[14px] font-[600]  leading-[140%] mb-[16px]  text-primary-2100">
            Stay up to date
          </p>
          <div>
            <Subscribe />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row  md:justify-between md:items-center pt-[32px] pb-12">
        <p className="text-[#949597] font-[400] mt-[24px] ">
          © 2023 MyRecharge Nigeria. All rights reserved.
        </p>
        <div className=" inline-flex gap-6">
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#BDBEBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z"
                stroke="#BDBEBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                stroke="#BDBEBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.1453 8.20556 0.991319 9.97631 1.00008 11.75C0.988863 13.537 1.14285 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0113 9.96295 22.8573 8.1787 22.5401 6.42Z"
                stroke="#BDBEBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75008 15.02L15.5001 11.75L9.75008 8.48V15.02Z"
                stroke="#BDBEBF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
