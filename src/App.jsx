import React from "react";
import { Hero, Navbar } from "./components/index.js";

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
        <div className="pl-6 md:pl-16 lg:pl-28 py-24 font-MPlus">
          <Hero />
        </div>

        {/* about */}
      </div>
    </>
  );
};

export default App;
