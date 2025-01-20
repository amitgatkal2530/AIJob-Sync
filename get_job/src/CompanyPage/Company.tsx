import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import About from "./About";
import Jobs from "./Jobs";
import Employees from "./Employees";

const Company = () => {
  return (
    <div className="w-full md:w-3/4 xl:max-w-7xl mx-auto bg-mine-shaft-700 p-8 rounded-lg shadow-lg">
      {/* Banner and Profile Image */}
      <div className="relative">
        <img
          className="rounded-t-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
          src="/Profile/banner5.jpg"
          style={{ width: "100%", height: "200px" }}
          alt="Company Banner"
        />
        <img
          className="h-36 w-36 rounded-3xl bg-mine-shaft-700 p-2 absolute -bottom-1/4 left-5 transform hover:scale-110 transition-all duration-500 shadow-xl"
          src="/google.png"
          alt="Company Logo"
        />
      </div>

      {/* Profile Name and Contact */}
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold text-white flex justify-between items-center">
          Google
          <Avatar.Group>
            <Avatar src="avatar-2.png" />
            <Avatar src="avatar-3.png" />
            <Avatar src="avatar-4.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>

        <div className="text-lg text-mine-shaft-300 flex gap-1 items-center mt-1">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>
        <Divider my="xl" />

        {/* Tabs Section */}
        <div>
          <Tabs
            variant="outline"
            radius="lg"
            defaultValue="about"
            className="transition-all duration-300 ease-in-out"
          >
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab
                value="about"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                About
              </Tabs.Tab>
              <Tabs.Tab
                value="jobs"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Jobs
              </Tabs.Tab>
              <Tabs.Tab
                value="employees"
                className="transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Employees
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <About />
            </Tabs.Panel>
            <Tabs.Panel value="jobs">
              <Jobs />
            </Tabs.Panel>
            <Tabs.Panel value="employees">
              <Employees />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;
