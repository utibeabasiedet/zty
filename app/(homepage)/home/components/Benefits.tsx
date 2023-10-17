"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BenefitsCard } from "./index";
import Quick from '../../../../public/assets/images/home/quick.png'
import Check from '../../../../public/assets/images/home/check-shield.png'
import Service from '../../../../public/assets/images/home/24-hours-service.png'
// Your BenefitsCard component remains the same

const Benefits = () => {
  const benefitCards = [
    {
      image: Quick,
      title: "Timely & Accessible",
      description:
        "You purchase and access your meter token instantly and with zero stress.",
    },
    {
      image: Check,
      title: "Highly Secured",
      description:
        "Data is encrypted end-to-end across all channels in the application.",
    },
    {
      image: Service,
      title: "Reliable Services",
      description:
        "Zero worries with MyRecharge.ng. We take the worries so you can relax.",
    },
  ];

  const settings = {
    dots: true, // Show indicators
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards on lg screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Change settings for md screens
        settings: {
          slidesToShow: 2, // Show 2 cards on md screens
        },
      },
      {
        breakpoint: 768, // Change settings for sm screens
        settings: {
          slidesToShow: 1, // Show 1 card on sm screens
          centerMode: true, // Center the card on sm screens
          centerPadding: "0", // Remove padding when centering
        },
      },
    ],
  };

  return (
    // bg-[#F6F9FF]
    <section className="lg:pt-[122px] pt-[44px]  bg-[#F6F9FF] mx-auto  pb-12  padding-x">
      <h2 className="md:max-w-[652px] max-w-[323px] ma-auto mb-[40px] lg:mb-[72px] mx-auto text-center text-primary-2100 font-[600px] leading-[1] text-[24px] md:text-[36px] ">
        Benefits Our Customers Enjoy Using Our Digital Platform
      </h2>
      {/*  benefitsShadow */}
      <Slider {...settings} className="flex justify-center  ">
        {benefitCards.map((card, index) => (
          <div key={index} className="flex justify-center items-center ">
            <BenefitsCard {...card} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Benefits;
