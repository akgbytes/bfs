import React from "react";
import { Icons } from "./Icons";
import { Check, Star } from "lucide-react";
import UserCard from "./UserCard";

const Testimonials = () => {
  return (
    <div>
      <section className="bg-gray-100 py-6 px-40">
        {/* styled text */}
        <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 flex flex-col items-center gap-8 sm:gap-16">
          {" "}
          {/* Reduced gap */}
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-semibold text-4xl md:text-5xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
          </div>
          {/* user reviews */}
          <div className="flex gap-4">
            <UserCard
              review="The vegetables are always so fresh and crisp! I've been ordering from here for months, and the quality has never disappointed. Highly recommended!"
              image="/user-1.png"
              user="Jonathan"
              rating={5}
            />
            <UserCard
              review="The delivery is always on time, and the produce is packaged with care. The avocados are perfectly ripe every single time. I feel like I’m shopping directly from the farm!"
              image="/user-4.jpg"
              user="Josh"
              rating={5}
            />
            <UserCard
              review="I was skeptical about ordering fresh produce online, but this service has blown me away. The tomatoes tasted like they were just picked, and the leafy greens stayed fresh for over a week. This is now my go-to for groceries."
              image="/user-3.png"
              user="Annie"
              rating={5}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
