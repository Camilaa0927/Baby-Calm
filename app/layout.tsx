import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteShell from "./components/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BabyCalm — El sonido del amor de mamá",
  description:
    "Conoce BabyCalm: una almohada suave con dispositivo de sonido, pensada para acompañar los momentos de calma de tu bebé.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full"><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
