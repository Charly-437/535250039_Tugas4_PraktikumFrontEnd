import TeamCard from "../../components/TeamCard";
import { teamMembers } from "../../data/team";

export default function TeamPage() {
  return (
    <main>
      <section className="section team-preview">
        <div className="section-content">
          <p className="section-label">KENALI TIM KAMI</p>

          <h2>Berkenalan dengan Tim Dorayemon Café</h2>

          <p className="section-description">
            Di balik setiap sajian dan pengalaman menyenangkan
            di Dorayemon Café, ada tim yang bekerja sama untuk
            memberikan pelayanan terbaik. Kenali anggota tim
            kami dan peran mereka dalam mengembangkan café.
          </p>

          <div className="character-grid">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.slug}
                name={member.name}
                role={member.role}
                image={member.image}
                slug={member.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
