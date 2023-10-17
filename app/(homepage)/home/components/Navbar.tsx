"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomButton from "./CustomBotton";
import { AiOutlineRight } from "react-icons/ai";
import Logo from '../../../../public/assets/images/home/logo.png'
import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 20vh
      if (window.scrollY > (40 * window.innerHeight) / 100) {
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
      className={`w-full z-[100] bg-white shadow-sm ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      <nav className="max-w-[1440px] relative h-[13vh] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            priority={true}
            src={Logo}
            alt="logo"
            className="md:w-[269px] md:h-[51px]"
            width={192}
            height={41}
            // width={269}
            // height={51}
            // className="object-contain"
          />
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`lg:flex gap-2 lg:items-center lg:gap-6 ${
            menuOpen
              ? "flex absolute shadow-md py-8 h-auto w-[100%] top-[13vh] border-t-2 justify-start z-[18] items-center bg-[#f5f5f5] flex-col right-[0] opacity-0 transition-opacity duration-300 ease-in-out"
              : "hidden"
          } ${menuOpen ? "opacity-100" : ""}`}
        >
          <li
            className={` ${
              menuOpen &&
              "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
            }`}
          >
            <Link href="/">FAQ</Link>
            {menuOpen && <AiOutlineRight />}
          </li>

          <li
            className={` ${
              menuOpen
                ? "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
                : " min-w-[95px]"
            }`}
          >
            <Link href="/contact">Contact Us</Link>
            {menuOpen && <AiOutlineRight />}
          </li>
          <li
  className={`w-full hidden lg:block   ${
    menuOpen ? "bg-[#f5f5f5] w-full  relative -top-2" : ""
  }`}
>
            <CustomButton
              title="Login"
              btnType="button"
              containerStyles={`border  border-primary-1 text-primary 
              rounded-md bg-white min-w-[100px] ${
                menuOpen ? "hidden" : " "
              }`}
            />
          </li>
          {menuOpen && (
            <li
              className={` ${
                menuOpen
                  ? "not-lg:border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
                  : " "
              }`}
            >
              <Link href="/contact">About Us</Link>
              <AiOutlineRight />
            </li>
          )}
          {menuOpen && (
            <li
              className={` ${
                menuOpen
                  ? "not-lg:border-b-2 border-t-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4"
                  : " min-w-[95px]"
              }`}
            >
              <Link href="/contact">Privacy Policy</Link>
              <AiOutlineRight />
            </li>
          )}
          {menuOpen && (
            <li
              className={`bg-[#f5f5f5] ${
                menuOpen
                  ? "not-lg:border-b-2 border-b-2 lg:border-none flex justify-between items-center w-full px-6  text-center py-4 mb-0"
                  : " min-w-[95px]"
              }`}
            >
              <Link href="/contact">Terms and Conditions</Link>
              <AiOutlineRight />
            </li>
          )}
          
         
          <li
  className={`w-full px-[24px] pb-2 pt-8 lg:hidden  ${
    menuOpen ? "bg-[#f5f5f5] w-full relative -top-2 block" : ""
  }`}
>
            <CustomButton
              title="Login"
              btnType="button"
              containerStyles={`border border-primary-1 text-primary 
              rounded-md bg-white min-w-[100px] ${
                menuOpen ? "min-w-full " : "min-w-[100px] "
              }`}
            />
          </li>
           
        </ul>

        
      </nav>
    </header>
  );
};

export default NavBar;
