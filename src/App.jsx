import React from "react";
import NavbarMain from "./Components/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import HeroGradient from "./Components/HeroSection/HeroGradient";
import SubHeroSection from "./Components/HeroSection/SubHeroSection";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import SkillsMain from "./Components/SkillsSection/SkillsMain";
import SubSkills from "./Components/SkillsSection/SubSkills";
import CertificateMain from "./Components/certificateSection/CertificateMain";
import ProjectsMain from "./Components/projectsSection/ProjectsMain";
import ContactMeMain from "./Components/contactMeSection/ContactMeMain";
import FooterMain from "./Components/footerSection/FooterSection";

const App = () => {
  return (
    <>
      <main className="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <CertificateMain />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </main>
    </>
  );
};

export default App;
