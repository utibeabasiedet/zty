"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import testi from '../../../../public/assets/images/home/picture.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="bg-[#E6EDFB] lg:h-auto py-[53px]   lg:py-[112px]  padding-x flex flex-col gap-[40px] my-auto">
      <h2 className="text-center text-primary font-bold text-[28pxx] md:text-[36px]">
        Happy customers
      </h2>
      <div className="  flex flex-col items-center justify-center ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper padding-x"
        >
          <SwiperSlide>
            <div className=" flex  border-r bg-white min-h-[372px] md:h-[384px] rounded-xl p-6 md:p-16">
              <div className="slideme md:border-r flex flex-col gap-12 items-start pr-4">
                <span className="flex items-center gap-4 ">
                  <Image
                    src={testi}
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Solomon Ubong
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Porthacourt
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  Oh how nice! The thing I like the most about myrecharge.ng is
                  the speed with which the transactions are performed online.
                  Another thing worthy of note is their user friendly site and
                  the customer care attention they provide us second to none..!
                </p>
              </div>
              <div className=" md:flex hidden flex-col gap-12 items-start pl-8">
                <span className="flex items-center gap-4 ">
                  <Image
                    src={testi}
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Sam Peters
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Akwa Ibom
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  It is easy and reliable,literally I don't bother when my power
                  goes off if it is weekends or not. The seamless purchase of
                  power plus the receipt that I am able to generate at my place
                  of work for proper documentation...
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex  border-r bg-white min-h-[372px] md:h-[384px] rounded-xl p-6 md:p-16">
              <div className="slideme md:border-r flex flex-col gap-12 items-start pr-4">
                <span className="flex items-center gap-4 ">
                  <Image
                    src={testi}
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Solomon Ubong
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Porthacourt
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  Oh how nice! The thing I like the most about myrecharge.ng is
                  the speed with which the transactions are performed online.
                  Another thing worthy of note is their user friendly site and
                  the customer care attention they provide us second to none..!
                </p>
              </div>
              <div className=" md:flex hidden flex-col gap-12 items-start pl-8">
                <span className="flex items-center gap-4 ">
                  <Image
                    src="/assets/images/home/picture.png"
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Sam Peters
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Akwa Ibom
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  It is easy and reliable,literally I don't bother when my power
                  goes off if it is weekends or not. The seamless purchase of
                  power plus the receipt that I am able to generate at my place
                  of work for proper documentation...
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex  border-r bg-white min-h-[372px] md:h-[384px] rounded-xl p-6 md:p-16">
              <div className="slideme md:border-r flex flex-col gap-12 items-start pr-4">
                <span className="flex items-center gap-4 ">
                  <Image
                    src={testi}
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Solomon Ubong
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Porthacourt
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  Oh how nice! The thing I like the most about myrecharge.ng is
                  the speed with which the transactions are performed online.
                  Another thing worthy of note is their user friendly site and
                  the customer care attention they provide us second to none..!
                </p>
              </div>
              <div className=" md:flex hidden flex-col gap-12 items-start pl-8">
                <span className="flex items-center gap-4 ">
                  <Image
                    src="/assets/images/home/picture.png"
                    height={56}
                    width={56}
                    alt="px"
                  />
                  <div>
                    <h4 className="font-semibold text-[18px] text-[#2C2F34]">
                      Sam Peters
                    </h4>
                    <p className="font-[400px] text-[14px] text-[#2C2F34] ">
                      Akwa Ibom
                    </p>
                  </div>
                </span>
                <p className="text-[16px] font-[400px] text-[#2C2F34]">
                  It is easy and reliable,literally I don't bother when my power
                  goes off if it is weekends or not. The seamless purchase of
                  power plus the receipt that I am able to generate at my place
                  of work for proper documentation...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}


