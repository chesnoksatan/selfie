import { WipBanner } from "@/components/WipBanner";
// Theme and locale switchers are intentionally hidden from users for now —
// kept in the codebase to be reintroduced once content stabilizes.
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { LocaleSwitcher } from "@/components/LocaleSwitcher";
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
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);

  return (
    <>
      <WipBanner text={dict.wip} />
      {/* <ThemeToggle labels={dict.themeToggle} /> */}
      {/* <LocaleSwitcher current={typedLocale} label={dict.localeSwitcher.label} /> */}
      <HeroSection dict={dict.hero} />
      <AboutSection dict={dict.about} />
      <ExperienceSection dict={dict.experience} locale={typedLocale} />
      <ProjectsSection dict={dict.projects} locale={typedLocale} />
      <StackSection dict={dict.stack} locale={typedLocale} />
      <HobbySection dict={dict.hobby} />
      <ContactsSection dict={dict.contacts} />
      <Footer dict={dict.footer} />
      <RevealRoot />
    </>
  );
}
