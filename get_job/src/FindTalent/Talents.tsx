import React, { useEffect, useState } from "react";
import JobCard from "../JobHunt/JobCard";
import { jobList } from "../Data/JobsData";
import { Sort } from "../JobHunt/Sort";
import { applicantsList, talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../Services/ProfileService";
import { getAllUsers } from "../Services/UserService"; 

import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../Slices/FilterSlice";

const Talents = () => {
  const [talents,setTalents]=useState<any>([]);
  const dispatch=useDispatch();
  const filter=useSelector((state:any)=>state.filter);
  const [filteredTalents,setFilteredTalents]=useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(resetFilter());
  
    Promise.all([getAllProfiles(), getAllUsers()])
      .then(([profiles, users]) => {
        // Step 1: Filter users with accountType === "APPLICANT"
        const applicantUserIds = users
          .filter((user: any) => user.accountType === "APPLICANT")
          .map((user: any) => user.profileId);
  
        // Step 2: Filter profiles matching those applicant user profileIds
        const applicantsOnly = profiles.filter((profile: any) =>
          applicantUserIds.includes(profile.id)
        );
  
        console.log("Filtered Applicants:", applicantsOnly);
        setTalents(applicantsOnly);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  useEffect(()=>{
    let filterTalent=talents;
  
    console.log(filter)
    if(filter.name)filterTalent=filterTalent.filter((talent:any)=>talent.name.toLowerCase().includes(filter.name.toLowerCase()));

    if (filter["job Title"] && filter["job Title"].length > 0) {
      filterTalent = filterTalent.filter((talent: any) => {
        const talentTitle = talent.jobTitle?.toLowerCase() || "";
        return filter["job Title"].some((title: any) =>
          talentTitle.includes(title.toLowerCase())
      );
    });
  }
  if (filter.Location && filter.Location.length > 0) {
    filterTalent = filterTalent.filter((talent: any) =>
      filter.Location.some((location: string) =>
        talent.location?.toLowerCase().includes(location.toLowerCase())
      )
    );
  }
  
  if (filter.Skills && filter.Skills.length > 0) {
    filterTalent = filterTalent.filter((talent: any) =>
      filter.Skills.some((skill: string) =>
        talent.skills?.some((talentSkill: string) =>
          talentSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  }
  
  if (filter.exp && filter.exp.length === 2) {
    const [minExp, maxExp] = filter.exp;
    filterTalent = filterTalent.filter((talent: any) => {
      const exp = talent.totalExp ?? 0; // fallback if totalExp is undefined
      return exp >= minExp && exp <= maxExp;
    });
  }
  

     setFilteredTalents(filterTalent)
    },[filter,talents])
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Talents</div>
        {/* Add a sorting component here if necessary */}
        {/* <Sort/> */}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {filteredTalents.map((talent:any, index:any) => (
                <TalentCard key={index} {...talent} />
              ))}
            
         
      </div>
    </div>
  );
};

export default Talents;
