import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconPaperclip, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applyJob } from "../Services/JobService";
import { getBase64 } from "../Services/Utitlities";

const ApplicationForm=()=>{
    
    const { id } = useParams<{ id: string }>();
    const user=useSelector((state:any)=>state.user); 
    const[preview,setPriview]=useState(false);
    const[sumit,setSubmit]=useState(false);
    const[sec,setSec]=useState(5);
    const navigate=useNavigate();
    const handlePreview=()=>{
        form.validate();
        window.scrollTo({top:0,behavior:'smooth'})
        if(!form.isValid())return;
        setPriview(!preview);
      
    }
    const handleSubmit =async()=>{
       setSubmit(true);
       const resumeFile = form.getValues().resume; // Get the resume file

  if (!resumeFile) {
    console.error("Resume file is required.");
    return; // Stop execution if resume is null
  }
       let resume=await getBase64(resumeFile);
       let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};
        applyJob(id,applicant).then((res)=>{
            setSubmit(false);
            showNotification({
                title: "Applied successfully",
                message: "",
                color: "green",
                icon: <IconCheck size={18} />,
              });
              navigate("/job-history");

        }).catch((err)=>{
            setSubmit(false);
            showNotification({
                title: "Error Fail to submit applcation",
                message: err.response.data.errorMessage,
                color: "red",
                icon: <IconX size={18} />
              });
        })

    }
     const form=useForm({
                    mode:'controlled',
                    validateInputOnChange:true,
                    initialValues:{
                       name:'',
                       email:'',
                       phone:'',
                       website:'',
                       resume:null,
                       coverLetter:''
                       
            
                    },
                    validate:{
                       name:isNotEmpty("Name is required"),
                        email:isNotEmpty("Email is required"),
                        phone:isNotEmpty("Phone required"),
                        website:isNotEmpty("Website is required"),
                        resume:isNotEmpty("Resume is required"),
                        
                    }
                })
    return(
        <div>
            <LoadingOverlay className="!fixed"
                      visible={sumit}
                      zIndex={1000}
                      overlayProps={{ radius: 'sm', blur: 2 }}
                      loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                    />
            <div className= "text-xl front-semibold mb-5">Sumit Your Application</div>
        <div className="flex flex-col gap-5 ">
            <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput  {...form.getInputProps("name")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter Name"/>
            <TextInput  {...form.getInputProps("email")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Email"withAsterisk  placeholder="Enter Email"/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput  {...form.getInputProps("phone")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Phone No" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict"/>
            <TextInput  {...form.getInputProps("website")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Personal Website"withAsterisk  placeholder="Enter url" />
            </div>
            <FileInput  {...form.getInputProps("resume")} accept="application/pdf" readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
       <Textarea  {...form.getInputProps("coverLetter")} readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk
        placeholder="Enter something about yourself "
        label="Cover Letter"
        autosize
        minRows={4}
      />
      {!preview &&<Button
          onClick={handlePreview}
          color="bright-sun.4"
          variant="light"
        >
          Preview
        </Button>}
        {
            preview && <div className=" flex gap-10 [&>*]:w-1/2">
                <Button fullWidth
          onClick={handlePreview}
          color="bright-sun.4"
          variant="outline"
        >
          Edit
        </Button>
        <Button fullWidth
          onClick={handleSubmit}
          color="bright-sun.4"
          variant="light"
        >
          Submit
        </Button>
            </div>
        }
        </div>
        </div>
    )
}
export default ApplicationForm;


