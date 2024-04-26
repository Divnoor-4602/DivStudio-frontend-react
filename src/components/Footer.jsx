import React from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <>
      <div className="bg-testColor/25 flex md:flex-row flex-col gap-6 items-center md:items-start justify-between px-6 md:px-16 lg:px-28 pt-16 pb-10  font-MPlus ">
        <div className="flex flex-col gap-3 items-center md:items-start">
          {/* logo */}
          <div className="flex items-center gap-1">
            <div className="h-10 w-10 bg-secondary rounded-full"></div>
            <div className="font-bold text-xl text-white">DivStudio</div>
          </div>
          <div className="text-sm text-white/40 w-[300px] text-center md:text-start">
            Discover the power of our secure and rewarding credit cards
          </div>
        </div>
        {/* nav links */}
        {footerLinks.map((link) => {
          return (
            <>
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div
                  key={link.title}
                  className="text-white text-base font-bold"
                >
                  {link.title}
                </div>
                <div className="flex flex-col gap-2 items-center md:items-start">
                  {link.links.map((link) => {
                    return (
                      <div
                        key={link.name}
                        className="text-white/50 text-sm cursor-pointer hover:text-white"
                      >
                        {link.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
