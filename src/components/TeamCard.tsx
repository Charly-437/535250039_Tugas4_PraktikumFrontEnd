import Image from "next/image";
import Link from "next/link";

// Props untuk mengisi data kartu anggota tim.
// Description bersifat opsional agar kartu dapat digunakan pada home sama halaman tim
type TeamCardProps = {
  name: string;
  role: string;
  image: string;
  slug: string;
  description?: string;
};

export default function TeamCard({
  name,
  role,
  image,
  slug,
  description,
}: TeamCardProps) {
  return (
    <article className="character-card">
      <div className="character-image">
        <Image
          src={image}
          alt={`Foto ${name}`}
          width={400}
          height={280}
        />
      </div>

      <div className="character-info">
        <h3>{name}</h3>

        <p>{role}</p>

        {/* Deskripsi hanya ditampilkan jika diberikan melalui props. */}
        {description && <p>{description}</p>}

        {/* Mengarahkan pengguna ke halaman detail anggota berdasarkan slug */}
        <Link
          href={`/team/${slug}`}
          className="character-link"
        >
          Lihat Profil
        </Link>
      </div>
    </article>
  );
}
