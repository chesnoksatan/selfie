import { WipBanner } from "@/components/WipBanner";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { StackSection } from "@/components/sections/Stack";
import { HobbySection } from "@/components/sections/Hobby";
import { ContactsSection } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";
import { RevealRoot } from "@/lib/reveal";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;

  return (
    <>
      <WipBanner />
      <ThemeToggle />
      <LocaleSwitcher current={typedLocale} />
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
