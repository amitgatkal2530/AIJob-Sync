import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import ExpCard from "./ExpCard";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";

const Experience=()=>{
    const profile=useSelector((state:any)=>state.profile);    
    const [edit,SetEdit]=useState(false);
    const [addExp,setAddExp]=useState(false);
    const handleClick=()=>{
        SetEdit(!edit);
    }
    
    return(
        <div className="px-3">
        <div className="text-2xl font-semibold mb-5 text-white flex justify-between">Experience<div className="flex gap-2"> <ActionIcon onClick={()=>setAddExp(true)} color="bright-sun.4" variant="subtle" size="lg">
         <IconPlus className="h-4/5 w-4/5"/></ActionIcon>       
         <ActionIcon onClick={handleClick} color={edit?"red.8":"bright-sun.4"} variant="subtle" size="lg">
         {edit?<IconX  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
          </ActionIcon></div></div>
        <div className="flex flex-col gap-8">
          {profile?.experiences?.map((exp:any, index:number) => (
            <ExpCard edit={edit} key={index}index={index} {...exp}/>
          ))}
          {addExp&&<ExpInput add setEdit={setAddExp}/>}
        </div>
      </div>
    )
}
export default Experience;

function useStae(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
