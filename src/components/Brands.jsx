import React from "react";
import { brands } from "../constants";

const Brands = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-between flex-wrap gap-6">
        {brands.map((brand, index) => {
          return (
            <>
              <img
                key={brand.name}
                src={brand.image}
                alt={brand.name}
                className=""
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Brands;
