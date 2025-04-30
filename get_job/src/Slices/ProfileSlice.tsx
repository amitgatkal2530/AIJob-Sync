import { createSlice } from "@reduxjs/toolkit";
import { updateProfile } from "../Services/ProfileService";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
 // Ensure savedJobs is initialized as an empty array
  },
  reducers: {
    changeProfile: (state:any, action) => {
      state=updateProfile(action.payload) 
      return action.payload; 
    },
    setProfile: (state,action) => {
      state=action.payload
      return state; 
    },
  },
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
