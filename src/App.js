import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigationType } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Courses from "./Pages/Courses";
import CourseList from "./Pages/CourseList";
import CompareCourse from "./Pages/CompareCourse";
import UniversitesPage from "./Pages/UniversitesPage";
import Scholarship from "./Pages/Scholarship";
import ExamIelts from "./Pages/exams/ExamIelts";
import TopicIlets from "./Pages/exams/TopicIlets";
import IletsCue from "./Pages/exams/IletsCue";
import IletsEssay from "./Pages/exams/IletsEssay";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import InstitutionDetail from "./Pages/InstitutionDetail";
import FAQ from "./components/Home/FAQ";
import TermCondition from "./Pages/TermCondition";
import PrivacyPolicy from "./Pages/privacy-policy";
import ContactUs from "./Pages/contact-us";
import RefundPolicy from "./Pages/refund-policy";
import ProfileForm from "./components/Home/Profile/profile-form";
import LoginModal from "./components/auth/login";
import { Toaster } from "react-hot-toast";
import './App.css'
import SOP from "./Pages/study-abroad/sop";
import LOR from "./Pages/study-abroad/lor";

export const ModalContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const action = useNavigationType();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("_u"));
    const loggedIn = !!user?.token;
    setIsLoggedIn(loggedIn);
    setIsModalOpen(!loggedIn);
  }, [location]);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<RequireAuth><Courses /></RequireAuth>} />
        <Route path="/courses-list" element={<RequireAuth><CourseList /></RequireAuth>} />
        <Route path="/compare" element={<RequireAuth><CompareCourse /></RequireAuth>} />
        <Route path="/institutions" element={<RequireAuth><UniversitesPage /></RequireAuth>} />
        <Route path="/scholarship" element={<RequireAuth><Scholarship /></RequireAuth>} />
        <Route path="/exam-ielts" element={<RequireAuth><ExamIelts /></RequireAuth>} />
        <Route path="/ielts-topic" element={<RequireAuth><TopicIlets /></RequireAuth>} />
        <Route path="/ielts-cue-card" element={<RequireAuth><IletsCue /></RequireAuth>} />
        <Route path="/ielts-essay" element={<RequireAuth><IletsEssay /></RequireAuth>} />
        <Route path="/sop" element={<RequireAuth><SOP /></RequireAuth>} />
        <Route path="/lor" element={<RequireAuth><LOR /></RequireAuth>} />
        <Route path="/blog" element={<RequireAuth><Blog /></RequireAuth>} />
        <Route path="/blog-details" element={<RequireAuth><BlogDetail /></RequireAuth>} />
        <Route path="/institution-details" element={<RequireAuth><InstitutionDetail /></RequireAuth>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-condition" element={<RequireAuth><TermCondition /></RequireAuth>} />
        <Route path="/privacy-policy" element={<RequireAuth><PrivacyPolicy /></RequireAuth>} />
        <Route path="/refund-policy" element={<RequireAuth><RefundPolicy /></RequireAuth>} />
        <Route path="/contact-us" element={<RequireAuth><ContactUs /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><ProfileForm /></RequireAuth>} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: '#FF6477',
            color: '#FFFFFF',
          },
        }}
      />
      <Footer />
    </ModalContext.Provider>
  );
}

export default App;
