import { Button, Divider, FileInput, LoadingOverlay, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import React, { useState } from "react";
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { useNavigate } from "react-router-dom";

const ApplyJobComp =()=>{
    const[preview,setPriview]=useState(false);
    const[sumit,setSubmit]=useState(false);
    const[sec,setSec]=useState(5);
    const navigate=useNavigate();
    const handlePreview=()=>{
        setPriview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const handleSubmit =()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);       
            if(x==0) navigate('/JobHunt')
        },1000)
    }
    return (<>
     <div className="w-2/3 mx-auto ">
     <LoadingOverlay className="!fixed"
          visible={sumit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
        <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="p-4  rounded-lg">
            <img className="h-14" src={`/Icons/google.png`} alt="Company Logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-2xl text-white">
              Software Engineer
            </div>
            <div className="text-lg text-gray-400">
              Google &#x2022; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
       
      </div>
         <Divider my="xl" className="" />
         <div className= "text-xl front-semibold mb-5">Sumit Your Application</div>
        <div className="flex flex-col gap-5 ">
            <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter Name"/>
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Email"withAsterisk  placeholder="Enter Email"/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Phone No" withAsterisk placeholder="Enter Phone Number" hideControls min={0} max={9999999999} clampBehavior="strict"/>
            <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Personal Website"withAsterisk  placeholder="Enter url" />
            </div>
            <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
       <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk
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
     <Notification className={`!border-bright-sun-400  !fixed top-0 left-[35%] z-[1001]
        transition-300 ease-in-out  ${sumit?"translate-y-0":"-translate-y-20"}`} 
        icon={<IconCheck style={{width:rem(20),height:rem(20)}} />} 
        color="teal" withBorder title="Application Submitted!" mt="md"
        withCloseButton={false}>
        Redirecting to Find Jobs in {sec} seconds...
      </Notification>
     </>
    )
}
export default ApplyJobComp;