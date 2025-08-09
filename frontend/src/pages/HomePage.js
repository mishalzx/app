import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ReachMethodology from "../components/ReachMethodology";
import RecruitmentProcess from "../components/RecruitmentProcess";
import ClientPortfolio from "../components/ClientPortfolio";
import OrgStructure from "../components/OrgStructure";
import FeeStructure from "../components/FeeStructure";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header scrollY={scrollY} />
      <Hero />
      <AboutSection />
      <ReachMethodology />
      <RecruitmentProcess />
      <ClientPortfolio />
      <OrgStructure />
      <FeeStructure />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;