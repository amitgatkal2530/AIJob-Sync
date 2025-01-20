import React from "react";
import { Link } from "react-router-dom";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDescription from "../PostedJob/PostedJobDescription";

const PostedJobPage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-4">
     
        <div className="flex gap-5 ">
        <PostedJob/>
        <PostedJobDescription/>
        </div>
      </div>
    )
}
export default PostedJobPage;