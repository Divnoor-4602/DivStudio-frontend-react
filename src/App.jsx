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
} from "./components/index.js";

const App = () => {
  return (
    <>
      {/* global container */}
      <div className="min-h-screen bg-primary z-5">
        {/* navbar */}
        <div className="px-6 md:px-16 lg:px-28 py-8 font-MPlus">
          <Navbar />
        </div>

        {/* hero */}
        <div className="px-6 md:px-0 md:pl-16  lg:pl-28 pt-32 md:pt-24 font-MPlus">
          <Hero />
        </div>

        {/* About */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus">
          <About />
        </div>

        {/* Brands */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus">
          <Brands />
        </div>

        {/* Features */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus">
          <Features />
        </div>

        {/* Personalise */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus">
          <DesignCreditCard />
        </div>

        {/* Find */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-32 font-MPlus">
          <FindCreditCard />
        </div>

        {/* Testimonials */}
        <div className="pt-16 md:pt-32 font-MPlus">
          <Testimonials />
        </div>

        {/* FAQ's and Accordian */}
        <div className="px-6 md:px-16 lg:px-40 pt-16 md:pt-32 font-MPlus">
          <FAQ />
        </div>
      </div>

      {/* CTA */}
      <div className=""></div>
    </>
  );
};

export default App;
