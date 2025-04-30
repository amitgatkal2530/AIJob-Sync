import { Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllJobs } from "../Services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {
  const [activeTab, setActiveTab] = useState<any>("APPLIED");
  const [jobList, setJobList] = useState<any>([]);
  const [showList, setShowList] = useState<any>([]);
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res);
        setShowList(
          res.filter((job: any) => {
            let found = false;
            job.applicants?.forEach((applicant: any) => {
              if (
                applicant.applicantId == user.id &&
                applicant.applicationStatus == "APPLIED"
              ) {
                found = true;
              }
            });
            return found;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTabChange = (value: string | null) => {
    setActiveTab(value);
    if (value == "SAVED") {
      setShowList(
        jobList.filter((job: any) =>
          profile.savedJobs?.includes?.includes(job.id)
        )
      );
    } else {
      setShowList(
        jobList.filter((job: any) => {
          let found = false;
          job.applicants?.forEach((applicant: any) => {
            if (
              applicant.applicantId == user.id &&
              applicant.applicationStatus == value
            ) {
              found = true;
            }
          });
          return found;
        })
      );
    }
  };

  return (
    <div className="py-2">
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs
          variant="outline"
          radius="lg"
          value={activeTab}
          onChange={handleTabChange}
          className="transition-all duration-300 ease-in-out"
        >
          <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {showList.map((job: any, index: any) => (
                <Card
                  key={index}
                  {...job}
                  {...{ [activeTab.toLowerCase()]: true }}
                  currentUserId={user.id}
                />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
