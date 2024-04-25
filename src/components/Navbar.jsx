import React from "react";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-1">
          <div className="h-10 w-10 bg-secondary rounded-full"></div>
          <div className="font-bold text-xl">DivStudio</div>
        </div>
        {/* nav links */}
        <div className="items-center gap-8 text-base lg:flex hidden">
          {navLinks.map((link) => {
            return (
              <div key={link.title} className="cursor-pointer">
                {link.title}
              </div>
            );
          })}
        </div>

        {/* button */}
        <Button
          text={"Contact"}
          variant={"outline"}
          className=" hidden lg:block"
        />

        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
