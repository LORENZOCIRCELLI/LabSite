import { useState } from "react";

const leadership = [
  { name: "Otávio", role: "Coordenador do curso", photo: "otavio.png" },
  { name: "Prof. Me. Fernando Perez", role: "Responsável pelo grupo", photo: "Fernando.png" },
];

const members = [
  { name: "Lorenzo Calabrese Circelli", role: "Supervisor", photo: "Lorenzo.png" },
  { name: "Hugo França", role: "Integrante", photo: "Hugo.png" },
  { name: "Nicolas Giussani Vieira", role: "Integrante", photo: "Nicolas.png" },
  { name: "Gabriel Monteiro", role: "Integrante", photo: "Gabriel.png" },
  { name: "Igor Palazzo", role: "Integrante", photo: "Igor.png" },
];

function GroupPhoto({ photo, name }: { photo: string; name: string }) {
  const [unavailable, setUnavailable] = useState(false);
  return <div className="group-photo">{unavailable
    ? <div className="group-photo-placeholder" role="img" aria-label={`Foto de ${name} em breve`}><span>Foto em breve</span></div>
    : <img src={`/photos/${photo}`} alt={name} loading="lazy" onError={() => setUnavailable(true)} />
  }</div>;
}

export default function GroupMembers() {
  return (
    <section id="grupo" className="group-section lab-container section-space" aria-labelledby="group-title">
      <div className="section-heading">
        <div><p className="eyebrow">Quem faz o LIRA</p><h2 id="group-title">Nosso grupo</h2></div>
        <p>As pessoas por trás das ideias, dos experimentos e do trabalho cotidiano do laboratório.</p>
      </div>
      <div className="group-portraits">
        <div className="group-leadership">
          {leadership.map((person) => <figure className="group-leader" key={person.photo}>
            <GroupPhoto photo={person.photo} name={person.name} />
            <figcaption><h3>{person.name}</h3><p className="technical-label">{person.role}</p></figcaption>
          </figure>)}
        </div>
        <div className="group-members-grid">
          {members.map((member) => <figure key={member.name}>
            <GroupPhoto photo={member.photo} name={member.name} />
            <figcaption><h3>{member.name}</h3><p className="technical-label">{member.role}</p></figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  );
}
