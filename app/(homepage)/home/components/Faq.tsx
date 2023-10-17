"use client";

import React, { useState } from "react";
import FaqDropdown from "./FaqDropdown";

const faqData = [
  {
    question: "My meter rejects the token?",
    answer: `This could happen as a result of the following reasons: The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.
    The meter has not yet been activated - An activation code will be required from the distribution company.
    There has been a change in your tariff index.`,
  },
  {
    question: `I can't load my token`,
    answer: `<div><div ><div >Try the following steps:</div><ul ><li>-Make sure there is power supply in your environment and the phase you're on also has power; make sure your changeover is switched to power supply mode. Punch in the numbers generated from the token and click on ‘Enter’. The light should turn green or orange or blink red.</li>
    <br/><li>-Insert new batteries at the back of the keypad to power on the device. If the device does not come on, press 3 to power up the device.</li>
    <br/><li>-If you still have units on your meter, when there is power supply, plug the Keypad into a wall socket.</li>
    <br/><li>-Key in 5258 instead of the first four-meter digits followed by the consecutive meter digits while omitting the last digit of the meter. For example, 01011607946 then becomes 5258160794. Then press Send (blue or red button as the case may be).</li>
    <br/><li>-Load the token over again after the above has been done.</li></ul></div></div>`,
  },
  {
    question: `When I loaded the token, I got a response used but still don't have power supply.`,
    answer: `<div ><div><div ><ul >
    <br/><li>-A token can only be utilized by a specific meter number. Used simply means the token has already been loaded on the meter.</li>
    <br/><li>-Ensure there is power supply in your area; confirm the phase you are on has power supply. Put off generators and inverters and do a changeover to confirm power supply.</li>
    <br/><li>-This could also be as a result of technical Fault or loss of phase and Meter entering tamper mode.</li></ul></div></div></div>`,
  },
  {
    question: `Why do I have a debt on my meter?`,
    answer: `Debt on a meter can occur for several reasons: <br/>
    <br/><br/>-The cost for the units on a newly installed meter is paid by the customer (as debt) on their first recharge of the meter.
    <br/><br/>-Migration of Previous Debt: If the property used an analog meter before the installation of a Prepaid meter, or using the estimated billing (Post Paid) and there was a debt before the installation of the prepaid meter, the debt on the estimated (Postpaid) billing account is migrated to the Prepaid meter account.
    <br/><br/>-Penalties: If there was a bypass or illegal connection discovered in the house, the penalty charge is added as debt to the prepaid meter account.
    <br/><br/>-Kindly visit the nearest electricity distribution company office to discuss your debt profile. As all meters are domiciled with them.`,
  },
  {
    question: `Can I load the token I purchased on another prepaid meter?`,
    answer:
      "As of this writing; No: token is generated and encrypted using the unique ID of the meter. This is to ensure that token generated can only be used by the specific meter. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open FAQ
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="container mx-auto py-8 padding-x w-full md:max-w-[768px]">
      <h1 className="md:text-[36px] text-center text-[28px] font-bold w-full md:max-w-[768px] text-primary-2100  mb-16">
        Frequently Asked Questions
      </h1>
      {faqData.map((faqItem, index) => (
        <FaqDropdown
          key={index}
          faqItem={faqItem}
          isOpen={index === openIndex}
          onClick={() => handleFaqClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqPage;
