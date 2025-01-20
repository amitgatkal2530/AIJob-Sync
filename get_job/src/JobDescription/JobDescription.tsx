import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, description, skills } from "../Data/JobDescriptionData";
//@ts-ignore
import DOMPurify from "dompurify";

const JobDescription = (props:any) => {
  const sanitizedData = DOMPurify.sanitize(description);

  return (
    <div className="w-full lg:w-4/4 xl:max-w-7xl mx-auto bg-mine-shaft-900 p-8 rounded-lg shadow-lg">
      {/* Job Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="p-4  rounded-lg">
            <img className="h-14" src={`/Icons/google.png`} alt="Company Logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl text-white">
              Software Engineer
            </div>
            <div className="text-lg text-gray-400">
              Google &#x2022; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/apply-jobs">
            <Button color="bright-sun.4" size="sm" variant="Light">
              {props.edit?"Edit":"Apply"}
            </Button>
          </Link>
          {props.edit?<Button color="red.5" size="sm" variant="outline">
            Delete
            </Button>:<IconBookmark
            className="text-bright-sun-400 cursor-pointer"
            size={24}
          />}
        </div>
      </div>

      <Divider my="xl" className="" />

      {/* Job Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {card.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <ActionIcon
              color="bright-sun.4"
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="icon"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-gray-400">{item.name}</div>
            <div className="font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" className="border-gray-700" />

      {/* Required Skills */}
      <div>
        <div className="text-xl font-semibold text-white mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-3">
          {skills.map((item, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-gray-800 text-white rounded-full shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <Divider my="xl" className="border-gray-700" />

      {/* Job Description */}
      <div
        className="[&_h4]:text-xl [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_p]:text-gray-400 [&_p]:text-justify"
        dangerouslySetInnerHTML={{ __html: sanitizedData }}
      ></div>

      <Divider my="xl" className="border-gray-700" />

      {/* About Company */}
      <div>
        <div className="text-xl font-semibold text-white mb-5">About Company</div>
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-4 items-center">
            <div className="p-4 rounded-lg">
              <img className="h-8" src={`/Icons/google.png`} alt="Company Logo" />
            </div>
            <div>
              <div className="font-medium text-lg text-white">Google</div>
              <div className="text-gray-400">10k+ employees</div>
            </div>
          </div>
          <Link to="/company">
            <Button color="bright-sun.4" variant="filled">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-gray-400 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro
          ipsum vero modi, quae dicta dolores harum rem obcaecati? Ipsa omnis
          quisquam autem quidem repellat molestiae id a labore.
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
