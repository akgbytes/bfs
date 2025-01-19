import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const ProductsListing = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  let displayProds = products;

  useEffect(() => {
    if (search && showSearch) {
      displayProds = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFeaturedProducts(displayProds);
  }, [products, search, showSearch]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <h1 className="text-4xl font-semibold pb-4">Featured Products</h1>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {featuredProducts.map((item, index) => (
          <ProductCard
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.pricePerKg}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsListing;
