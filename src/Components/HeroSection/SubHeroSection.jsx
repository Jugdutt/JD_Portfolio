import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-white text-white flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-gradient-to-b from-[#03045e] to-[#003566]">
      <p className="md:block sm:hidden">Fast Learner</p>
      <p className="md:block sm:hidden">Team Work</p>
      <p>Details Master</p>
    </div>
  );
};

export default SubHeroSection;
