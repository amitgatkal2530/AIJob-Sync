import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBuilding,
  IconFileText,
  IconHelpCircle,
  IconInfoCircle,
  IconJoker,
  IconMail,
  IconMessageCircle,
  IconQuestionMark,
  IconSearch,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import { footerLinks } from "../Data/Data";

const Footer = () => {
  const icons = {
    "Find Job": <IconSearch className="h-4 w-4 text-bright-sun-400" />,
    "Find Company": <IconBuilding className="h-4 w-4 text-bright-sun-400" />,
    "Find Employee": <IconUsers className="h-4 w-4 text-bright-sun-400" />,
    "About Us": <IconInfoCircle className="h-4 w-4 text-bright-sun-400" />,
    "Contact Us": <IconMail className="h-4 w-4 text-bright-sun-400" />,
    "Privacy Policy": <IconShieldCheck className="h-4 w-4 text-bright-sun-400" />,
    "Terms & Conditions": <IconFileText className="h-4 w-4 text-bright-sun-400" />,
    "Help & Support": <IconHelpCircle className="h-4 w-4 text-bright-sun-400" />,
    Feedback: <IconMessageCircle className="h-4 w-4 text-bright-sun-400" />,
    "Find FAQ": <IconQuestionMark className="h-4 w-4 text-bright-sun-400" />,
  };

  return (
    <footer className="pt-20 pb-10  bg-mine-shaft-950 text-mine-shaft-100 px-8">
      <div className="flex flex-wrap gap-10 justify-between bg-mine-shaft-950 font-['poppins'] ">
        {/* Left Section */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          {/* Logo and Description */}
          <div className="flex items-center gap-3 text-bright-sun-400">
            <IconJoker
              className="h-10 w-10 drop-shadow-lg animate-pulse"
              stroke={2.5}
            />
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-bright-sun-400 to-pink-400 drop-shadow-lg">
              JobSyncAI
            </span>
          </div>
          <p className="text-sm text-mine-shaft-300 leading-relaxed">
            Job portal with user profiles, skill updates, certifications, work
            experience, and admin-managed job postings.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 [&>div]:bg-mine-shaft-700 [&>div]:p-3 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-bright-sun-400 [&>div]:transition [&>div]:transform [&>div]:hover:scale-110 [&>div]:shadow-lg">
            <div>
              <IconBrandFacebook className="h-6 w-6 text-mine-shaft-100" />
            </div>
            <div>
              <IconBrandInstagram className="h-6 w-6 text-mine-shaft-100" />
            </div>
            <div>
              <IconBrandX className="h-6 w-6 text-mine-shaft-100" />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-10 w-full md:w-3/4 justify-between">
          {footerLinks.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 flex flex-col items-start"
            >
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-bright-sun-400 to-pink-400 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transition hover:underline"
                  >
                    {icons[link] ?? null}
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 pt-5 text-center text-xs text-mine-shaft-500">
        <div className="border-t-2 border-gradient-to-r from-bright-sun-400 to-pink-400"></div>
        <span className="block mt-4">
          © {new Date().getFullYear()}{" "}
          <span className="text-bright-sun-400 font-semibold">
            JobSyncAI
          </span>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
