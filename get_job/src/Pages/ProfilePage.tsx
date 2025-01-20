import React from "react";
import Profile from "../Profile/Profile";
import { Divider } from "@mantine/core";

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] flex items-center justify-center">
      <div className="w-4/5  rounded-xl shadow-lg p-6">
       
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
