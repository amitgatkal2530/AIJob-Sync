import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Resume", url: "/resume" },
    { name: "PathFinder", url: "/path-finder" },
    { name: "JobHunt", url: "/JobHunt" },
    { name: "TalentMatch", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "PostedJob", url: "/posted-job" },
    { name: "JobHistory", url: "/job-history" },
    { name: "SignUp", url: "/signup" },
    { name: "Login", url: "/login" },
    
  ];
  const location = useLocation();

  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url ? " border-bright-sun-400 text-bright-sun-400 ": "border-transparent"}
          border-t-[3px] h-full flex items-center`}>
        
          <Link key={index} to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
