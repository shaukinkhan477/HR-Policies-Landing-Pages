import React from "react";
import HRPolicy from "../components/confidentiality/HRPolicy";
import ContentPage from "../components/communicationStandards/ContentPage";
import FAQSection from "../components/communicationStandards/FAQSection";
import HeaderHero from "../components/communicationStandards/HeaderHero";

const CommunicationPolicy = () => {
  return (
    <>
      <div className="mt-24">
        <HeaderHero />
      </div>

      <div className="flex gap-6 w-full  p-4">
        <HRPolicy />
        <ContentPage />
      </div>
      <FAQSection />
    </>
  );
};

export default CommunicationPolicy;
