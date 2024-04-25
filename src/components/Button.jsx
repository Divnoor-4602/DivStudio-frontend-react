import React from "react";

const Button = ({ text, variant, className, icon }) => {
  const buttonClass =
    variant === "outline"
      ? `border border-secondary text-secondary rounded-full font-semibold text-base px-6 py-2 hover:bg-secondary hover:text-primary transition duration-100 ease-in-out ${className}`
      : "text-white bg-secondary rounded-full font-normal text-base px-6 py-3 hover:scale-105 transition duration-150";
  return (
    <>
      <button
        className={`${buttonClass} flex items-center justify-center gap-3`}
      >
        <div>{text}</div>
        {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
      </button>
    </>
  );
};

export default Button;
