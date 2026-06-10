import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

const title = "Евгений Чесноков — C++/Qt разработчик";
const description =
  "Senior C++/Qt разработчик из Санкт-Петербурга. Специализируюсь на QML и UI/UX. Контрибьютор KDE.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Reveal-on-scroll скрывает секции до прихода JS — без него показываем сразу */}
        <noscript>
          <style>{`[data-reveal]{opacity:1}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
