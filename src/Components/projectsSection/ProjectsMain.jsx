import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const projects = [
  {
    name: "Youtube Clone",
    year: "Mar2023",
    align: "right",
    image: "/Images/youtube-clone-img.jpg",
    link: "https://github.com/Jugdutt/youtube-clone",
  },
  {
    name: "Hosptial Mangement System",
    year: "Sept2024",
    align: "left",
    image: "/Images/HMS-img.webp",
    link: "https://github.com/Jugdutt/HospitalManagementSystem",
  },
  {
    name: "Flappy Bird",
    year: "Jan2024",
    align: "right",
    image: "/Images/Flappy-Bird-img.jpg",
    link: "https://github.com/Jugdutt/Flappy-Bird",
  },
  {
    name: "Clinic Management System",
    year: "Mar2025",
    align: "left",
    image: "/Images/CMS-img.png",
    link: "https://github.com/Jugdutt/hms",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        motion={motion}
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              Image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
