import React from "react";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const Employees=()=>{
    return(
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
         {talents.map((talent, index) => (
                <TalentCard key={index} {...talent} />
              ))}
            
         
      </div>
    )
}
export default Employees;