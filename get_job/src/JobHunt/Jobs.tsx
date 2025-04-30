import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Sort } from "./Sort";
import { getAllJobs } from "../Services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../Slices/FilterSlice";

const Jobs = () => {
  const [jobList, setJobList] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.sort);
  const filter = useSelector((state: any) => state.filter);

  // ✅ Fetch and set jobs on mount with Most Recent as default sort
  useEffect(() => {
    dispatch(resetFilter());
    getAllJobs()
      .then((res) => {
        const activeJobs = res.filter((job: any) => job.jobStatus === "ACTIVE");

        // ✅ Sort by Most Recent (default)
        const sortedByRecent = activeJobs.sort(
          (a: any, b: any) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        );

        setJobList(sortedByRecent);
        setFilteredJobs(sortedByRecent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ✅ Apply sorting when sort state changes
  useEffect(() => {
    let sorted = [...jobList];

    if (sort === "Most Recent") {
      sorted.sort(
        (a: any, b: any) =>
          new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
      );
    } else if (sort === "Salary: Low to High") {
      sorted.sort((a: any, b: any) => a.packageOffered - b.packageOffered);
    } else if (sort === "Salary: High to Low") {
      sorted.sort((a: any, b: any) => b.packageOffered - a.packageOffered);
    }

    setJobList(sorted);
  }, [sort]);

  // ✅ Apply filters when filter state or jobList changes
  useEffect(() => {
    let filtered = jobList;

    // 🔹 Job Title (multi-select)
    if (filter["job Title"] && filter["job Title"].length > 0) {
      filtered = filtered.filter((job: any) =>
        filter["job Title"].some((title: string) =>
          job.jobTitle?.toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    // 🔹 Location
    if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter((job: any) =>
        filter.Location.some((loc: string) =>
          job.location?.toLowerCase().includes(loc.toLowerCase())
        )
      );
    }

    // 🔹 Job Type
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filtered = filtered.filter((job: any) =>
        filter["Job Type"].some((type: string) =>
          job.jobType?.toLowerCase().includes(type.toLowerCase())
        )
      );
    }

    // 🔹 Experience
    if (filter.Experience && filter.Experience.length > 0) {
      filtered = filtered.filter((job: any) =>
        filter.Experience.some((exp: string) =>
          job.experience?.toLowerCase().includes(exp.toLowerCase())
        )
      );
    }

    // 🔹 Salary Range (Slider using "exp" key)
    if (filter.exp && filter.exp.length === 2) {
      const [minSalary, maxSalary] = filter.exp;
      filtered = filtered.filter((job: any) => {
        const salary = job.packageOffered ?? 0;
        return salary >= minSalary && salary <= maxSalary;
      });
    }

    setFilteredJobs(filtered);
  }, [filter, jobList]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        {/* <Sort /> */}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredJobs.map((job: any, index: number) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
