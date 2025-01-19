import React from "react";

const OurPolicy = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-semibold mt-24">Our Policies</h2>
      <div className="shadow-md p-8 text-xs">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img src="/delivery-truck.svg" alt="" className="h-10 w-10" />
            <div className="flex flex-col mt-1">
              <p className="font-semibold">Free Delivery</p>
              <p className="opacity-40 pt-0.5">
                Free delivery on all your order
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/package.svg" alt="" className="h-10 w-10" />
            <div className="flex flex-col mt-1">
              <p className="font-semibold">100% Secure Payment</p>
              <p className="opacity-40 pt-0.5">We ensure your money is safe</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/shopping-bag.svg" alt="" className="h-10 w-10" />
            <div className="flex flex-col mt-1">
              <p className="font-semibold"> Easy Exchange Policy</p>
              <p className="opacity-40 pt-0.5">
                Hassle-free exchange within 7 days
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/headphones.svg" alt="" className="h-10 w-10" />
            <div className="flex flex-col mt-1">
              <p className="font-semibold">Customer Support 24/7</p>
              <p className="opacity-40 pt-0.5">Instant access to support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
