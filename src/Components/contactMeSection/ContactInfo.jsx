import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start gap-4 text-white">
      <SingleInfo text="jugduttjoshi70@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="7837435883" Image={FiPhone} />
      <SingleInfo text="Ghaziabad, Uttar Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
