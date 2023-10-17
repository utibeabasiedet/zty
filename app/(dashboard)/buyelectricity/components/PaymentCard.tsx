import React from "react";
import Image from "next/image";

export type Card = {
  cardId: number;
  cardNumber?: string;
  cardType?: string;
  bank: string;
};

type Props = {
  card: Card;
  isSelected: boolean; // Pass isSelected as a prop
  onClick: () => void; // Pass onClick as a prop
  cardTypeStyle?: string; // Additional CSS class for cardType
  bankStyle?: string; // Additional CSS class for bank
  containerStyle?: string;
  customImage?: string | undefined | any;
};



const PaymentCard = ({
  card,
  isSelected,
  cardTypeStyle,
  bankStyle,
  containerStyle,
  customImage,
  onClick,
}: Props) => {
  const imageSrc =`/assets/images/dashboard/card/${card.cardType}.jpg`;

  let cardImage = null;
  if (!customImage && card.cardType==="MASTERCARD") {
    // cardImage = <Image src={imageSrc} height={24} width={34} alt="logo" />;
    cardImage =     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <g clipPath="url(#clip0_5274_24988)">
      <path d="M15.245 18.6249H8.755V6.96194H15.245V18.6249Z" fill="#FF5F00"/>
      <path d="M9.167 12.7939C9.16602 11.6708 9.42058 10.5621 9.9114 9.5519C10.4022 8.54167 11.1164 7.65634 12 6.96295C10.9059 6.10307 9.59187 5.56835 8.20821 5.4199C6.82456 5.27146 5.42704 5.51526 4.17539 6.12346C2.92374 6.73166 1.86843 7.67972 1.13008 8.85929C0.391732 10.0389 0.000119671 11.4023 0 12.7939C0.000267045 14.1854 0.391926 15.5487 1.13023 16.728C1.86853 17.9074 2.9237 18.8554 4.17517 19.4635C5.42665 20.0717 6.82396 20.3156 8.20746 20.1673C9.59096 20.019 10.9048 19.4845 11.999 18.6249C11.1157 17.9313 10.4018 17.046 9.91115 16.0357C9.42052 15.0255 9.16605 13.917 9.167 12.7939Z" fill="#EB001B"/>
      <path d="M24 12.7939C23.9999 14.1855 23.6083 15.549 22.8699 16.7286C22.1316 17.9082 21.0763 18.8562 19.8246 19.4644C18.573 20.0726 17.1754 20.3164 15.7918 20.168C14.4081 20.0195 13.0941 19.4848 12 18.6249C13.725 17.2669 14.833 15.1599 14.833 12.7939C14.833 10.4279 13.725 8.32095 12 6.96295C13.0941 6.10307 14.4081 5.56835 15.7918 5.4199C17.1754 5.27146 18.573 5.51526 19.8246 6.12346C21.0763 6.73166 22.1316 7.67972 22.8699 8.85929C23.6083 10.0389 23.9999 11.4023 24 12.7939Z" fill="#F79E1B"/>
    </g>
    <defs>
      <clipPath id="clip0_5274_24988">
        <rect width="24" height="24" fill="white" transform="translate(0 0.793945)"/>
      </clipPath>
    </defs>
  </svg>
  } else {
    cardImage = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M23.2985 8.00239C23.2985 6.67912 22.2218 5.60239 20.8985 5.60239H3.10147C1.77821 5.60239 0.701469 6.67912 0.701469 8.00239V17.5855C0.701469 18.9088 1.77821 19.9855 3.10147 19.9855H20.8985C22.2218 19.9855 23.2985 18.9088 23.2985 17.5855V8.00239ZM22.3385 17.5855C22.3385 18.3796 21.6926 19.0255 20.8985 19.0255H3.10147C2.30741 19.0255 1.66147 18.3796 1.66147 17.5855V8.00239C1.66147 7.20832 2.30741 6.56239 3.10147 6.56239H20.8985C21.6926 6.56239 22.3385 7.20832 22.3385 8.00239V17.5855Z"
          fill="#56585C"
        />
        <path
          d="M8.37542 7.69159C7.91894 7.69159 7.48733 7.79594 7.09867 7.97743C6.70013 7.79263 6.26577 7.69067 5.82398 7.69067C4.1543 7.69067 2.79633 9.05191 2.79633 10.7249C2.79633 12.3946 4.15430 13.7525 5.82398 13.7525C6.26544 13.7525 6.69878 13.6511 7.09632 13.467C7.48555 13.6492 7.91798 13.7539 8.37542 13.7539C10.0465 13.7539 11.4063 12.3941 11.4063 10.723C11.4063 9.05143 10.0465 7.69159 8.37542 7.69159ZM3.75633 10.7249C3.75633 9.58111 4.68398 8.65067 5.82398 8.65067C5.93299 8.65067 6.03945 8.66133 6.14462 8.67751C5.64921 9.21736 5.34398 9.93429 5.34398 10.723C5.34398 11.5105 5.64854 12.2266 6.14285 12.7661C6.0383 12.7821 5.93237 12.7925 5.82398 12.7925C4.68398 12.7925 3.75633 11.8649 3.75633 10.7249ZM8.37542 12.7939C7.23307 12.7939 6.30398 11.8649 6.30398 10.723C6.30398 9.58067 7.23307 8.65159 8.37542 8.65159C9.51729 8.65159 10.4463 9.58067 10.4463 10.723C10.4463 11.8649 9.51729 12.7939 8.37542 12.7939ZM10.9263 16.0058H3.51072C3.24542 16.0058 3.03072 16.2205 3.03072 16.4858C3.03072 16.7511 3.24542 16.9658 3.51072 16.9658H10.9263C11.1916 16.9658 11.4063 16.7511 11.4063 16.4858C11.4063 16.2205 11.1916 16.0058 10.9263 16.0058ZM19.7506 13.6456H15.0307C14.7654 13.6456 14.5507 13.8604 14.5507 14.1256C14.5507 14.3910 14.7654 14.6056 15.0307 14.6056H19.7506C20.0159 14.6056 20.2306 14.3910 20.2306 14.1256C20.2306 13.8604 20.0159 13.6456 19.7506 13.6456ZM19.7506 16.0058H15.0307C14.7654 16.0058 14.5507 16.2205 14.5507 16.4858C14.5507 16.7511 14.7654 16.9658 15.0307 16.9658H19.7506C20.0159 16.9658 20.2306 16.7511 20.2306 16.4858C20.2306 16.2205 20.0159 16.0058 19.7506 16.0058Z"
          fill="#56585C"
        />
      </svg>
    );
  }
  const backgroundColor = isSelected ? "bg-primary" : "transparent";
  
  return (
    <div className="flex justify-between py-[8px] border-b">
      
      <div className="flex items-center gap-4">
        
      {cardImage}
       
        <div className="cursor-pointer" onClick={onClick}>
          <div
            className={`text-[14px] ${
              isSelected ? " font-semibold" : cardTypeStyle || "text-[#56585C]"
            }`}
          >
            {card.cardType}
            <span
              className={`text-[14px] ${
                isSelected ? " font-bolder" : bankStyle || "text-[#808184]"
              }`}
            >
              {card.cardId > 0 && " - "} {card.bank}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`h-[24px] border border-[#BDBEBF] rounded-full flex items-center justify-center  w-[24px] ${backgroundColor}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M13.3333 4.79395L5.99999 12.1273L2.66666 8.79395"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default PaymentCard;
