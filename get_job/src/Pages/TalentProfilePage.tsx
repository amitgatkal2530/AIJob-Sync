import React from "react";
import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import { profile } from "../Data/TalentData";

const TalentProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
   
      <Link className="my-4 inline-block" to="/find-talent">
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
        <div className="w-3/4">
          {profile.length > 0 && <Profile {...profile[0]} />}
        </div>

        {/* RecommendedTalent section takes 1/4 of the width */}
        <div className="w-1/4">
          <RecommendedTalent />
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
