import { Divider } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ApplyJobPage from "./ApplyJobPage";
import CompanyPage from "./CompanyPage";
import FindTalentPage from "./FindTalentPage";
import HomePage from "./HomePage";
import JobDescriptionPage from "./JobDescriptionPage";
import JobHistoryPage from "./JobHistoryPage";
import JobHunt from "./JobHunt";
import LoginPage from "./LoginPage";
import PostedJobPage from "./PostedJobPage";
import PostJobPage from "./PostJobPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import TalentProfilePage from "./TalentProfilePage";
import Ai_Interview from "./Ai_Interview";
// import Resume from "./Resume";

const AppRoutes = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" />
        <Routes>
          {/* Shared Routes (after login) */}
          <Route path="/ai-interview" element={user ? <Ai_Interview /> : <Navigate to="/login" />} />
          {/* <Route path="/resume" element={user ? <Resume /> : <Navigate to="/login" />} /> */}

          {/* Applicant Only Routes */}
          <Route
            path="/JobHunt"
            element={user?.accountType === "APPLICANT" ? <JobHunt /> : <Navigate to="/" />}
          />
          <Route
            path="/job-history"
            element={user?.accountType === "APPLICANT" ? <JobHistoryPage /> : <Navigate to="/" />}
          />

          {/* Employer Only Routes */}
          <Route
            path="/find-talent"
            element={user?.accountType === "EMPLOYER" ? <FindTalentPage /> : <Navigate to="/" />}
          />
          <Route
            path="/post-job/:id"
            element={user?.accountType === "EMPLOYER" ? <PostJobPage /> : <Navigate to="/" />}
          />
          <Route
            path="/posted-job/:id"
            element={user?.accountType === "EMPLOYER" ? <PostedJobPage /> : <Navigate to="/" />}
          />

          {/* Public or Both */}
          <Route path="/jobs/:id" element={<JobDescriptionPage />} />
          <Route path="/apply-jobs/:id" element={<ApplyJobPage />} />
          <Route path="/company/:name" element={<CompanyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/talent-profile/:id" element={<TalentProfilePage />} />

          {/* Auth */}
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
