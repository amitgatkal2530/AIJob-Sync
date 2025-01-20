import { Tabs } from "@mantine/core";
import React from "react";
import { jobList } from "../Data/JobsData";

import Card from "./Card";

const JobHistory=()=>{
    return(
        <div className="py-2">
        <div className="text-2xl font-semibold mb-5 ">Job History</div>
        <div>
          <Tabs
            variant="outline"
            radius="lg"
            defaultValue="applied"
            className="transition-all duration-300 ease-in-out"
          >
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab
                value="applied"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Applied
              </Tabs.Tab>
              <Tabs.Tab
                value="saved"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Saved
              </Tabs.Tab>
              <Tabs.Tab
                value="offered"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Offered
              </Tabs.Tab>
              <Tabs.Tab
                value="interviewing"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
               Interviewing
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="applied">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {jobList.map((job, index) => (
            <Card key={index} {...job} applied />
           ))}
      </div>
            </Tabs.Panel>
            <Tabs.Panel value="saved">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {jobList.map((job, index) => (
          <Card key={index} {...job} saved/>
        ))}
      </div>
            </Tabs.Panel>
            <Tabs.Panel value="offered">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {jobList.map((job, index) => (
          <Card key={index} {...job} offered />
        ))}
      </div>
            </Tabs.Panel>
            <Tabs.Panel value="interviewing">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {jobList.map((job, index) => (
          <Card key={index} {...job} interviewing />
        ))}
      </div>
            </Tabs.Panel>
          </Tabs>
        </div>
             </div>
    )
}
export default JobHistory;