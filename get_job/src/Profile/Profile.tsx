import { Avatar, Divider, FileInput, Overlay, Paper } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconEdit } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import { changeProfile, setProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Certificate from "./Cerificate";
import Experience from "./Experience";
import Info from "./Info";
import Skills from "./Skills";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { hovered, ref } = useHover();
  const [imagePreview, setImagePreview] = useState(profile.picture || "/avatar-3.png");

  useEffect(() => {
    getProfile(user.id)
      .then((data: any) => {
        dispatch(setProfile(data));
        setImagePreview(data.picture ? `data:image/png;base64,${data.picture}` : "/avatar-3.png");
      })
      .catch((error: any) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  // Convert image to Base64
  const getBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (file: File | null) => {
    console.log("Selected file:", file); // Debugging log
    if (!file) return;

    let base64Image = await getBase64(file);
    console.log("Base64 image:", base64Image.substring(0, 50)); // Debugging log

    base64Image = base64Image.split(',')[1]; // Remove Base64 prefix

    let updatedProfile = { ...profile, picture: base64Image };
    dispatch(changeProfile(updatedProfile));

    setImagePreview(`data:image/png;base64,${base64Image}`); // Update preview immediately

    console.log("Updating profile image on server...");
    await updateProfileImageOnServer(user.id, base64Image);
  };

  // Update profile image in the backend
  const updateProfileImageOnServer = async (userId: number, base64Image: string) => {
    try {
      const response = await axios.post(`http://localhost:8080/profiles/update/${userId}`, {
        picture: base64Image,
      });

      console.log("API Response:", response.data); // Debugging log
      showNotification({
        title: "Profile picture updated successfully",
        message: "",
        color: "green",
        icon: <IconCheck size={18} />,
      });
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  };

  return (
    <Paper shadow="lg" radius="md" className="w-11/12 max-w-4xl mx-auto mt-6 bg-white/70 backdrop-blur-lg p-6">
      <div className="relative rounded-t-md overflow-hidden">
        <img className="w-full h-50 object-cover" src="/Profile/banner1.jpeg" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

        {/* Profile Avatar */}
        <div ref={ref} className="absolute bottom-[-30px] left-6 flex items-center">
          <div className="relative">
            <Avatar
              className="!w-48 !h-48 border-8 border-mine-shaft-950 rounded-full transition-transform transform hover:scale-105"
              src={imagePreview}
              alt="Profile"
            />
            {hovered && (
              <>
                <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.5} />
                <IconEdit
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white !w-10 !h-10 transition-transform hover:scale-125 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                />
                {/* DEBUG: Removed `ref` from FileInput */}
                <FileInput
                  onChange={handleFileChange}
                  className="absolute top-1/3 left-1/3 rounded-full z-[201] w-12 [&_div]:text-transparent"
                  size="lg"
                  radius="xl"
                  accept="image/png,image/jpeg"
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="px-4 mt-16">
        <Info />
        <Divider my="xl" />
        <About />
        <Divider my="xl" />
        <Skills />
        <Divider my="xl" />
        <Experience />
        <Divider my="xl" />
        <Certificate />
      </div>
    </Paper>
  );
};

export default Profile;
