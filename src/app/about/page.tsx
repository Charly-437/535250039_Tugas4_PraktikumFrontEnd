import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO TENTANG KAMI */}
      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <p className="about-page-eyebrow">
            ABOUT DORAYEMON CAFÉ
          </p>

          <h1>
            Tempat Cerita Baik dan Rasa Favorit Bertemu
          </h1>

          <p>
            Setiap tempat punya cerita, dan setiap sajian punya cara
            tersendiri untuk menciptakan kenangan. Di Dorayemon Café,
            kami menghadirkan perpaduan camilan favorit, suasana hangat,
            dan sentuhan imajinasi untuk menemani momen sederhana
            menjadi lebih berkesan.
          </p>
        </div>
      </section>

      {/* CERITA DORAYEMON CAFÉ */}
      <section className="about-story section">
        <div className="about-story-layout">
          <div className="about-story-image">
            <Image
              src="/images/doraemon-cafe.jpg"
              alt="Ilustrasi suasana Dorayemon Café"
              width={900}
              height={700}
              sizes="(max-width: 900px) 90vw, 45vw"
              priority
            />
          </div>

          <div className="about-story-content">
            <p className="section-label">CERITA KAMI</p>

            <h2>
              Berawal dari Kecintaan pada Hal Sederhana
            </h2>

            <p>
              Dorayemon Café lahir dari sebuah gagasan sederhana:
              menghadirkan tempat yang membuat orang merasa nyaman
              untuk beristirahat sejenak, menikmati makanan favorit,
              dan berbagi cerita bersama orang-orang terdekat.
              Bagi kami, pengalaman menyenangkan tidak selalu harus
              datang dari sesuatu yang besar. Terkadang, secangkir
              minuman, camilan yang lezat, dan obrolan ringan sudah
              cukup untuk membuat hari terasa lebih baik.
            </p>

            <p>
              Nama Dorayemon Café memadukan inspirasi dorayaki,
              camilan khas Jepang yang dikenal sebagai makanan
              favorit Doraemon, dengan semangat dunia yang penuh
              imajinasi dan petualangan. Perpaduan tersebut menjadi
              dasar identitas kami: sebuah kafe bertema yang ingin
              menghadirkan pengalaman berbeda melalui sajian dan
              suasana yang menyenangkan.
            </p>
          </div>
        </div>
      </section>

      {/* INSPIRASI BRAND */}
      <section className="about-inspiration section">
        <div className="section-content">
          <p className="section-label">INSPIRASI KAMI</p>

          <h2>
            Sentuhan Imajinasi dalam Setiap Kunjungan
          </h2>

          <p className="section-description">
            Dunia Doraemon lekat dengan persahabatan, rasa ingin tahu,
            kreativitas, dan petualangan yang tidak terduga. Semangat
            inilah yang menginspirasi konsep Dorayemon Café. Kami ingin
            membawa sedikit keceriaan dari dunia tersebut ke dalam
            pengalaman menikmati sajian sehari-hari.
          </p>

          <p className="about-inspiration-extra">
            Kami percaya bahwa makanan dan minuman dapat menjadi
            bagian dari pengalaman yang lebih luas. Bukan hanya
            mengenai rasa, tetapi juga suasana ketika menikmatinya,
            percakapan yang menyertainya, dan kenangan kecil yang
            terbentuk setelahnya. Karena itu, Dorayemon Café ingin
            menjadi ruang yang terasa akrab, menyenangkan, dan
            penuh kemungkinan untuk menciptakan cerita baru.
          </p>
        </div>
      </section>

      {/* NILAI-NILAI KAMI */}
      <section className="about-values section">
        <div className="section-content">
          <p className="section-label">YANG KAMI HARGAI</p>

          <h2>Lebih dari Sekadar Tempat Makan</h2>

          <p className="section-description">
            Ada beberapa hal yang menjadi inspirasi kami dalam
            membangun karakter Dorayemon Café dan pengalaman
            yang ingin kami hadirkan bagi para pengunjung.
          </p>

          <div className="about-values-grid">
            <article className="about-value-card">
              <span className="about-value-number">01</span>

              <h3>Rasa yang Menghadirkan Senyum</h3>

              <p>
                Sajian yang menggugah selera adalah bagian penting
                dari pengalaman di kafe. Kami ingin menghadirkan
                pilihan dorayaki, minuman, dan camilan yang dapat
                dinikmati dalam berbagai suasana, dari waktu santai
                hingga momen berkumpul bersama teman.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-number">02</span>

              <h3>Suasana yang Hangat</h3>

              <p>
                Kafe bukan hanya tempat untuk menikmati makanan,
                tetapi juga ruang untuk berhenti sejenak dari
                kesibukan. Kami mengangkat suasana yang ramah
                dan menyenangkan sebagai bagian dari karakter
                Dorayemon Café, agar setiap momen terasa lebih
                dekat dan berkesan.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-number">03</span>

              <h3>Imajinasi Tanpa Batas</h3>

              <p>
                Inspirasi dari dunia Doraemon mengingatkan kami
                bahwa kreativitas dapat membuat hal sederhana
                terasa istimewa. Kami ingin membawa semangat
                tersebut melalui identitas visual, pilihan sajian,
                dan pengalaman bertema yang menyenangkan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISI DAN MISI */}
      <section className="about-vision section">
        <div className="section-content">
          <p className="section-label">ARAH DAN TUJUAN KAMI</p>

          <h2>Visi dan Misi Dorayemon Café</h2>

          <p className="section-description">
            Visi dan misi menjadi gambaran tentang karakter kafe
            yang ingin kami bangun serta pengalaman yang ingin
            kami prioritaskan.
          </p>

          <div className="about-vision-grid">
            <article className="about-vision-card">
              <h3>Visi Kami</h3>

              <p>
                Menjadi kafe bertema yang dikenal melalui perpaduan
                sajian favorit, suasana yang hangat, dan pengalaman
                penuh imajinasi, sehingga setiap kunjungan dapat
                menjadi bagian dari momen yang menyenangkan.
              </p>
            </article>

            <article className="about-vision-card">
              <h3>Misi Kami</h3>

              <p>
                Menghadirkan pilihan makanan dan minuman yang
                menarik, membangun suasana yang ramah, serta
                mengembangkan identitas kafe yang kreatif dan
                konsisten. Kami juga ingin menjadikan Dorayemon
                Café sebagai ruang untuk menikmati waktu,
                berbagi cerita, dan menemukan pengalaman baru.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="about-page-cta">
        <div className="about-page-cta-content">
          <p className="about-page-eyebrow">
            TEMUKAN CERITA FAVORITMU
          </p>

          <h2>
            Setiap Petualangan Punya Rasa yang Berbeda
          </h2>

          <p>
            Sekarang saatnya mengenal lebih dekat sajian dan
            orang-orang di balik Dorayemon Café. Jelajahi pilihan
            menu kami atau berkenalan dengan tim yang menjadi
            bagian dari cerita ini.
          </p>

          <div className="about-page-cta-buttons">
            <Link
              href="/menu"
              className="button button-primary"
            >
              Lihat Menu
            </Link>

            <Link
              href="/team"
              className="button button-secondary"
            >
              Kenali Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}