import React from "react";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";
import { jobList } from "../Data/JobsData";
import JobCard from "../JobHunt/JobCard";

const RecommendedJobs=()=>{
    return(
<div className="bg-mine-shaft-900 p-4 rounded-lg shadow-md">
        <div className="text-xl font-semibold mb-4 text-white">
          Recommended Job
        </div>
        <div className="flex flex-col gap-4">
          {jobList.slice(0, 5).map((job, index) => (
            <div
              key={index}
              className="p-3 rounded-lg shadow-md border border-gray-700 bg-mine-shaft-800"
            >
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </div>
    )
}
export default RecommendedJobs;