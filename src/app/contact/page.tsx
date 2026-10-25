export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="section-content">
          <p className="section-label">KONTAK KAMI</p>

          <h2>Hubungi Dorayemon Café</h2>

          <p className="section-description">
            Punya pertanyaan atau ingin mengetahui lebih lanjut
            tentang Dorayemon Café? Silakan hubungi kami melalui
            informasi yang tersedia di bawah ini.
          </p>

          <div className="about-values-grid">
            <div className="about-value-card">
              <h3>Alamat</h3>
              <p>
                Jl. Sakura No. 10, Jakarta, Indonesia
              </p>
            </div>

            <div className="about-value-card">
              <h3>Kontak</h3>
              <p>Telepon: 0812-2345-7890</p>
              <p>Email: dorayemonn@gmail.com</p>
            </div>

            <div className="about-value-card">
              <h3>Jam Operasional</h3>
              <p>Senin – Minggu</p>
              <p>09.00 – 22.00 WIB</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
