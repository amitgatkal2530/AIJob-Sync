import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Slices/ProfileSlice";
import userReducer from "./Slices/UserSlice";
import filterReducer from "./Slices/FilterSlice";
import sortReducer from "./Slices/SortSlice";

const store= configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        filter:filterReducer,
        sort:sortReducer
    },
})
export default store;