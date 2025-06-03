import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-[#2a6f97] mb-10 selection:bg-fuchsia-300 selection:text-fuchsia-900">
        About Me
      </h2>
      <p className="text-white">
        I am a Full Stack Web Developer with a passion for building web
        applications. I have a strong understanding of front-end and back-end
        development. I am always eager to learn new technology and expand my
        skills.
      </p>
      <button className="border border-[#03045e] rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-[#003566] transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-white">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500 hover:scale-150 hover:shadow-md hover:shadow-[#003566]"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
