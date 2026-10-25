"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Tim Kami", href: "/team" },
  { label: "Kontak", href: "/contact" },
];

export default function Navbar() {
  // Mengambil URL halaman saat ini untuk menentukan navigasi aktif
  const pathname = usePathname();
  // Menyimpan status buka/tutup menu navigasi di perangkat mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo dan nama kafe */}
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-icon">D</span>
          <span className="brand-name">Dorayemon Café</span>
        </Link>

        {/* Tombol (hamburger) untuk tutup buka navigasi di layar kecil */}
        <button
          className="hamburger"
          type="button"
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu navigasi */}
        <nav
          className={`nav-menu ${menuOpen ? "menu-open" : ""}`}
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => {
            // Tentuin apakah tautan sesuai dengan halaman yang sedang dibuka
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                // Mengubah status menu agar hamburger bisa membuka dan menutup navigasi
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}