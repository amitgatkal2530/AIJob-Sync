import { Button, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import React, { useState } from "react";
import { fields } from "../Data/Profile";
import SelectInput from "./SelectInput";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
const CertiInput=(props:any)=>{
     
      const profile =useSelector((state:any)=>state.profile);
      const dispatch=useDispatch();
    const select=fields;
    const form=useForm({
            mode:'controlled',
            validateInputOnChange:true,
            initialValues:{
                title:'',
                issuer:'',
               issueDate:new Date(),
                certificateId:''
    
            },
            validate:{
                title:isNotEmpty("Name is required"),
                issuer:isNotEmpty("Issuer is required"),
                issueDate:isNotEmpty("Issue Date is required"),
                certificateId:isNotEmpty("Certificate Id is required")
            }
        })
        const handleSave=()=>{
            form.validate();
            if(!form.isValid())return
            let certi=[...profile.certifications];
            certi.push(form.getValues());
            certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
            let updatedProfile={...profile,certifications:certi};
            props.setEdit(false);
            dispatch(changeProfile(updatedProfile));
      
            showNotification({
              title: "Certificate Added Successfully",
              message: "",
              color: "green",
              icon: <IconCheck size={18} />,
            });
        }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold>Add Certificate"></div>
            <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput {...form.getInputProps("title")}label="Title" withAsterisk placeholder="Enter title"/>
            <SelectInput  form={form} name="issuer"{...select[1]}/>
            </div>


            <div className="flex gap-10 [&>*]:w-1/2">
           
                           <MonthPickerInput withAsterisk {...form.getInputProps("issueDate")} maxDate={new Date()}  label="Issue date" placeholder="Pick date" />
                           <TextInput {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder="Enter certificate  id"/>
            </div>
            <div className="flex gap-5">
                <Button onClick={handleSave} color="bright-sun.4" variant="outline">Save</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Discard</Button>
                </div>
        </div>
    )
    
}
export default CertiInput;