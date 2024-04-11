import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WeCanDo from "../components/Home/WeCanDo";
import Statistics from "../components/Home/Statistics";
import Countries from "../components/Home/Countries";
// import Universties from "../components/Home/Universties";
import Works from "../components/Home/Works";
import StudentSays from "../components/Home/StudentSays";
import FAQ from "../components/Home/FAQ";
import UniverstiesHome from "../components/Home/UniversityHome";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WeCanDo />
      <Statistics />
      <Countries />
      <UniverstiesHome />
      <Works />
      <StudentSays />
      <FAQ />
    </div>
  );
};

export default Home;
