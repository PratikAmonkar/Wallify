import React from "react";
import FeatureSection from "../Section/FeatureSection";
import FooterSection from "../Section/FooterSection/FooterSection";
import HeroSection from "../Section/HeroSection/HeroSection";
import Navbar from "../Section/NavbarSection/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
