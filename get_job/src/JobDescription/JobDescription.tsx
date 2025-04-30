import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCheck, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { card } from "../Data/JobDescriptionData";
//@ts-ignore
import DOMPurify from "dompurify";
import { timeAgo } from "../Services/Utitlities";
import { useSelector } from "react-redux";
import { postJob } from "../Services/JobService";
import { showNotification } from "@mantine/notifications";


const JobDescription = (props:any) => {
  const sanitizedData = DOMPurify.sanitize(props.description);
  const profile=useSelector((state:any)=>state.profile);
  const user=useSelector((state:any)=>state.user);
  const [applied,setApplied]=useState(false);

  useEffect(()=>{
    if(props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
      setApplied(true);
    }
    else{
      setApplied(false);
    }
  },[props])

  const handleSaveJob=()=>{

  }
  const handleClosed=()=>{
    postJob({...props,jobStatus:"CLOSED"}).then((res)=>{
      showNotification({
        title: "Job Closed Successfully",
        message: "",
        color: "green",
        icon: <IconCheck size={18} />,
      });
    }).catch((err)=>{
      console.log(err);
      showNotification({
        title: "Error ,Job could not be closed ",
        message: "Error Please try  again.",
        color: "red",
        icon: <IconX size={18} />
      });
  })
}

  return (
    <div className="w-full lg:w-4/4 xl:max-w-7xl mx-auto bg-mine-shaft-900 p-8 rounded-lg shadow-lg">
      {/* Job Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="p-4  rounded-lg">
            <img className="h-14" src={`/Icons/${props.company}.png`} alt="Company Logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl text-white">
              {props.jobTitle}
            </div>
            <div className="text-lg text-gray-400">
              {props.company} &#x2022; {timeAgo(props.postTime)} &bull;{props.applicants?props.applicants.length:0} Applicants
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
         {(props.edit || !applied) &&<Link to={props.edit?`/post-job/${props.id}`:`/apply-jobs/${props.id}`}>
            <Button color="bright-sun.4" size="sm" variant="Light">
              {props.closed?"Reopen":props.edit?"Edit":"Apply"}
            </Button>
          </Link>}
          {
            !props.edit && applied &&<Button color="green.5" size="sm" variant="outline">
            Applied
            </Button>
          }
          {props.edit && !props.closed?<Button color="red.4" onClick={handleClosed} size="sm" variant="light">
            Close 
            </Button>:profile.savedJobs?.includes(props.id)?<IconBookmarkFilled
            onClick={handleSaveJob} className="cursor-pointer text-bright-sun-400" stroke={1.5} />:<IconBookmark onClick={handleSaveJob}
            className="cursor-pointer hover:text-bright-sun-400 text-mine-shaft-300 " stroke={.5}/>
            }
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
            <div className="font-semibold text-white">{props?props[item.id]:"NA"}{item.id=="packageOffered" &&<>-LPA</>}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" className="border-gray-700" />

      {/* Required Skills */}
      <div>
        <div className="text-xl font-semibold text-white mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-3">
        {
          props?.skillsRequired?.map((skill:any,index:number) => <ActionIcon key={index} className="!h-fit !w-fit
          font-medium !text-sm" variant="light" color="bright-sun.4" p="xs" radius="xl">{skill}</ActionIcon> )
          }
         

          


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
              <img className="h-8" src={`/Icons/${props.company}.png`} alt="Company Logo" />
            </div>
            <div>
              <div className="font-medium text-lg text-white">{props.company}</div>
              <div className="text-gray-400">10k+ employees</div>
            </div>
          </div>
          <Link to={`/company/${props.company}`}>
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
