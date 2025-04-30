import React, { useEffect, useState } from "react";
import { Button, Divider } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import { profile } from "../Data/TalentData";
import { getAllProfiles } from "../Services/ProfileService";

const TalentProfilePage = () => {
  const navigate=useNavigate();
  const [talents,setTalents]=useState<any[]>([]);
  useEffect(()=>{
    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
   
        <Button
        onClick={()=>navigate(-1)}
          leftSection={<IconArrowLeft size={20} />}
          my="sm"
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
    

      <div className="flex gap-5">
        {/* Profile section takes 3/4 of the width */}
        <div className="w-3/4">
         <Profile />
        </div>

        {/* RecommendedTalent section takes 1/4 of the width */}
        <div className="w-1/4">
          <RecommendedTalent talents={talents} />
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
