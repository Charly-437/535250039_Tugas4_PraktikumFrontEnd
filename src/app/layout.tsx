import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";
import "./home.css";
import "./menu/menu.css";
import "./about/about.css";
import "./team/team.css";
import "./team/[slug]/team-detail.css";

import "../components/navbar.css";
import "../components/footer.css";
import "./responsive.css";

export const metadata: Metadata = {
  title: "Dorayemon Café | Sehangat Dorayaki, Seseru Petualangan",
  description:
    "Kenali Dorayemon Café, kafe bertema Doraemon yang menghadirkan dorayaki, minuman, dan camilan dalam suasana penuh imajinasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
  <html lang="id">
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
  );
}