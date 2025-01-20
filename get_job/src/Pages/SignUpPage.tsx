import { IconJoker } from "@tabler/icons-react";
import React from "react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage=()=>{
    const location=useLocation()
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden ">
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 `}>
                {/* <Login/> */}
                <div className="w-1/2 h-full rounded-r-[200px] bg-mine-shaft-900 flex gap-5 items-center justify-center flex-col">
                <div className="flex gap-3 items-center text-bright-sun-400">
                  <IconJoker className="h-16 w-16" stroke={2.5} />
                  <div className="text-6xl font-semibold"><span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-bright-sun-400 to-pink-400 drop-shadow-lg">
                   JobSyncAI
                  </span></div>
               </div >
               <div className="text-2xl text-mine-shaft-200 font-semibold">Find The Job Made For You</div>
                </div>
                <SignUp/>
                
            </div>
            
        </div>
    )
}
export default SignUpPage;