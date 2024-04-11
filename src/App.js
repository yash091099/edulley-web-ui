import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses-list" element={<CourseList />} />
        <Route path="/compare" element={<CompareCourse />} />
        <Route path="/institutions" element={<UniversitesPage />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/exam-ielts" element={<ExamIelts />} />
        <Route path="/ielts-topic" element={<TopicIlets />} />
        <Route path="/ielts-cue-card" element={<IletsCue />} />
        <Route path="/ielts-essay" element={<IletsEssay />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetail />} />
        <Route path="/institution-details" element={<InstitutionDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-condition" element={<TermCondition />} />
        <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
        <Route path="/refund-policy" element={< RefundPolicy/>} />
        <Route path="/contact-us" element={< ContactUs/>} />
        <Route path="/profile" element={< ProfileForm/>} />
      </Routes>{" "}
      <Footer />
    </>
  );
}

export default App;
