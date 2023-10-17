// TestimonialsList.tsx
'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Testimonial from "./Testimonial";

type TestimonialItem = {
  name: string;
  location: string;
  content: string;
  imageSrc: string;
};

type Props = {
  testimonials: TestimonialItem[];
};

const TestimonialsList: React.FC<Props> = ({ testimonials }) => {
  return (
    <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className="mySwiper padding-x">
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <Testimonial {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsList;
