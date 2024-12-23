// import React from "react";
// import bricks from "../../assets/heroSection/bricks.svg";
// import towerCrane from "../../assets/heroSection/towerCrane.svg";
// import people from "../../assets/heroSection/people.svg";
// import trafficConeAndRoadBarrier from "../../assets/heroSection/trafficConeAndRoadBarrier.svg";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-[#E7FFCC] h-[250px]  lg:h-[393px] flex items-center">
//       {/* Left Side: Crane Illustration */}
//       <div className="absolute -left-3 bottom-8 lg:left-14 lg:bottom-0 w-1/2 flex justify-start ">
//         <img
//           src={towerCrane}
//           alt="Crane"
//           className="max-w-full h-auto object-contain"
//         />
//       </div>
//       <div className="absolute lg:left-5 left-10 bottom-11 w-1/2 flex justify-center ">
//         <img
//           src={bricks}
//           alt="Brick"
//           className="max-w-full h-16 md:h-auto object-contain"
//         />
//       </div>

//       {/* Right Side: Team Illustration */}
//       <div className="absolute right-0 bottom-5 w-1/2 flex justify-center hidden md:block">
//         <img
//           src={trafficConeAndRoadBarrier}
//           alt="traffic Barrier"
//           className="max-w-full h-auto object-contain"
//         />
//       </div>
//       <div className="absolute lg:right-12 -right-3 bottom-1 md:bottom-3 w-1/2 flex justify-end ">
//         <img
//           src={people}
//           alt="Team at Work"
//           className="max-w-full h-48 md:h-auto object-contain"
//         />
//       </div>

//       {/* Text Content (Optional) */}
//       <div className="relative mx-auto w-full text-center max-w-screen-lg z-10">
// <h1 className="text-[26px] lg:text-6xl text-[#249024]  font-bold ">
//   Confidentiality
// </h1>
// <h1 className="text-[26px] lg:text-6xl text-[#249024]  font-bold">
//   Policy
// </h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import bricks from "../../assets/heroSectionImg/bricks.svg";
import towerCrane from "../../assets/heroSectionImg/towerCrane.svg";
import people from "../../assets/heroSectionImg/people.svg";
import trafficConeAndRoadBarrier from "../../assets/heroSectionImg/trafficConeAndRoadBarrier.svg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#E7FFCC]  h-[250px]  lg:h-[393px] flex items-center">
      {/* Left Side: Crane Illustration */}
      <div className="absolute left-14 bottom-0 w-1/2 flex justify-start">
        <img
          src={towerCrane}
          alt="Crane"
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="absolute left-5 bottom-11 w-1/2 flex justify-center">
        <img
          src={bricks}
          alt="Brick"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Side: Team Illustration */}
      <div className="absolute right-0 bottom-5 w-1/2 flex justify-center">
        <img
          src={trafficConeAndRoadBarrier}
          alt="traffic Barrier"
          className="max-w-full h-auto object-contain"
        />
      </div>
      <div className="absolute right-12 bottom-3 w-1/2 flex justify-end">
        <img
          src={people}
          alt="Team at Work"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Text Content (Optional) */}
      <div className="relative mx-auto w-full text-center max-w-screen-lg z-10">
        <h1 className="text-[26px] font-sans lg:text-6xl text-[#249024]  font-bold ">
          Confidentiality
        </h1>
        <h1 className="text-[26px] font-sans lg:text-6xl text-[#249024]  font-bold">
          Policy
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
