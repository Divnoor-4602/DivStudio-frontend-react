import React from "react";
import doublePhone from "../assets/images/double-phone.svg";
import appStore from "../assets/images/Badges/App_Store.svg";
import googlePlay from "../assets/images/Badges/Google_Play.svg";

const CTA = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="font-bold text-3xl md:text-[48px] text-white md:leading-[48px] text-center md:text-start">
            Easy Way to manage your finances
          </div>
          <div className="text-white/50 text-sm md:text-lg text-center md:text-start">
            Easy to use mobile app that support on android and ios.
          </div>
          {/* cta buttons */}
          <div className="flex md:flex-row flex-col gap-6 md:items-start items-center">
            <img
              src={appStore}
              alt="app-store"
              className="cursor-pointer w-[150px]"
            />
            <img
              src={googlePlay}
              alt="google-store"
              className="cursor-pointer w-[160px]"
            />
          </div>
        </div>
        <div className="w-1/2">
          <img src={doublePhone} alt="double-phone" />
        </div>
      </div>
    </>
  );
};

export default CTA;
