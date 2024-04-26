import React from "react";
import Button from "./Button";
import rightArrow from "../assets/icon/rightArrow.svg";
import stackedCards from "../assets/images/find-cards.svg";
import { motion } from "framer-motion";

const FindCreditCard = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-10 md:gap-20 relative">
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
        <div className="flex flex-col md:w-1/2 gap-6 items-center md:items-start">
          <div className="text-3xl md:text-[40px] text-center md:text-start text-white font-bold md:leading-[50px]">
            Find the Perfect Credit Card for You
          </div>
          <div className="text-white/60 text-sm md:text-base md:text-start text-center">
            Discover your ideal credit card with ease. Our comprehensive
            selection caters to every financial need and lifestyle. Whether you
            seek cashback rewards, travel perks, or building credit, we have the
            perfect credit card waiting for you. Unleash the possibilities and
            find the credit card that fits your unique goals and aspirations.
          </div>
          <Button text={"Learn More"} />
        </div>

        <div className="w-[300px] h-[400px] absolute green__gradient -top-10 -right-[300px] pointer-events-none"></div>
      </div>
    </>
  );
};

export default FindCreditCard;
