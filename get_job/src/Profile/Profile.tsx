import { ActionIcon, Divider } from "@mantine/core";
import React, { useState } from "react";




import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import { profile } from "../Data/TalentData";
import CertiCard from "./CertiCard";
import ExpCard from "./ExpCard";

const Profile=()=>{
     const skills = [
        'React','Spring Boot', 'Java', 'Python','Node.js','MongoDB','Express','Django','SQL','TypeScript', 'HTML',
         'CSS', 'Redux', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes','AWS','TensorFlow','Keras',
      ];
      const[edit,setEdit]=useState([false,false,false,false,false]);
      const handleEdit=(index:any)=>{
            const newEdit=[...edit];
            newEdit[index]=!newEdit[index];
            setEdit(newEdit);
            
      }
    return(
        <div className="w-4/5 max-auto">
        <div className="">
    
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
  
      
        <div className="px-3 mt-16">
          <div className="text-3xl font-semibold flex justify-between items-center">
            Om Kumawat
            <ActionIcon onClick={()=>handleEdit(0)} color="bright-sun.4" variant="subtle" size="lg">
           {edit[0]?<IconDeviceFloppy  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
            </ActionIcon>
          </div>
          <div className="text-xl flex gap-1 items-center mt-2">
            <IconBriefcase className="h-5 w-5" stroke={1.5} />
            Software Enginner &bull; Google
          </div>
          <div className="text-lg text-mine-shaft-300 flex gap-1 items-center mt-1">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            New York, United States
          </div>
        </div>
  
      
        <Divider my="xl" />
  
   
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-white">About</div>
          <div className="text-sm text-mine-shaft-300 text-justify">
          I am a Full-Stack Developer passionate about programming and problem-solving. I enjoy building scalable applications and optimizing performance.
          </div>
        </div>
  
        <Divider my="xl" />
  
     
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-white">Skills</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skills: any, index: any) => (
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
  
     
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 text-white">Experience</div>
          <div className="flex flex-col gap-8">
            {profile.experience.map((exp, index) => (
              <ExpCard key={index} {...exp} />
            ))}
          </div>
        </div>
  
        <Divider my="xl" />
  
      
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 text-white">Certifications</div>
          <div className="flex flex-col gap-8">
            {profile.certifications.map((certi, index ) => (
              <CertiCard key={index} {...certi} />
            ))}
          </div>
        </div>
      </div>
      </div>
    )
}
export default Profile;