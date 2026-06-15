import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Прибирання Карпати (E2E) — Професійний клінінг в Івано-Франківську",
  description: "Ідеальна чистота без прихованих платежів. Генеральне, підтримуюче та післяремонтне прибирання з фіксованою ціною та гарантією результату. Замовляйте онлайн!",
  keywords: ["клінінг Івано-Франківськ", "прибирання квартир", "генеральне прибирання", "прибирання після ремонту", "хімчистка меблів", "Прибирання Карпати"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Прибирання Карпати (E2E) — Професійний клінінг",
    description: "Ідеальна чистота без прихованих платежів. Фіксована ціна, професійна техніка Karcher.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-main bg-white antialiased selection:bg-accent/20 selection:text-primary">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
