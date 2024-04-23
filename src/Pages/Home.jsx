import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import WeCanDo from "../components/Home/WeCanDo";
import Statistics from "../components/Home/Statistics";
import Countries from "../components/Home/Countries";
// import Universties from "../components/Home/Universties";
import Works from "../components/Home/Works";
import StudentSays from "../components/Home/StudentSays";
import FAQ from "../components/Home/FAQ";
import UniverstiesHome from "../components/Home/UniversityHome";
import LoginModal from "../components/auth/login";

const Home = () => {
  // const fetchUniversities = async () => {
  //   try {
  //     const response =  
  // }
  // useEffect(() => {
    
    
  // },[]);
  const _u=JSON.parse(localStorage.getItem('_u'));
  let token = _u?.token;
  return (
    <>
    <div>
      {!token && <LoginModal />}
      <HeroSection />
      <WeCanDo />
      <Statistics />
      <Countries />
     {token && <UniverstiesHome />}
      <Works />
      <StudentSays />
      <FAQ />
    </div>
    </>
  );
};

export default Home;
