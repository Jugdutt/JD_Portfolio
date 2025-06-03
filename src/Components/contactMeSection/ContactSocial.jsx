import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://github.com/Jugdutt" Icon={FiGithub} />
      <SingleContactSocial
        link="https://www.instagram.com/jugdutt.joshi/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/jugdutt-joshi-311a2b26b/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
