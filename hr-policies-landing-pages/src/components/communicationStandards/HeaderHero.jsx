import React from "react";
import youngPeople from "../../assets/communicationStandardsImg/youngPeople.svg";
import teamDiscussion from "../../assets/communicationStandardsImg/discussingWork.svg";

const HeaderHero = () => {
  return (
    <section className="relative bg-[#E7FFCC]  h-[250px]  lg:h-[393px] flex items-center">
      {/* Left Side: Crane Illustration */}
      <div className="absolute left-7 bottom-5 w-1/2 flex justify-start">
        <img
          src={youngPeople}
          alt="Crane"
          className="max-w-[266px] h-[309px] object-contain"
        />
      </div>

      {/* Right Side: Team Illustration */}
      <div className="absolute right-9 bottom-7 w-1/2 flex justify-end">
        <img
          src={teamDiscussion}
          alt="traffic Barrier"
          className="w-[342px] h-[311px] object-contain"
        />
      </div>

      {/* Text Content (Optional) */}
      <div className="relative mx-auto w-full text-center max-w-screen-lg z-10">
        <h1 className="text-[26px] font-sans lg:text-6xl text-[#249024]  font-bold  ">
          Communication
        </h1>
        <h1 className="text-[26px] font-sans lg:text-6xl text-[#249024]  font-bold">
          Policy
        </h1>
      </div>
    </section>
  );
};

export default HeaderHero;
