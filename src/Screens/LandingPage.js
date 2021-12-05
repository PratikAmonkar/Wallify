import React from "react";
import FeatureSection from "../Section/FeatureSection";
import HeroSection from "../Section/HeroSection/HeroSection";
import Navbar from "../Section/NavbarSection/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </>
  );
};

export default LandingPage;
