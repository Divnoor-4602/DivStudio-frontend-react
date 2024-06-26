import React from "react";
import Button from "./Button";
import arrow from "../assets/icon/rightArrow.svg";
import cardImage from "../assets/images/credit-card-hero.svg";
import { peopleTooltip } from "../constants";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const Hero = () => {
  return (
    <>
      {/* hero container */}
      <div className="flex md:flex-row flex-col  gap-10 md:gap-0">
        <div className="flex flex-col gap-8 md:items-start md:w-1/2 items-center">
          {/* main text */}
          <div className="text-white font-bold text-4xl md:text-[56px] md:leading-[64px] text-center md:text-start">
            Discover the Perfect
            <br className="hidden xl:block " /> Credit Card for You
          </div>
          {/* sub text */}
          <div className="opacity-60 text-white text-[18px] leading-[24px] font-light text-center md:text-start">
            Discover the power of our secure and rewarding credit cards.
            <br className="hidden xl:block" /> Explore our range of credit cards
            and take control
            <br className="hidden xl:block" /> of your finances today.
          </div>
          {/* get started button variant fill */}
          <Button text={"Get Started"} icon={arrow} />
          {/* animated tooltip and tool text */}
          <div className="flex gap-8 items-center">
            <div className="flex flex-row items-center justify-center">
              <AnimatedTooltip items={peopleTooltip} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-white font-bold text-[16px]">10.2K+</div>
              <div className="text-white font-light opacity-70 text-sm">
                Active users around the world
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:w-1/2">
          <img
            src={cardImage}
            alt="credit card"
            className="w-[400px] h-[300px] md:w-[700px] md:h-[500px]"
          />
        </div>
      </div>
      <div className="w-[300px] h-[200px] absolute green__gradient top-0 left-1/2 pointer-events-none"></div>
    </>
  );
};

export default Hero;
