import CertificateText from "./CertificateText";
import CertificateTop from "./CertificateTop";
import AllCertificate from "./AllCertificate";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varients";

const CertificateMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        motion={motion}
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificateText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <CertificateTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-[#00b4d8] lg:block sm:hidden"></div>
      <AllCertificate />
    </div>
  );
};

export default CertificateMain;
