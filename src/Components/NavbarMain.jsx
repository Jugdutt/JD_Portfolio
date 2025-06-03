import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { useSelector } from "react-redux";
import NavbarToggler from "./NavbarToggler";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-[#001D3D] items-center p-6 rounded-r-full rounded-l-full border-[#003566] border-[0.5px]">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <motion.div
        motion={motion}
        className="flex lg:hidden sm:block p-6 bg-[#001D3D] items-center justify-center rounded-full border-orange border-[0.5px]"
        initial={{ scale: 1 }}
        animate={{ scale: menuOpen ? 1.2 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavbarToggler />
      </motion.div>
    </nav>
  );
};

export default NavbarMain;
