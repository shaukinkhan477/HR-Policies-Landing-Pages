import React from "react";
import HeroSection from "../components/confidentiality/HeroSection";
import BodyContainer from "../components/confidentiality/BodyContainer";
import VideoGallery from "../components/confidentiality/VideoGallery";
import FAQ from "../components/confidentiality/FAQ";

const ConfidentialityPage = () => {
  return (
    <div className="mt-24">
      <HeroSection />
      <BodyContainer />
      <VideoGallery />
      <FAQ />
    </div>
  );
};

export default ConfidentialityPage;
