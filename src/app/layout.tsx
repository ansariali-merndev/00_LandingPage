import "./globals.css";
import React from "react";
import { Footer } from "../components/footer/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <p>Header</p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
