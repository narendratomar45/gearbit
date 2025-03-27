import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import Features from "../Components/Features";
import PopularCourses from "../Components/PopularCourses";
import InterviewPrep from "../Components/InterviewPrep";
import Testimonials from "../Components/Testimonials";
import FaqSection from "../Components/FaqSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Features />
      <PopularCourses />
      <InterviewPrep />
      <Testimonials />
      <FaqSection />
    </div>
  );
};

export default Home;
