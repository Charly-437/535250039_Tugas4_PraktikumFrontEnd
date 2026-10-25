import Image from "next/image";
import Link from "next/link";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";

// Data menu yang ditampilkan sebagai pratinjau di halaman home
const menuItems = [
  {
    name: "Dorayaki Original",
    description:
      "Dorayaki lembut dengan isian kacang merah yang klasik dan lezat.",
    image: "/images/menu/dorayaki.jpg",
  },
  {
    name: "Dorayaki Matcha",
    description:
      "Perpaduan dorayaki lembut dengan cita rasa matcha yang khas.",
    image: "/images/menu/dorayaki-matcha.jpg",
  },
  {
    name: "Dorayaki Cokelat",
    description:
      "Dorayaki dengan isian cokelat yang manis untuk menemani waktu santai.",
    image: "/images/menu/dorayaki-coklat.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-label">COMPANY PROFILE</p>

            <h1>Rasakan Serunya Berpetualang!</h1>

            <p className="hero-description">
              Nikmati kelezatan dorayaki dan beragam sajian
              menarik dalam suasana café yang hangat dan
              menyenangkan bersama Dorayemon Café.
            </p>

            <div className="hero-buttons">
              <Link
                href="/about"
                className="button button-primary"
              >
                Kenali Kami
              </Link>

              <Link
                href="/menu"
                className="button button-secondary"
              >
                Lihat Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section about-preview">
        <div className="section-content">
          <p className="section-label">TENTANG KAMI</p>

          <h2>Kenalan dengan Dorayemon Café</h2>

          <div className="about-layout">
            <div className="about-image">
              <Image
                src="/images/doraemon-dkk.jpg"
                alt="Suasana Dorayemon Café"
                width={600}
                height={450}
              />
            </div>

            <div className="about-content">
              <p>
                Dorayemon Café hadir dengan konsep café
                bernuansa Jepang yang memadukan kelezatan
                dorayaki, pilihan minuman, dan suasana nyaman
                untuk menemani waktu bersantai.
              </p>

              <p>
                Kami percaya bahwa sajian yang menarik,
                pelayanan yang ramah, dan suasana yang
                menyenangkan dapat membuat setiap kunjungan
                terasa lebih berkesan.
              </p>

              <Link
                href="/about"
                className="button button-primary about-button"
              >
                Kenali Kami Lebih Dekat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MENU ANDALAN */}
      <section className="section menu-preview">
        <div className="section-content">
          <p className="section-label">MENU PILIHAN</p>

          <h2>Menu Andalan</h2>

          <p className="section-description">
            Temukan pilihan dorayaki favorit dengan berbagai
            rasa untuk menemani waktu santaimu.
          </p>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article
                className="menu-card"
                key={item.name}
              >
                <div className="menu-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                  />
                </div>

                <div className="menu-card-content">
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/menu"
            className="button button-primary menu-button"
          >
            Lihat Menu
          </Link>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section team-preview">
        <div className="section-content">
          <p className="section-label">TIM KAMI</p>

          <h2>Kenali Tim Dorayemon Café</h2>

          <p className="section-description">
            Di balik pengalaman menyenangkan di Dorayemon
            Café, ada tim yang bekerja sama untuk menghadirkan
            sajian dan pelayanan terbaik bagi pelanggan.
          </p>

          {/* Menampilkan dua anggota pertama sebagai pratinjau tim (doraemon dan nobita) */}
          <div className="character-grid">
            {teamMembers.slice(0, 2).map((member) => (
              <TeamCard
                key={member.slug}
                name={member.name}
                role={member.role}
                image={member.image}
                slug={member.slug}
              />
            ))}
          </div>

          <Link
            href="/team"
            className="button button-primary team-button"
          >
            Lihat Semua Anggota Tim
          </Link>
        </div>
      </section>
    </main>
  );
}
