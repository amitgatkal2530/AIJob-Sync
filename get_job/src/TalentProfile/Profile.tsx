import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import CertiCard from "./CertiCard";
import ExpCard from "./ExpCard";

const Profile = (props: any) => {
  return (
    <div className="w-full lg:w-4/4 p-3 rounded-lg shadow-md border border-gray-700 bg-mine-shaft-800">
      {/* Profile Banner and Avatar */}
      <div className="relative">
        <img
          className="rounded-t-2xl"
          src="/Profile/banner1.jpeg"
          style={{ width: "100%", height: "200px" }}
          alt=""
        />
        <img
          className="h-48 w-48 rounded-full absolute left-3 bottom-0 border-8 border-gray-800"
          src="/avatar-3.png"
          alt=""
        />
      </div>

      {/* Profile Name and Contact */}
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between items-center">
          {props.name}
          <Button color="bright-sun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center mt-2">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>
        <div className="text-lg text-mine-shaft-300 flex gap-1 items-center mt-1">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>

      {/* Dividers and Sections */}
      <Divider my="xl" />

      {/* About Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-white">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider my="xl" />

      {/* Skills Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-white">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skills: any, index: any) => (
            <div
              key={index}
              className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
            >
              {skills}
            </div>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      {/* Experience Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-white">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider my="xl" />

      {/* Certifications Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-white">Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((certi: any, index: any) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
