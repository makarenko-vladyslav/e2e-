
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Барбершоп Орест | Точна чоловіча стрижка у Львові",
  description: "Персональний барбершоп у Львові. Класична школа, медична стерильність інструментів та 100% відповідальність власника-майстра за результат. Запис онлайн.",
  keywords: ["барбершоп Львів", "чоловіча стрижка", "стрижка бороди", "барбер Орест", "преміум барбершоп"],
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
