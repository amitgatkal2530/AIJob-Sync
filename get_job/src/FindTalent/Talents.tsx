import React from "react";
import JobCard from "../JobHunt/JobCard";
import { jobList } from "../Data/JobsData";
import { Sort } from "../JobHunt/Sort";
import { applicantsList, talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        {/* Add a sorting component here if necessary */}
        <Sort/>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {talents.map((talent, index) => (
                <TalentCard key={index} {...talent} />
              ))}
            
         
      </div>
    </div>
  );
};

export default Talents;
