import { WipBanner } from "@/components/WipBanner";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { StackSection } from "@/components/sections/Stack";
import { HobbySection } from "@/components/sections/Hobby";
import { ContactsSection } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";
import { RevealRoot } from "@/lib/reveal";

export default function Home() {
  return (
    <>
      <WipBanner />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <HobbySection />
      <ContactsSection />
      <Footer />
      <RevealRoot />
    </>
  );
}
