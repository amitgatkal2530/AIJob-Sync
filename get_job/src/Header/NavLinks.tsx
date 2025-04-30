import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);

  const allLinks = [
    { name: "Resume", url: "/resume", roles: ["APPLICANT", "EMPLOYER"] },
    { name: "AI-Interview", url: "/ai-interview", roles: ["APPLICANT", "EMPLOYER"] },
    { name: "JobHunt", url: "/JobHunt", roles: ["APPLICANT"] },
    { name: "JobHistory", url: "/job-history", roles: ["APPLICANT"] },
    { name: "TalentMatch", url: "/find-talent", roles: ["EMPLOYER"] },
    { name: "Post Job", url: "/post-job/0", roles: ["EMPLOYER"] },
    { name: "PostedJob", url: "/posted-job/0", roles: ["EMPLOYER"] },
  ];

  // Filter links based on user role
  const visibleLinks = allLinks.filter(link => {
    if (!user) return false;
    return link.roles.includes(user.accountType);
  });

  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {visibleLinks.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
