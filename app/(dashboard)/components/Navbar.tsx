"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import useStateManager from "@/services/stateManager";
import { IoIosNotificationsOutline } from 'react-icons/io';
import Logo from '../../../public/assets/images/dashboard/trylogo.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { recharge } = useStateManager();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
   
    const handleScroll = () => {
      // Check if the scroll position is greater than 20vh
      if (window.scrollY > (-2 * window.innerHeight) / 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-[1000] bg-white shadow-sm ${isSticky ? "sticky top-0" : ""}`}
    >
   
      <nav className=" relative h-[13vh] z-[1000] mx-auto flex justify-between items-center px-4  py-4 bg-transparent">
        <div className=" relative ">
          <div className="absolute hidden lg:block  md:h-[13vh] top-[-22px] md:w-[1px] shadow-2xl right-[-52px] border "></div>
<Link href='/'>
<Image
            priority={true}
            src={Logo}
            alt="logo"
            width={192}
            height={41}
            
            // className="object-contain"
          />
</Link>
          
        </div>

        
<div className="flex gap-2 items-center lg:gap-6">

<ul
          className={`lg:flex p-[20px]  gap-2  lg:items-center  lg:gap-6 ${
            menuOpen
              ? "flex absolute shadow-md  w-[100%]  top-[13vh] border-t-2 justify-start z-[18] items-center bg-[#f5f5f5] flex-col right-[0] h-auto max-h-[87vh] overflow-y-auto"
              : "hidden"
          }`}
      
        >
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Dashboard</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Buy Electricity</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Transactions</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Card Management</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Saved Meters</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Your Details</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Update Password</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Share to Friends</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center ">
            <span>
          </span> <span>Privacy Policy</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center ">
            <span>
          </span> <span>Terms & Conditions</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2  lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
            }`}
          >

            <Link href="/"><div className="flex lg:hidden items-center gap-4">
            <span>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg></span> <span>Logout</span>
              </div> </Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2 hidden lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
            }`}
          >
            <Link href="/">FAQ</Link>
            {menuOpen && <AiOutlineRight />}
          </li>

          <li
            className={` ${
              menuOpen
                ? "not-lg:border-b-2 hidden lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
                : " "
            }`}
          >
            <Link href="/contact">Contact Us</Link>
            {menuOpen && <AiOutlineRight />}
            {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_5587_27985)">
        <path
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="#56585C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5587_27985">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg> */}
          </li>
          <li
            className={`p-[4px]  border rounded-lg ${
              menuOpen
                ? "not-lg:border-b-2 hidden lg:border-none flex justify-between items-center w-full px-6  text-center py-2"
                : " "
            }`}
          >
            <select name="" className="outline-none pr-[4px]" id="">
              <option value="" className="">
                {recharge.customerPhone.get()}
              </option>
              
            </select>

            {menuOpen && <AiOutlineRight />}
          </li>
          
        </ul>
        <span
            className={` bg-primary-1 p-[6px] rounded-md`}
          >
           <IoIosNotificationsOutline className='w-[28px] h-[28px] text-white' />
           
          </span>
          <div className="lg:hidden relative top-1">
          <button onClick={toggleMenu} className={`text-2xl transform transition-transform ${
    menuOpen ? 'rotate-90' : 'rotate-0'
  }`}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
         
        </div>
</div>
        
      </nav>
    </header>
  );
};

export default NavBar;
