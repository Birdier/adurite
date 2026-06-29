import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AduritePRO - Digital Goods Store",
  description: "Online store for buying high quality products quickly.",
};

declare module 'react' {
  interface JSXIntrinsicElements {
    nav: React.HTMLAttributes<HTMLDivElement> & React.AriaAttributes & React.RefAttributes<HTMLDivElement>;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className + "min-h-screen"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

("success");

