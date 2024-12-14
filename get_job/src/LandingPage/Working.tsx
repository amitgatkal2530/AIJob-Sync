import React from "react";
import { workingSteps } from "../Data/Data";
import { Avatar } from "@mantine/core";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>
      <div className="flex flex-row px-16 gap-12 items-center">
        {/* Left side: Girl image */}
        <div className="relative">
  {/* Girl Image */}
  <img
    className="h-[30rem] object-contain"
    src="/Working/girl2.png"
    alt="Process Illustration"
  />

  {/* Profile Completion Box */}
  <div className="w-36 absolute top-[10%] left-[75%] flex flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
    <Avatar className="!h-16 !w-16" src="avatar-4.png" alt="it's me" />
    <div className="text-sm font-semibold text-mine-shaft-200 text-center">
      Complete Your Profile
    </div>
    <div className="text-xs text-mine-shaft-300">70% Completed</div>
  </div>
</div>

   

        {/* Right side: Steps content */}
        <div className="flex-1 flex flex-col gap-8">
          {workingSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`/Working/${step.image}`}
                  alt={step.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {step.name}
                </div>
                <div className="text-mine-shaft-300">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
