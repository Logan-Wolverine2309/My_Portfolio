import { AboutSection } from "../Componets/AboutSection";
import { HeroSection } from "../Componets/HeroSection";
import { Navbar } from "../Componets/Navbar";
import { StarBackground } from "../Componets/StarBackground";
import { ThemeToggle } from "../Componets/ThemeToggle";
import { ProjectSection } from "../Componets/ProjectSection";
import { ContactSection } from "../Componets/ContactSection";
import { SkillSection } from "../Componets/SkillSection";
import { Footer } from "../Componets/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection/>
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};