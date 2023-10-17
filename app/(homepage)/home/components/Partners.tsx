import React from "react";
import Image from "next/image";
import Partner1 from '../../../../public/assets/images/home/partner1.png'
import Partner2 from '../../../../public/assets/images/home/partner2.png'
import Partner3 from '../../../../public/assets/images/home/partner3.png'

const Partners = () => {
  return (
    <section className="partnersBg relative p-[80px]">
      <div className="absolute left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="250"
          viewBox="0 0 640 832"
          fill="none"
        >
          <g opacity="0.8" filter="url(#filter0_f_5347_23403)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M155.005 323.862C210.85 321.074 270.613 285.945 314.66 307.818C358.267 329.473 334.132 374.056 325.869 408.713C319.198 436.695 302.405 461.927 272.85 483.186C240.7 506.311 203.64 529.905 155.005 531.614C104.522 533.388 50.4094 518.92 23.2801 491.957C-1.25776 467.57 32.1206 437.609 31.3452 408.713C30.5411 378.749 -13.3909 344.64 18.7355 322.597C50.7286 300.644 107.926 326.214 155.005 323.862Z"
              fill="#E6EDFB"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5347_23403"
              x="-293"
              y="0.681641"
              width="933"
              height="831.078"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_5347_23403"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <h3 className="text-center leading-[120%] text-white mb-12 font-[600px] text-[36px]">
        Our Partners
      </h3>
      <div className="flex justify-center items-center gap-0 md:gap-4">
        <div>
          <Image
            src={Partner1}
            alt="partner1"
            // width={142}
            // height={90}
          />
        </div>
        <div className="">
          <Image
            src={Partner2}
            alt="partner2"
            // width={142}
            // height={90}
          />
        </div>

        <div className="">
          <Image
            src={Partner3}
            alt="partner3"
            // width={142}
            // height={90}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
