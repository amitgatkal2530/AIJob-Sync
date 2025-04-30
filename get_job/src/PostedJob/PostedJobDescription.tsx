import { Badge, Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";


const PostedJobDescription=(props:any)=>{
  const [tab,setTab]=useState("overview")
  const [arr,setArr]=useState<any>([]);
  const handleTabChange=(value:any)=>{
    setTab(value);
    if(value=="applicants"){
      setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED"))
    }
    else if(value=="invited"){
      setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING"))
    }
    else if(value=="offered"){
      setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="OFFERED"))
    }
    else{
      setArr(props.applicants?.filter((x:any)=>x.applicationStatus=="REJECTED"))
    }
  }
  useEffect(()=>{
     handleTabChange("overview")
  },[props])
    return(
        <div className="mt-5 w-3/4 px-5">
            {props.jobTitle?<><div className="text-2xl font-semibold flex items-center  ">{props.jobTitle}<Badge variant="light" ml="sm" color="bright-sun.4" size="sm">{props.jobStatus}</Badge>
        </div>
        <div className="font-medium text-mine-shaft-300 mb-5">{props.location}</div>
        <div className="">
        <Tabs
            value={tab} onChange={handleTabChange}
            variant="outline"
            radius="lg"
            defaultValue="overview"
            className="transition-all duration-300 ease-in-out"
          >
            <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
              <Tabs.Tab value="overview" className="transform hover:scale-105 transition-all duration-300 ease-in-out" >
              Overview</Tabs.Tab>
              <Tabs.Tab value="applicants" className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                Applicants</Tabs.Tab>
              <Tabs.Tab value="invited" className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                Invited </Tabs.Tab>
                <Tabs.Tab value="offered" className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                Offered</Tabs.Tab>
              <Tabs.Tab value="rejected" className="transform hover:scale-105 transition-all duration-300 ease-in-out">
                Rejected </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview" className="[&>div]:w-full">
             <JobDescription {...props} edit={true} closed ={props.jobStatus=="CLOSED"}/>
            </Tabs.Panel>
            <Tabs.Panel value="applicants">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         {
           arr?.length?arr.map((talent:any, index:any) => 
                <TalentCard key={index} {...talent} posted={true} />):<div className="text-2xl font-semibold">
                No Applicants</div>
              }
             </div>
            </Tabs.Panel>
            <Tabs.Panel value="invited">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         {  arr?.length?arr.map((talent:any, index:any) => 
                <TalentCard key={index} {...talent} invited={true} />):<div className="text-2xl font-semibold">
                No Invited Candidates</div>
              }
             </div>
            </Tabs.Panel>

            <Tabs.Panel value="offered">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-centere">
         { arr?.length?arr.map((talent:any, index:any) => 
                <TalentCard key={index} {...talent} offered />):<div className="text-2xl font-semibold">
                No Offered Candidates</div>
              }
             </div>
            </Tabs.Panel>

            <Tabs.Panel value="rejected">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         { arr?.length?arr.map((talent:any, index:any) => 
                <TalentCard key={index} {...talent} offered />):<div className="text-2xl font-semibold">
                No Rejected Candidates</div>
              }
             </div>
            </Tabs.Panel>

          </Tabs>
        </div>
            </>:<div className="text-2xl font-semiboldv flex min-h-[70vh] justify-center items-center">NO Job Selected</div>}
        </div>
    )
}
export default PostedJobDescription;