import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { content, fields } from "../Data/PostJob";
import { getJob, postJob } from "../Services/JobService";
import RichTextEditorComponent from "./RichTextEditor";
import SelectInput from "./SelectInput";

const PostJob=()=>{
    const {id}=useParams();
    const [editorData,setEditorData]=useState(content)
    const user=useSelector((state:any)=>state.user);
    console.log("Redux User:", user);
    const profileId = user?.profileId; 
    const select=fields;
    useEffect(()=>{
      window.scrollTo(0,0) ;
      if(id!=="0"){
        getJob(id).then((res)=>{
            form.setValues(res);
            setEditorData(res.description)
        }).catch((err)=>{
            console.log(err);
        })
      } 
      else{
        form.reset();
        setEditorData(content)
      }
    },[id])
    const navigate=useNavigate()
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content
            },
            validate:{
                jobTitle:isNotEmpty('Job title is required'),
                company:isNotEmpty('Companyis required'),
                experience:isNotEmpty('Experience is required'),
                jobType:isNotEmpty('Job type is required'),
                location:isNotEmpty('Location is required'),
                packageOffered:isNotEmpty('Pacakge is required'),
                skillsRequired:isNotEmpty('Skills is required'),
                about:isNotEmpty('About is required'),
                description:isNotEmpty('Description is required'),


            }
    })
    const handlePost=()=>{
        form.validate();
     if(!form.isValid()) return;
    
    
     if (!profileId) {
        showNotification({
          title: "Error",
          message: "User profile is missing! Please log in again.",
          color: "red",
          icon: <IconX size={18} />
        });
        return;
      }
        postJob({...form.getValues(),id,postedBy:profileId,jobStatus:"ACTIVE"}).then((res)=>{
            showNotification({
                title: "Job posted successfully",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />,
              });
              navigate(`/posted-job/${res.id}`);

        }).catch((err)=>{{
            console.log(err);
            const errorMessage = err.response?.data?.message || "Error in post job!";
            showNotification({
                title: "Error",
                message: errorMessage,
                color: "red",
                icon: <IconX size={18} />
              });
        }})
    }
    const handleDraft=()=>{
        
        postJob({...form.getValues(),id,postedBy:profileId,jobStatus:"DRAFT"}).then((res)=>{
            showNotification({
                title: "Job Drafted successfully",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />,
              });
              navigate(`/posted-job/${res.id}`);

        }).catch((err)=>{{
            console.log(err);
            const errorMessage = err.response?.data?.message || "Error in post job!";
            showNotification({
                title: "Error",
                message: errorMessage,
                color: "red",
                icon: <IconX size={18} />
              });
        }})
    }
    return(
        <div className="w-4/5 mx-auto">
          <div className="text-2xl font-semibold mb-5 ">Post a Job</div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle"{...select[0]}/>
                <SelectInput form={form} name="company"{...select[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience" {...select[2]}/>
                <SelectInput form={form} name="jobType"{...select[3]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location"{...select[4]}/>
                <NumberInput {...form.getInputProps('packageOffered')} label="Salary" withAsterisk min={1} max={300} clampBehavior="strict" placeholder="Enter Salary" hideControls/>
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter Skill "  clearable acceptValueOnBlur splitChars={[',', ' ', '|']}/>
            <Textarea {...form.getInputProps('about')} withAsterisk label="About job"  autosize minRows={3} placeholder="Enter about job" />
            
           
           <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true]]:!bg-bright-sun-400/20">
            <div className="text-sm font-medium">Job Description <span className="text-red-500"> *</span></div>
            < RichTextEditorComponent form={form} data={editorData}/>
            </div>
            <div className=" flex gap-4">
            <Button color="bright-sun.4" onClick={handlePost} variant="light">Publish Job
               
            </Button>
             <Button color="bright-sun.4" onClick={handleDraft} variant="outline">Save as Draft
               
            </Button>
            </div>
          </div>
        </div>
    )
}
export default PostJob;