import React from "react";
import { ReactComponent as Envelope } from "../assets/EnvelopeOpen.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as X } from "../assets/X.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="py-6 px-28 w-full h-[181px] border-y-2 flex justify-between items-center rounded shadow-sm border-none mt-12 ">
      {/* left side */}
      <div className="flex justify-center items-center gap-4">
        <Envelope />
        <div>
          <h2 className="font-semibold text-lg">Subscribe our Newsletter</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="flex gap-3 justify-center items-center">
        <div className=" flex relative">
          <Input
            type="email"
            placeholder="Your email address"
            className="rounded-full w=full w-[470px] h-12 pl-6"
          />
          <Button className="absolute rounded-full w-40 h-12  right-0">
            Subscribe
          </Button>
        </div>
        {/* social media handles */}

        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100">
          <Facebook />
        </div>
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100">
          <Instagram />
        </div>
        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100">
          <X />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
