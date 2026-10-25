import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="/" className="footer-brand">
          Dorayemon Café
        </Link>

        <p className="footer-description">
          Sehangat dorayaki, seseru petualangan.
          Tempat menikmati sajian favorit dan momen kebersamaan.
        </p>

        <nav
          className="footer-links"
          aria-label="Navigasi footer"
        >
          <Link href="/">Beranda</Link>
          <Link href="/about">Tentang Kami</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/team">Tim Kami</Link>
          <Link href="/contact">Kontak</Link>
        </nav>

        <p className="footer-copyright">
          © 2026 Dorayemon Café. Proyek website company profile.
        </p>
      </div>
    </footer>
  );
}