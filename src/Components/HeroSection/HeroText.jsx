import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        motion={motion}
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg-text-2xl text-4xl sl-text-xl uppercase text-[#2a6f97]"
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="md:text-2.8rem lg-text-6xl text-3xl sl-text-4xl font-bold font-special text-[#FFD60A]"
      >
        Jugdutt Joshi
      </motion.h1>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A passionate web developer and designer with a strong passion for
        <br />
        building web applications.
      </motion.p>
    </div>
  );
};

export default HeroText;
