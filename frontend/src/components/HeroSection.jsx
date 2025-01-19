import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const HeroSection = () => {
  const { showSearch } = useContext(ShopContext);

  return !showSearch ? (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}

      <img className="w-full sm:w-1/2" src="/Bannar1.png" alt="" />

      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2" src="/Bannar2.png" alt="" />
    </div>
  ) : null;
};

export default HeroSection;
