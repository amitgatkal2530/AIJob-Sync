import React from "react";
import JobCard from "./JobCard";
import { jobList } from "../Data/JobsData";
import { Sort } from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        {/* Add a sorting component here if necessary */}
        <Sort/>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
