import { Button, Divider, FileInput, LoadingOverlay, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import React, { useState } from "react";
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../Services/Utitlities";

const ApplyJobComp =(props:any)=>{
    const[preview,setPriview]=useState(false);
    

 
    const navigate=useNavigate();
    const handlePreview=()=>{
        setPriview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    
    return (<>
     <div className="w-2/3 mx-auto ">
     
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
              {props.company} &#x2022; {timeAgo(props.postTime)} &bull; {props.applicants?props.applicants.length:0} Applicants
            </div>
          </div>
        </div>
       
      </div>
         <Divider my="xl" className="" />
         <ApplicationForm/>
     </div>
     
     </>
    )
}
export default ApplyJobComp;