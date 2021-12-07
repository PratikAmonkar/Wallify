import React from "react";
import FeatureSection from "../Section/FeatureSection";
import FooterSection from "../Section/FooterSection/FooterSection";
import ServiceSection from "../Section/FooterSection/ServiceSection.js/ServiceSection";
import HeroSection from "../Section/HeroSection/HeroSection";
import Navbar from "../Section/NavbarSection/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
