import React from "react";
import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import JobDescription from "../JobDescription/JobDescription";
import RecommendedJobs from "../JobDescription/RecommendedJobs";



const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
   
      <Link className="my-4 inline-block" to="/JobHunt">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5">
        {/* Profile section takes 3/4 of the width */}
        <div className="">
          <JobDescription/>
        </div>

        {/* RecommendedTalent section takes 1/4 of the width */}
        <div className="">
          < RecommendedJobs/>
        </div>
      </div>
         </div>
  );
};

export default JobDescriptionPage;
