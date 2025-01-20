import React from "react";
import { jobList } from "../Data/JobsData";
import JobCard from "../JobHunt/JobCard";

const Jobs=()=>{
    return(
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    )
}
export default Jobs;