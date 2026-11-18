const members = [
  { name: "Lorenzo Calabrese Circelli", role: "Supervisor", photo: "Lorenzo.png" },
  { name: "Hugo França", role: "Integrante", photo: "Hugo.png" },
  { name: "Nicolas Giussani Vieira", role: "Integrante", photo: "Nicolas.png" },
  { name: "Gabriel Monteiro", role: "Integrante", photo: "Gabriel.png" },
  { name: "Igor Palazzo", role: "Integrante", photo: "Igor.png" },
];

export default function GroupMembers() {
  return (
    <section id="grupo" className="group-section lab-container section-space" aria-labelledby="group-title">
      <div className="section-heading">
        <div><p className="eyebrow">Quem faz o LIRA</p><h2 id="group-title">Nosso grupo</h2></div>
        <p>As pessoas por trás das ideias, dos experimentos e do trabalho cotidiano do laboratório.</p>
      </div>
      <div className="group-portraits">
        <figure className="group-leader">
          <div className="group-photo"><img src="/photos/Fernando.png" alt="Prof. Me. Fernando Perez" loading="lazy" /></div>
          <figcaption><h3>Prof. Me. Fernando Perez</h3><p className="technical-label">Responsável pelo grupo</p></figcaption>
        </figure>
        <div className="group-members-grid">
          {members.map((member) => (
            <figure key={member.name}>
              <div className="group-photo"><img src={`/photos/${member.photo}`} alt={member.name} loading="lazy" /></div>
              <figcaption><h3>{member.name}</h3><p className="technical-label">{member.role}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
