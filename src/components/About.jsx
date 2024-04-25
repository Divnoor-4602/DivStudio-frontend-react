import React from "react";
import { aboutStats } from "../constants";

const About = () => {
  return (
    <>
      <div className="bg-statsColor/25  flex flex-col md:flex-row gap-6 justify-between rounded-xl p-16">
        {aboutStats.map((stat) => {
          return (
            <div className="flex flex-col items-center gap-2 " key={stat.stat}>
              <div className="text-[48px] text-white font-bold">
                {stat.stat}
              </div>
              <div className="text-secondary text-base">{stat.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
