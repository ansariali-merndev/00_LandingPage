import "./globals.css";
import React from "react";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/header/ResponsiveNav";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <section className="mx-2 sm:mx-4 md:mx-12 lg:mx-18">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
