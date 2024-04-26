import React from "react";
import { testimonials } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <>
      <div>
        <InfiniteMovingCards items={testimonials} />
      </div>
    </>
  );
};

export default Testimonials;
