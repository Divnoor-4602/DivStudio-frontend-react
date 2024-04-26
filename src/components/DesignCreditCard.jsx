import React from "react";
import Button from "./Button";
import rightArrow from "../assets/icon/rightArrow.svg";
import stackedCards from "../assets/images/card-stack.svg";
import { motion } from "framer-motion";

const DesignCreditCard = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-10 md:gap-20 relative">
        <div className="flex flex-col md:w-1/2 gap-6 items-center md:items-start">
          <div className="text-3xl md:text-[40px] text-center md:text-start text-white font-bold md:leading-[50px]">
            Design your personalized credit card.
          </div>
          <div className="text-white/60 text-sm md:text-base md:text-start text-center">
            You have the freedom to personalize the design of your credit card,
            ensuring a truly unique experience that makes you feel extraordinary
          </div>
          <Button text={"Create new Card"} icon={rightArrow} />
        </div>
        <div className="w-1/2">
          <motion.img
            src={stackedCards}
            alt="stacked card"
            initial={{ y: 0 }}
            animate={{
              y: 25,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </div>
        <div className="w-[300px] h-[400px] absolute green__gradient -top-10 -right-[300px] pointer-events-none"></div>
      </div>
    </>
  );
};

export default DesignCreditCard;
