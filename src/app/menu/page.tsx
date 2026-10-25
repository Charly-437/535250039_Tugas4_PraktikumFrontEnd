import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Dorayaki Keju",
    description:
      "Dorayaki lembut dengan isian keju yang gurih dan creamy dalam setiap gigitan.",
    image: "/images/menu/dorayaki-keju.jpg",
  },
  {
    name: "Dorayaki Matcha",
    description:
      "Dorayaki dengan isian matcha yang khas, memadukan rasa manis dan aroma teh hijau.",
    image: "/images/menu/dorayaki-matcha.jpg",
  },
  {
    name: "Dorayaki Original",
    description:
      "Dorayaki klasik dengan tekstur lembut dan isian kacang merah yang manis.",
    image: "/images/menu/dorayaki.jpg",
  },
  {
    name: "Dorayaki Cokelat",
    description:
      "Dorayaki lembut dengan isian cokelat yang manis dan cocok untuk pencinta cokelat.",
    image: "/images/menu/dorayaki-coklat.jpg",
  },
  {
    name: "Nasi Kari",
    description:
      "Nasi hangat dengan kuah kari gurih dan kaya rempah, cocok untuk menemani waktu makan.",
    image: "/images/menu/curry.jpg",
  },
  {
    name: "Omurice",
    description:
      "Nasi berbumbu yang disajikan dengan telur lembut, menghadirkan hidangan khas Jepang yang menggugah selera.",
    image: "/images/menu/omurice.jpg",
  },
  {
    name: "Matcha",
    description:
      "Minuman matcha dengan cita rasa teh hijau yang khas untuk menemani waktu bersantai.",
    image: "/images/menu/matcha.jpg",
  },
];

export default function MenuPage() {
  return (
    <main>
      <section className="section menu-preview">
        <div className="section-content">
          <p className="section-label">MENU DORAYEMON CAFÉ</p>

          <h2>Temukan Menu Favoritmu</h2>

          <p className="section-description">
            Dari hidangan gurih hingga dorayaki dengan
            berbagai pilihan rasa, nikmati sajian favorit
            yang siap menemani waktu santaimu di
            Dorayemon Café.
          </p>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
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
            href="/"
            className="button button-primary menu-button"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}
