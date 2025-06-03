import { Link } from "react-scroll";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Certifications", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-6 text-white font-bold text-center sm:text-md lg:text-xl lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:bg-[#001D3D] sm:bg-cyan backdrop-blur-lg sm:w-full py-4 md:py-0">
      {Links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-[#FFD60A] transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-white w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
