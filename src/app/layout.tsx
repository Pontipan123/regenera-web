import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Regenera — Futuro Regenerativo",
  description:
    "Organización sin fines de lucro cuyo propósito es que la vida humana tenga un impacto positivo en el planeta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white antialiased">
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
