import { Avatar, Rating } from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel"; // Import Carousel component
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">User</span> Says{" "}
        <span className="text-bright-sun-400">About</span> Us?
      </div>

      {/* Carousel Container */}
      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0 mt-10"
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            {/* Testimonial Box */}
            <div className="flex flex-col items-center w-full border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in hover:!shadow-bright-sun-300">
              {/* Top Section: Avatar and Name */}
              <div className="flex items-center gap-4 mb-3">
                <Avatar
                  className="!h-14 !w-14"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <div className="text-lg text-mine-shaft-100 font-semibold">
                    {testimonial.name}
                  </div>
                  <Rating value={testimonial.rating} fractions={2} readOnly />
                </div>
              </div>

              {/* Bottom Section: Review */}
              <div className="text-sm text-mine-shaft-300 text-center">
                {testimonial.review}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
