import SingleCertificate from "./SingleCertificate";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Ducat Institute",
    date: "2023 - Past",
    responsibilities: [
      "Creating web applications using HTML, CSS and JavaScript.",
      "Developing web applications using React and Redux.",
      "Creating responsive and user friendly web applications.",
      "Working on the performance and optimization of web applications.",
    ],
  },
  {
    job: "Back-End Developer",
    company: "Ducat Institute",
    date: "2023 - 2024",
    responsibilities: [
      "Designing and implementing server-side logic.",
      "Creating and maintaining databases.",
      "Developing APIs and integrating with front-end.",
      "Ensuring security and data protection.",
    ],
  },

  {
    job: "UI/UX Designer",
    company: "SoftCaryons",
    date: "2022 - 2023",
    responsibilities: [
      "Designing and developing visually appealing and user-friendly interfaces.",
      "Creating responsive and adaptive interfaces.",
      "Designing and developing wireframes and prototypes.",
      "Collaborating with developers to implement designs.",
    ],
  },
];

const AllCertificate = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleCertificate experience={experience} />
          {index < experiences.length - 1 ? (
            <motion.div
              motion={motion}
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-[#f5cb5c] lg:block sm:hidden animate-pulse" />
            </motion.div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default AllCertificate;
