import React from "react";
import { Hero, Navbar, About, Brands, Features } from "./components/index.js";

const App = () => {
  return (
    <>
      {/* global container */}
      <div className="min-h-screen bg-primary">
        {/* navbar */}
        <div className="px-6 md:px-16 lg:px-28 py-8 font-MPlus">
          <Navbar />
        </div>

        {/* hero */}
        <div className="px-6 md:px-0 md:pl-16  lg:pl-28 pt-16 md:pt-24 font-MPlus">
          <Hero />
        </div>

        {/* About */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-24 font-MPlus">
          <About />
        </div>

        {/* Brands */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-24 font-MPlus">
          <Brands />
        </div>

        {/* Features */}
        <div className="px-6 md:px-16 lg:px-28 pt-16 md:pt-24 font-MPlus">
          <Features />
        </div>
      </div>
    </>
  );
};

export default App;
