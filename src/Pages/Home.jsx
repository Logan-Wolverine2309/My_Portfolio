import { AboutSection } from "../Componet/AboutSection";
import { ContactSection } from "../Componet/ContactSection";
import { Footer } from "../Componet/Footer";
import { HeroSection } from "../Componet/HeroSection";
import { Navbar } from "../Componet/Navbar";
import { ProjectSection } from "../Componet/ProjectSection";
import { SkillSection } from "../Componet/SkillSection";
import { StarBackground } from "../Componet/StarBackground";
import {ThemeToggle} from "../componet/ThemeToggle";



export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
          <ThemeToggle/>

      {/* Background Effects */}
      <StarBackground/>

      {/* Navbar */}
        <Navbar/>

      { /* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>

      { /* Footer */}
      <Footer/>
    </div>
  );
};