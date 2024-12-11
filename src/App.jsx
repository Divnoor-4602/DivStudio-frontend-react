import React from "react";
import {
  Hero,
  CTA,
  Navbar,
  FAQ,
  About,
  Brands,
  Features,
  DesignCreditCard,
  FindCreditCard,
  Testimonials,
  Footer,
} from "./components/index.js";
import doraWrap from "./assets/images/dora.svg";

const App = () => {
  return (
    <>
      {/* global container */}

      <div className="min-h-screen bg-primary relative overflow-hidden">
        {/* navbar */}
        <div className="px-6 md:px-16 lg:px-28 py-8 font-MPlus z-10">
          <Navbar />
        </div>

        {/* hero */}
        <div className="px-6 md:px-0 md:pl-16  lg:pl-28 pt-32 md:pt-24 font-MPlus z-10">
          <Hero />
        </div>

        {/* About */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus z-10">
          <About />
        </div>

        {/* Brands */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlusz-10">
          <Brands />
        </div>

        {/* Features */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus z-10">
          <Features />
        </div>

        {/* Personalise */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus z-10">
          <DesignCreditCard />
        </div>

        {/* Find */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus z-10">
          <FindCreditCard />
        </div>

        {/* Testimonials */}
        <div className="pt-16 md:pt-32 font-MPlus z-10">
          <Testimonials />
        </div>

        {/* FAQ's and Accordian */}
        <div className="px-6 md:px-16 lg:px-40 pt-16 md:pt-32 font-MPlus z-10">
          <FAQ />
        </div>

        {/* CTA */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus z-10">
          <CTA />
        </div>

        {/* Footer */}
        <div className=" font-MPlus z-10">
          <Footer />
        </div>
        <img
          src={doraWrap}
          alt="dora"
          className="absolute top-0  right-0 z-0  pointer-events-none h-auto md:block hidden blur-[2px]"
        />
      </div>
    </>
  );
};

export default App;
