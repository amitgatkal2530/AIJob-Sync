import { ActionIcon, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fields } from "../Data/Profile";
import { updateProfile } from "../Services/ProfileService";
import { changeProfile } from "../Slices/ProfileSlice";
import SelectInput from "./SelectInput";

const Info=()=>{
     const select=fields;
     const dispatch=useDispatch();
     const user=useSelector((state:any)=>state.user)
     const profile=useSelector((state:any)=>state.profile)
     const[edit,setEdit]=useState(false);
     
     const handleClick=()=>{
        if(!edit){
        setEdit(true);
        form.setValues({jobTitle:profile.jobTitle,company:profile.company,location:profile.location,totalExp:profile.totalExp})
        }
        else{
            setEdit(false);
            
        }
     }
     const form = useForm({
        mode: 'controlled',
        initialValues: { jobTitle: '', company: '' ,location:'',totalExp:1},
       
      });
      const handleSave=()=>{
        setEdit(false);
        let updatedProfile = {
          ...profile,
          ...form.values,
          name: user.name  // 🟢 include user's name in the profile update
        };
            dispatch(changeProfile(updatedProfile));
            updateProfile(user.id, updatedProfile).catch(console.error); // Ensure you update the backend as well.
            showNotification({
                title: "Profile Updated Successfully ",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />
              });
      }
    return(
        <>
        <div className="text-3xl font-semibold flex justify-between items-center">
          {user.name}
          <div>{edit&&<ActionIcon onClick={handleSave} color="green.8" variant="subtle" size="lg">
         <IconCheck  className="h-4/5 w-4/5 " stroke={1.5}/>
          </ActionIcon>}
           <ActionIcon onClick={handleClick} color={edit?"red.8":"bright-sun.4"} variant="subtle" size="lg">
         {edit?<IconX  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
          </ActionIcon>
        </div></div>
        {
          edit?<><div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form ={form} name="jobTitle"{...select[0]}/>
          <SelectInput form ={form} name="company"{...select[1]}/>
         
      </div>
      <div className="flex gap-10 [&>*]:w-1/2 my-3">
      <SelectInput form ={form} name="location"{...select[2]}/>
      <NumberInput  label="Experience" {...form.getInputProps('totalExp')}/>
      </div>
          </>:<>
          <div className="text-xl flex gap-1 items-center ">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {profile.jobTitle} &bull; {profile.company}
        </div>
        <div className="text-lg text-mine-shaft-300 flex gap-1 items-center ">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
        {profile.location}
        
          </div>
          
          <div className="text-lg text-mine-shaft-300 flex gap-1 items-center ">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />Experience :  {profile.totalExp} Years
        
          </div></>

        
        }
         


     </>
         
    )
}
export default Info;


