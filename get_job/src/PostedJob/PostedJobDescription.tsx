import { Badge, Tabs } from "@mantine/core";
import React from "react";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";


const PostedJobDescription=()=>{
    return(
        <div className="mt-5 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center  ">Software Enginner<Badge variant="light" ml="sm" color="bright-sun.4" size="sm">Badge</Badge>
        </div>
        <div className="font-medium text-mine-shaft-300 mb-5">New York, United States</div>
        <div className="">
        <Tabs
            variant="outline"
            radius="lg"
            defaultValue="overview"
            className="transition-all duration-300 ease-in-out"
          >
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab
                value="overview"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Overview
              </Tabs.Tab>
              <Tabs.Tab
                value="applicants"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Applicants
              </Tabs.Tab>
              <Tabs.Tab
                value="invited"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Invited
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview" className="[&>div]:w-full">
              <JobDescription edit/>
            </Tabs.Panel>
            <Tabs.Panel value="applicants">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         {talents.map((talent, index) => (
                <TalentCard key={index} {...talent} posted />
              ))}
             </div>
            </Tabs.Panel>
            <Tabs.Panel value="invited">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         {talents.map((talent, index) => (
                <TalentCard key={index} {...talent} invite />
              ))}
             </div>
            </Tabs.Panel>
          </Tabs>
        </div>
        </div>
    )
}
export default PostedJobDescription;