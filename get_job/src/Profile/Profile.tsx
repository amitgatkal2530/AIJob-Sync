import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import React, { useState } from "react";




import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import { profile } from "../Data/TalentData";
import CertiCard from "./CertiCard";
import ExpCard from "./ExpCard";
import SelectInput from "./SelectInput";
import { fields } from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile=()=>{
  const [about, setAbout] = useState('I am a Full-Stack Developer passionate about programming and problem-solving. I enjoy building scalable applications and optimizing performance.');
  const [skills, setSkills] = useState(['React','Spring Boot', 'Java', 'Python','Node.js','MongoDB','Express','Django','SQL','TypeScript', 'HTML',
         'CSS', 'Redux', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes','AWS','TensorFlow','Keras',]);
  const select=fields;
  const[edit,setEdit]=useState([false,false,false,false,false]);
  const[addExp,setAddExp]=useState(false);
  const[addCerti,setAddCerti]=useState(false);
  const handleEdit=(index:any)=>{
            const newEdit=[...edit];
            newEdit[index]=!newEdit[index];
            setEdit(newEdit);
            
      }
  function setValue(value: string): void {
    throw new Error("Function not implemented.");
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
          {
            edit[0]?<><div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput{...select[0]}/>
            <SelectInput{...select[1]}/>
           
        </div>
            <SelectInput{...select[2]}/></>:<>
            <div className="text-xl flex gap-1 items-center ">
            <IconBriefcase className="h-5 w-5" stroke={1.5} />
            Software Enginner &bull; Google
          </div>
          <div className="text-lg text-mine-shaft-300 flex gap-1 items-center ">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            New York, United States
          
            </div></>
          }
           
        

          
    



         
        <Divider my="xl" />
  
   
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-white flex justify-between">About<ActionIcon onClick={()=>handleEdit(1)} color="bright-sun.4" variant="subtle" size="lg">
           {edit[1]?<IconDeviceFloppy  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
            </ActionIcon></div>

            {
              edit[1]? <Textarea
              value={about}
              autosize minRows={3} placeholder="Enter about yourself" onChange={(event) => setAbout(event.currentTarget.value)}/>     
               :<div className="text-sm text-mine-shaft-300 text-justify">
              {about}
               </div>
            }
           
          
        </div>
  
        <Divider my="xl" />
  
     
        <div className="px-3">
          <div className="text-2xl font-semibold mb-3 text-white flex justify-between">Skills     <ActionIcon onClick={()=>handleEdit(2)} color="bright-sun.4" variant="subtle" size="lg">
           {edit[2]?<IconDeviceFloppy  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
            </ActionIcon></div>
               {
                edit[2]?  <TagsInput value={skills} onChange={setSkills} placeholder="add skill"  splitChars={[',', ' ', '|']}/>
                :<div className="flex flex-wrap gap-2">
                {skills.map((skills: any, index: any) => (
                  <div
                    key={index}
                    className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
                  >
                    {skills}
                  </div>
                ))}
              </div>
               }
            
          

          
        </div>
  
        <Divider my="xl" />
  
     
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 text-white flex justify-between">Experience<div className="flex gap-2"> <ActionIcon onClick={()=>setAddExp(true)} color="bright-sun.4" variant="subtle" size="lg">
           <IconPlus className="h-4/5 w-4/5"/></ActionIcon>       
           <ActionIcon onClick={()=>handleEdit(3)} color="bright-sun.4" variant="subtle" size="lg">
           {edit[3]?<IconDeviceFloppy  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
            </ActionIcon></div></div>
          <div className="flex flex-col gap-8">
            {profile.experience.map((exp, index) => (
              <ExpCard key={index} {...exp} edit={edit[3]}/>
            ))}
            {addExp&&<ExpInput add setEdit={setAddExp}/>}
          </div>
        </div>
  
        <Divider my="xl" />
  
      
        <div className="px-3">
          <div className="text-2xl font-semibold mb-5 text-white flex justify-between">Certifications  <div className="flex gap-2"> <ActionIcon onClick={()=>setAddCerti(true)} color="bright-sun.4" variant="subtle" size="lg">
           <IconPlus className="h-4/5 w-4/5"/></ActionIcon>       
           <ActionIcon onClick={()=>handleEdit(4)} color="bright-sun.4" variant="subtle" size="lg">
           {edit[4]?<IconDeviceFloppy  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
            </ActionIcon></div></div>
          <div className="flex flex-col gap-8">
            {profile.certifications.map((certi, index ) => (
              <CertiCard key={index} edit={edit[4]} {...certi} />
            ))}
              {addCerti&&<CertiInput setEdit={setAddCerti}/>}
          </div>
        </div>
      </div>
      </div>
      </div>
    )
}
export default Profile;