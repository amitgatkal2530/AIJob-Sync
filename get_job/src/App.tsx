import React from 'react';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobHunt from './Pages/JobHunt';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import '@mantine/tiptap/styles.css';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';

const App = () => {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: 'bright-sun', // Corrected spelling
    primaryShade: 4, // Corrected capitalization
    colors: {
      'bright-sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
      ],
      'mine-shaft': [
        '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
        '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'
      ]
    },
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}> {/* Fixed colorScheme */}
      <BrowserRouter>
      <div className="relative">
        <Header />
        <Divider size="xs" />
        <Routes>
          <Route path='/JobHunt' element={<JobHunt />} />
          <Route path='/find-talent' element={<FindTalentPage />} />
          <Route path='/jobs' element={<JobDescriptionPage/>} />
          <Route path='/apply-jobs' element={<ApplyJobPage/>} />
          <Route path='/post-job' element={<PostJobPage/> } />
          <Route path='/company' element={<CompanyPage/> } />
          <Route path='/posted-job' element={<PostedJobPage/> } />
          <Route path='/job-history' element={<JobHistoryPage/> } />

          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
