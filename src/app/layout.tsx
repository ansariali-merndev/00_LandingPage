import "./globals.css";
import React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
