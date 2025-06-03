import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      motion={motion}
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="/Images/Professional pic of JD.jpg"
        alt="Jugdutt Joshi"
        className="max-h-[450px] w-auto rounded-full mask-b-to-100% mask-t-from-50% mask-l-from-80% mask-r-from-80%"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[80%] min-h-[600px] w-auto text-[#2a6f97] blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
