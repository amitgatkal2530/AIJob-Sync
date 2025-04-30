import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { updateProfile } from "../Services/ProfileService";
import { showNotification } from "@mantine/notifications";

const About=()=>{
    const dispatch=useDispatch();
    const[edit,setEdit]=useState(false);
    const profile=useSelector((state:any)=>state.profile);
    const[about,setAbout]=useState("");
         
         const handleClick=()=>{
            if(!edit){
                setEdit(true)
            setAbout(profile.about)
          
            }
            else{
                setEdit(false);
                
            }
         }
         const handleSave=()=>{
            setEdit(false);
            let updatedProfile = { ...profile,about:about };
            dispatch(changeProfile(updatedProfile));
           
            showNotification({
                title: "About Updated Successfully ",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />
              })
         }
    return(
        <div className="px-3">
        <div className="text-2xl font-semibold mb-3 text-white flex justify-between">About<div>
            {edit&&<ActionIcon onClick={handleSave} color="green.8" variant="subtle" size="lg">
         <IconCheck  className="h-4/5 w-4/5 " stroke={1.5}/>
          </ActionIcon>}
           <ActionIcon onClick={handleClick} color={edit?"red.8":"bright-sun.4"} variant="subtle" size="lg">
         {edit?<IconX  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div></div>

          {
            edit? <Textarea
            value={about}
            autosize minRows={3} placeholder="Enter about yourself" onChange={(e) => setAbout(e.target.value)} />     
             :<div className="text-sm text-mine-shaft-300 text-justify">
            {profile?.about}
             </div>
          }
         
        
      </div>
    )
}
export default About;

function dispatch(arg0: { payload: any; type: "profile/changeProfile"; }) {
    throw new Error("Function not implemented.");
}
