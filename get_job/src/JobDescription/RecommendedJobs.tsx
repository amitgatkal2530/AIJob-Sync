import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../JobHunt/JobCard";
import { getAllJobs } from "../Services/JobService";

const RecommendedJobs = () => {
  const { id } = useParams();
  const jobId = Number(id); // Ensure id is a number

  const [jobList, setJobList] = useState<any[]>([]);

  useEffect(() => {
    getAllJobs()
      .then((res) => setJobList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-mine-shaft-900 p-4 rounded-lg shadow-md">
      <div className="text-xl font-semibold mb-4 text-white">
        Recommended Jobs
      </div>
      <div className="flex flex-col gap-4">
        {jobList
          ?.filter((job) => job.id !== jobId) // Exclude only the current job
          .slice(0, 5) // Limit to 5 jobs
          .map((job) => (
            <div
              key={job.id}
              className="p-3 rounded-lg shadow-md border border-gray-700 bg-mine-shaft-800"
            >
              <JobCard {...job} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;
