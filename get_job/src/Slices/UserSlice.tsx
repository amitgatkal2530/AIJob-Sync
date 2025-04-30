import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Services/localStorageService";

const UserSlice = createSlice({
  name: "user",
  initialState: getItem("user") || null, // Initialize state with null if no user is found
  reducers: {
    setUser: (state, action) => {
      setItem("user", action.payload); // Set the user in localStorage
      return action.payload; // Directly return the payload to update the state
    },
    removeUser: (state) => {
      removeItem("user"); // Remove the user from localStorage
      return null; // Set the state to null after logging out
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
