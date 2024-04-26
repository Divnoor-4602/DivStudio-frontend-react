import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-12 md:gap-16">
        <div className="text-3xl md:text-[40px] font-bold text-white">
          What do we offer?
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full gap-8 items-center">
          {features.map((feature) => {
            return (
              <div key={feature.title} className="flex gap-6 items-center">
                <div className="bg-statsColor p-[10px] rounded-2xl">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="text-white text-base">{feature.title}</div>
                  <div className="text-white/60 text-xs w-4/5">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
