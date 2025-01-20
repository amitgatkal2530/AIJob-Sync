import React from "react";

import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import PostJob from "../PostJob/PostJob";


const PostJobPage=()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
         <PostJob/>
         </div>
    )
}
export default PostJobPage;