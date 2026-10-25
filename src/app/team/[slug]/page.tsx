import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../../../data/team";

type TeamDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Menyediakan daftar slug anggota untuk pembuatan halaman detail secara statis
export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamDetailPage({
  params,
}: TeamDetailProps) {
  // Mengambil slug dari URL untuk menentukan anggota yang ditampilkan
  const { slug } = await params;

  const member = teamMembers.find(
    (item) => item.slug === slug
  );

  // Menampilkan halaman 404 jika slug tidak cocok dengan data anggota
  if (!member) {
    notFound();
  }

  return (
    <main>
      <section className="section team-detail-section">
        <div className="section-content">
          <p className="section-label">KENALI TIM KAMI</p>

          <h2>Berkenalan dengan {member.name}</h2>

          <div className="team-detail-layout">
            <div className="team-detail-photo">
              <Image
                src={member.image}
                alt={`Foto ${member.name}`}
                width={400}
                height={400}
                priority
              />
            </div>

            <div className="team-detail-content">
              <h2>{member.name}</h2>

              <p className="team-detail-role">
                {member.role}
              </p>

              <p className="team-detail-description">
                {member.profile}
              </p>

              <Link
                href="/team"
                className="button button-primary"
              >
                Kembali ke Tim Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
