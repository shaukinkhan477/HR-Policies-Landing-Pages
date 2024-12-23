import React from "react";
import "./HRPolicyHeader.css";

import TowerCrane from "../../assets/communicationStandardsImg/towerCrane.svg";
import PeopleAtWork from "../../assets/communicationStandardsImg/peopleAtWork.svg";
import RoadBarrier from "../../assets/communicationStandardsImg/roadBarrier.svg";
import Bricks from "../../assets/communicationStandardsImg/bricks.svg";

const Header = () => {
  return (
    <div className="bg-lime-100 flex items-center justify-between p-2">
      {/* Left Section - Crane Icon */}
      <div className="flex ml-16">
        <img
          src={TowerCrane} // Replace with the actual path to the crane icon
          alt="Crane"
          className="w-44 h-44"
        />
      </div>

      <div className="flex items-center absolute ml-40 mt-24">
        <img
          src={Bricks} // Replace with the actual path to the crane icon
          alt="Bricks"
          className="w-28 h-28"
        />
      </div>

      {/* Center Section - HR Policy Text */}
      <div className="text-green-600 text-6xl">HR Policy</div>

      {/* Right Section - Worker Icon */}
      <div className="flex absolute bricks">
        <img
          src={RoadBarrier} // Replace with the actual path to the worker icon
          alt="Road Barrier"
          className="w-28 h-28"
        />
      </div>

      {/* Right Section - Worker Icon */}
      <div className="flex items-center gap-2">
        <img
          src={PeopleAtWork} // Replace with the actual path to the worker icon
          alt="Workers"
          className="w-44 h-44 mr-16"
        />
      </div>
    </div>
  );
};

export default Header;
