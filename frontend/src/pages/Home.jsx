import HeroSection from "@/components/HeroSection";
import Policies from "@/components/Policies";
import ProductsListing from "../components/ProductsListing";
import React from "react";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsListing />
      <Policies />
      <Newsletter />
    </div>
  );
};

export default Home;
