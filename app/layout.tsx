import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Клінінг Лев — Професійний клінінг у Львові",
  description: "Сервіс професійного прибирання у Львові. Генеральне та післяремонтне прибирання, еко-хімія, фіксована ціна, виїзд за 3 години.",
  keywords: ["клінінг львів", "прибирання квартир львів", "післяремонтне прибирання", "Клінінг Лев"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Onest:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-white antialiased selection:bg-accent selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}