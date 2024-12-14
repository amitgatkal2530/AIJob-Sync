import { Carousel } from "@mantine/carousel";
import React from "react";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { rem } from "@mantine/core";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-10 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>

      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2 mb-10">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:!opacity-75 [&_button]:opacity-0"
       nextControlIcon={<IconArrowRight className="h-8 w-8" />}
       previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transitionduration-300 ease-in- !shadow-bright-sun-300">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/Categories/${category.image}`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.description}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobsAvailable}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
