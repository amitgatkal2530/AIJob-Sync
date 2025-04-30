import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fields } from "../Data/Profile";
import { changeProfile } from "../Slices/ProfileSlice";
import SelectInput from "./SelectInput";

const ExpInput=(props:any)=>{
    const dispatch=useDispatch();
    const select=fields;
    const profile=useSelector((state:any)=>state.profile);
    
    useEffect(()=>{
        if(!props.add)form.setValues({title:props.title,company:props.company,location:props.location,description:props.description,
            startDate:new Date(props.startDate),endDate:new Date(props.endDate),working:props.working})
        },[])
    
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            title:'',
            company:'',
            location:'',
            description:'',
            startDate:new Date(),
            endDate:new Date(),
            working:false

        },
        validate:{
            title:isNotEmpty("Title is required"),
            company:isNotEmpty("Company is required"),
            location:isNotEmpty("Location is required"),
            description:isNotEmpty("Description  is required")
        }
    })
    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;
      
        let exp = [...profile.experiences];
        const formValues = form.getValues();
        
        // Convert to Date and then toISOString if it's a valid Date
        const convertToISOString = (date: any) =>
          date instanceof Date && !isNaN(date) ? date.toISOString() : new Date(date).toISOString();
      
        formValues.startDate = convertToISOString(formValues.startDate);
        formValues.endDate = convertToISOString(formValues.endDate);
      
        if (props.add) {
          exp.push(formValues);
        } else {
          exp[props.index] = formValues;
        }
      
        let updatedProfile = { ...profile, experiences: exp };
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
      
        showNotification({
          title: "Experience Updated Successfully",
          message: "",
          color: "green",
          icon: <IconCheck size={18} />,
        });
      };
      
    return(
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add?"Add ":"Edit "} Experiance
            <div className="flex gap-10 [&>*]:w-1/2"></div>
            <SelectInput form={form} name="title" label="Title" {...select[0]} />
            <SelectInput form={form} name="company" label="Company" {...select[1]} />
            </div>
            <SelectInput form={form} name="location" label="Location" {...select[2]} />

        <Textarea {...form.getInputProps('description')} withAsterisk label="Summary"  autosize minRows={3} placeholder="Enter about your summary" />

       <div className="flex gap-10 [&>*]:w-1/2">
       <MonthPickerInput {...form.getInputProps("startDate")}withAsterisk maxDate={form.getValues().endDate || undefined}  label="Start date" placeholder="Pick date" />
       <MonthPickerInput {...form.getInputProps("endDate")} disabled={form.getValues().working} withAsterisk minDate={form.getValues().startDate || undefined} maxDate={new Date()} label="End date" placeholder="Pick date" />
        
       </div>
       <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working",event.currentTarget.checked)} autoContrast label="Currently Working Here"/>
        <div className="flex gap-5">
                    <Button onClick={ handleSave} color="bright-sun.4" variant="outline">Save</Button>
                    <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Discard</Button>
                  </div>
        </div>
    )
}
export default ExpInput;



