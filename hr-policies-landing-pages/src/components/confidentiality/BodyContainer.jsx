import React from "react";
import HRPolicy from "./HRPolicy";
import ContentsContainer from "./ContentsContainer";

const BodyContainer = () => {
  return (
    <div className="flex gap-6 w-full lg:gap-9 p-4">
      <HRPolicy />
      <ContentsContainer />
    </div>
  );
};

export default BodyContainer;
