import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koloru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className + "relative "}>
        <Navbar />
        <a
          href="mailto:neilinfante120@gmail.com"
          className="fixed right-5 top-5 z-50 block cursor-pointer font-light hover:text-red-300"
        >
          Email @
          <div className="block text-sm underline ">
            neilinfante120@gmail.com
          </div>
        </a>
        <div className="z-40 min-h-screen bg-red-400">{children}</div>
        <Spotlight />
      </body>
    </html>
  );
}
