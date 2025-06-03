import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const SingleCertificate = ({ experience }) => {
  return (
    <motion.div
      motion={motion}
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[450px] md:w-[240px] sm:h-auto sm:w-full border-2 border-[#0077b6] border-dashed rounded-2xl m-12 px-5 py-4"
    >
      <p className="font-bold text-[#0077b6]">{experience.job}</p>
      <p className="text-[#00b4d8]">{experience.company}</p>
      <p className="text-[#caf0f8]">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleCertificate;
