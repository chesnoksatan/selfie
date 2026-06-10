import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Hobby from "@/components/Hobby";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Hobby />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
