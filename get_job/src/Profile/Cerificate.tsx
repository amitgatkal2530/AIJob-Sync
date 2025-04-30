import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import CertiInput from "./CertiInput";
import CertiCard from "./CertiCard";
import { useSelector } from "react-redux";

const Certificate=()=>{
     const[addCerti,setAddCerti]=useState(false);
     const[edit,setEdit]=useState(false);
     const profile =useSelector((state:any)=>state.profile);
     const handleClick=(index:any)=>{
       setEdit(!edit);
        
  }
    return(
        <div className="px-3">
                  <div className="text-2xl font-semibold mb-5 text-white flex justify-between">Certifications  <div className="flex gap-2"> <ActionIcon onClick={()=>setAddCerti(true)} color="bright-sun.4" variant="subtle" size="lg">
                   <IconPlus className="h-4/5 w-4/5"/></ActionIcon>       
                   <ActionIcon onClick={handleClick} color={edit?"red.8":"bright-sun.4"} variant="subtle" size="lg">
                   {edit?<IconX  className="h-4/5 w-4/5 "/>:<IconPencil className="h-4/5 w-4/5 " />}
                    </ActionIcon></div></div>
                  <div className="flex flex-col gap-8">
                    {profile?.certifications?.map((certi:any, index:number ) => (
                      <CertiCard key={index} index={index} edit={edit} {...certi} />
                    ))}
                      {addCerti&&<CertiInput setEdit={setAddCerti}/>}
                  </div>
                </div>
    )
}
export default Certificate;