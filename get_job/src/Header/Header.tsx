import { Button, Indicator } from "@mantine/core";
import { IconBellRinging, IconJoker } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user);

  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
      {/* Left Section */}
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconJoker className="h-10 w-10" stroke={2.5} />
        <div className="text-3xl font-semibold">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-bright-sun-400 to-pink-400 drop-shadow-lg">
            AIJobSync
          </span>
        </div>
      </div>

      {/* Center Section: Navigation Links */}
      <NavLinks />

      {/* Right Section: Profile and Icons */}
      <div className="flex gap-3 items-center">
        {/* User Info */}
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="bright-sun.4">
              Login
            </Button>
          </Link>
        )}

        {/* Settings Icon */}
        {/* <div className="bg-mine-shaft-900 p-2 rounded-full">
          <IconSettings stroke={1.5} />
        </div> */}

        {/* Notification Bell */}
        <div className="bg-mine-shaft-900 p-2 rounded-full">
          <Indicator color="bright-sun.4" offset={4} size={12} withBorder processing>
            <IconBellRinging stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  )
  :<></>
  
};

export default Header;



// location.pathname!="/signup" && location.pathname!="/login"?