import { GoArrowDownRight } from "react-icons/go";

const NavbarBtn = () => {
  const handleHireMeClick = () => {
    window.open("/Jugdutt Joshi.pdf", "_blank");
  };

  return (
    <button
      onClick={handleHireMeClick}
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-[#0066c6] border flex items-center gap-1 bg-gradient-to-r from-[#00bbf9] to-[#00509d] hover:border-[#FFD60A] hover:scale-120 transition-all duration-500"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <GoArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
