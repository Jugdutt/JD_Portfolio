import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillSM from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          motion={motion}
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
        <div className="sm:hidden lg:block bottom-[50px] absolute left-[50%] -translate-x-[50%]">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
