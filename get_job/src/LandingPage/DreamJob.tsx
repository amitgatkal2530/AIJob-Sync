import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Lets<span> Learn </span>And<span> Grow To</span> Find<span> Your </span>Dream <span>Job</span>
        </div>
        <div className=" text-lg text-mine-shaft-200 ">
        Build Your Skills, Grow Your Career, Land Your Dream Job!
        Good life begins with a good company. Start exploring thousands of jobs in one place...
        </div>
        <div className="flex gap-3 mt-5">
                 <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100" variant="unstyled" label="Job Title"placeholder="Software Engineer "/>          
                 <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100"variant="unstyled" label="Type"placeholder="Full Time "/>
        <div className="flex items-center justify-center h-full w-20 bg-bright-sun-500 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
             <IconSearch className="h-[85%] w-[85%]"/>
        </div>
        </div>
      </div>

      <div className="w-[55%] flex  justify-center">
        <div className="w-[30rem] mt-10 relative"> {/* Added margin-top */}
          <img src="/image1.png" alt="boy" />
            <div className="absolute  -right-10  w-fit top-[40%] border-right-sun-400 border rounded-lg p-2 backdrop-blur-md">
                <div className="text-center mb-1 text-sm text-mine-shaft-100 ">10k+ got job</div>
             <Avatar.Group>
             <Avatar src="avatar-2.png" />
             <Avatar src="avatar-3.png" />
             <Avatar src="avatar-4.png" />
             <Avatar>+5</Avatar>
             </Avatar.Group>
            </div>
            <div className="absolute  -left-10 w-fit top-[30%] border-left-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                <div className="flex gap-2 items-center ">
                     <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                        <img src="/google.png" alt=""/>
                     </div>
                     <div className="text-sm text-mine-shaft-100">
                        <div>Software Enginner</div>
                        <div className="text-mine-shaft-200 text-xs">New York</div>
                     </div>
                </div>
                <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                    <span>1 Day Ago</span>
                    <span>120 Apllicants</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
