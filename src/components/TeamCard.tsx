import Image from "next/image";
import Link from "next/link";

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

        {description && <p>{description}</p>}

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
