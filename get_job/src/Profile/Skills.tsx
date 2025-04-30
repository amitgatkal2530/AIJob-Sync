import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { changeProfile } from "../Slices/ProfileSlice";
import { showNotification } from "@mantine/notifications";
import { useDispatch, useSelector } from "react-redux";

const Skills=()=>{
    const dispatch=useDispatch();
    const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const[skills,setSkills]=useState<string[]>([]);
         
         const handleClick=()=>{
            if(!edit){
                setEdit(true)
            setSkills(profile.skills)
          
            }
            else{
                setEdit(false);
                
            }
         }
         const handleSave=()=>{
            setEdit(false);
            let updatedProfile = { ...profile,skills:skills };
            dispatch(changeProfile(updatedProfile));
           
            showNotification({
                title: "Skills Updated Successfully ",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />
              })
            }
    return(
        <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-white flex justify-between">Skills    <div>{edit&&<ActionIcon onClick={handleSave} color="green.8" variant="subtle" size="lg">
         <IconCheck  className="h-4/5 w-4/5 " stroke={1.5}/>
          </ActionIcon>}
           <ActionIcon onClick={handleClick} color={edit?"red.8":"bright-sun.4"} variant="subtle" size="lg">
         {edit?<IconX  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div></div>
             {
              edit?  <TagsInput value={skills} onChange={setSkills} placeholder="add skill"  splitChars={[',', ' ', '|']}/>
              :<div className="flex flex-wrap gap-2">
              {profile?.skills?.map((skills: any, index: number) => (
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
    )
}
export default Skills;