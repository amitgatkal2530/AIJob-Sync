import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../Data/Profile";
import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput=(props:any)=>{
    const select=fields;
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const[checked,setChecked]=useState(false);
    const [desc,setDesc]=useState("Developed scalable web applications and enhanced application performance by 30%. Collaborated with cross-functional teams to deliver innovative solutions.");
    return(
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add?"Add ":"Edit "} Experiance
            <div className="flex gap-10 [&>*]:w-1/2"></div>
            <SelectInput{...select[0]}/>
            <SelectInput{...select[1]}/>
           
        </div>
        <SelectInput{...select[2]}/>
        <Textarea withAsterisk label="Summary" value={desc} autosize minRows={3} placeholder="Enter about your summary" 
        onChange={(event) => setDesc(event.currentTarget.value)}/>

       <div className="flex gap-10 [&>*]:w-1/2">
       <MonthPickerInput withAsterisk maxDate={endDate || undefined}  label="Start date" placeholder="Pick date" value={startDate} onChange={setStartDate}/>
       <MonthPickerInput disabled={checked} withAsterisk minDate={startDate || undefined} maxDate={new Date()} label="End date" placeholder="Pick date" value={endDate} onChange={setEndDate}/>
        
       </div>
       <Checkbox checked={checked} onChange={(event)=>setChecked(event.currentTarget.checked)} autoContrast label="Currently Working Here"/>
        <div className="flex gap-5">
                    <Button onClick={()=>props.setEdit(false)} color="bright-sun.4" variant="outline">Save</Button>
                    <Button onClick={()=>props.setEdit(true)} color="red.8" variant="light">Discard</Button>
                  </div>
        </div>
    )
}
export default ExpInput;