import "./globals.css";
import React from "react";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/header/ResNav";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Landing Page",
  description: "code and develop by Ansari Ali",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
