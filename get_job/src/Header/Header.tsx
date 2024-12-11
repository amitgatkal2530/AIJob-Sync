import { Avatar, Indicator } from "@mantine/core";
import { IconBellRinging, IconJoker, IconSettings } from "@tabler/icons-react";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconJoker className="h-10 w-10" stroke={1.25} />
        <div className="text-3xl font-semibold">MyJob</div>
      </div>

      {/* Center Section: Navigation Links */}
      <NavLinks />

      {/* Right Section: Profile and Icons */}
      <div className="flex gap-3 items-center">
        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-semibold">Amit</div>
          <Avatar src="avatar-9.png" />
        </div>

        {/* Settings Icon */}
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <IconSettings stroke={1.5} />
        </div>

        {/* Notification Bell */}
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="bright-sun" offset={4} size={12} withBorder processing>
            <IconBellRinging stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
