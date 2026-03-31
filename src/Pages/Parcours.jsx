import { Layout } from "./Layout";

const TIMELINE = [
  {
    number: "1", color: "#1976d2",
    title: "BAC SIO (Système d'Information des Organisations)",
    subtitle: "Lycée - 3 ans", period: "2020 - 2023", withLine: true,
    blocks: [
      { color: "blue",   title: "Première année - Classe générale",       text: "Une année générale où j'ai pu explorer différentes options pour déterminer ma spécialisation." },
      { color: "purple", title: "Deuxième et troisième années - ARED",    text: "Spécialisation en ARED (Audio, Réseau et Équipement Domotique). Approfondissement dans des domaines variés." },
    ],
    note: "L'absence d'établissements spécialisés en jeux vidéo m'a poussé à explorer le BAC SIO et ses différentes options.",
  },
  {
    number: "2", color: "#388e3c",
    title: "BTS SIO (Services Informatiques aux Organisations)",
    subtitle: "Études Supérieures - 2 ans", period: "2024 - Maintenant", withLine: false,
    blocks: [
      { color: "blue",   title: "Première année - Les débuts",  text: "Découverte des fondamentaux avec HTML, CSS et C#. Partant de zéro, j'ai progressé grâce à ma passion pour le code." },
      { color: "purple", title: "Deuxième année - Les défis",   text: "Les difficultés se sont multipliées. C'est grâce à la persévérance que j'ai réussi à surmonter les obstacles." },
    ],
    option: "SLAM - Solutions Logicielles et Applications Métier",
    note: "Une option parfaitement alignée avec ma passion pour le développement.",
  },
];

const STAGES = [
  {
    title: "3ème - Collège", subtitle: "Premiers pas en milieu professionnel",
    period: "2018", periodColor: "#1565c0", periodBg: "#e8eaf6",
    accentColor: "#1565c0", accentBg: "#e3f0fc",
    items: [
      { title: "📅 Journée de Découverte — AB6NET",                    text: "Découverte du métier et apprentissage des bases de Photoshop." },
      { title: "🏢 Stage d'Observation — Renault Truck, Bourg-en-Bresse", text: "Fabrication des camions, organisation de l'entreprise, exploration des métiers." },
    ],
  },
  {
    title: "BAC SIO - Lycée", subtitle: "6 stages dans 5 entreprises différentes",
    period: "2020 - 2023", periodColor: "#1976d2", periodBg: "#e3f0fc",
    accentColor: "#1976d2", accentBg: "rgba(25,118,210,0.05)",
    items: [
      { title: "Stage 1 — LDLC",                          text: "Mise en rayon • Conseil client • Vente • Réparation • Gestion des colis" },
      { title: "Stage 2 — Conseil Départemental",         text: "Mise en service des ordinateurs • Installation et configuration des routeurs" },
      { title: "Stage 3 — Préfecture (Service Informatique)", text: "Configuration d'ordinateurs et routeurs • Rangement et étiquetage du matériel" },
      { title: "Stage 4 — BECENSON",                      text: "Mise en place de câbles réseau • Travaux de chantier" },
      { title: "Stage 5 — BECENSON (2ème passage)",        text: "Mise en place de câbles réseau • Travaux de chantier" },
      { title: "Stage 6 — Entreprise de Chantier",        text: "Câbles Ethernet • Installation de data center • Configuration des réseaux" },
    ],
  },
  {
    title: "BTS SIO - Études Supérieures", subtitle: "2 stages en développement",
    period: "2024 - Maintenant", periodColor: "#388e3c", periodBg: "#e8f5e9",
    accentColor: "#388e3c", accentBg: "rgba(56,142,60,0.05)",
    items: [
      { title: "Stage 1 — AB6NET (Développement)",         text: "Premier contact avec le code en entreprise. Découverte des MCD, apprentissage via tutoriels." },
      { title: "Stage 2 — AB6NET (Développement avancé)", text: "Apprentissage de Symfony, application de concepts avancés via tutoriels et projets." },
    ],
  },
];

const CERTIFICATIONS = [
  { icon: "P",     iconFrom: "#60a5fa", iconTo: "#2563eb", title: "Certification PIX",                subtitle: "Certification officielle des compétences numériques",                                                            period: "2026", periodColor: "#1976d2", periodBg: "#e3f0fc" },
  { icon: "ANSSI", iconFrom: "#2563eb", iconTo: "#1e3a8a", title: "Cybersécurité - SECNUM MOOC ANSSI", subtitle: "Certification en cybersécurité par l'Agence Nationale de la Sécurité des Systèmes d'Information", period: "2024", periodColor: "#388e3c", periodBg: "#e8f5e9" },
];

function DownArrowIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

export default function Parcours() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="blob-right" />
        <div className="blob-left" />
        <div className="hero-content">
          <h1 className="hero-title-md">Mon Parcours</h1>
          <p className="hero-subtitle">Un chemin d'apprentissage et de découverte vers ma passion pour le code</p>
          <div className="bounce"><DownArrowIcon /></div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section">
        <div className="container">
          {TIMELINE.map((item) => (
            <div key={item.number} className="timeline-row">
              <div className="timeline-left">
                <div className="timeline-dot" style={{ background: item.color }}>{item.number}</div>
                {item.withLine && <div className="timeline-line" />}
              </div>

              <div className="card" style={{ flex: 1 }}>
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: item.color, margin: 0 }}>{item.subtitle}</p>
                  </div>
                  <span className="badge" style={{ color: item.color, background: `${item.color}1A` }}>{item.period}</span>
                </div>

                {item.blocks.map((block) => (
                  <div key={block.title} className={`block-${block.color}`}>
                    <p className={`block-${block.color}-title`}>{block.title}</p>
                    <p className={`block-${block.color}-text`}>{block.text}</p>
                  </div>
                ))}

                {!item.option && item.note && <p className="note">{item.note}</p>}

                {item.option && (
                  <div className="option-wrap">
                    <p className="option-label">Option choisie :</p>
                    <span className="option-badge">{item.option}</span>
                    {item.note && <p className="note">{item.note}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STAGES ── */}
      <section className="section-white">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "48px" }}>Mes Stages et Expériences</h2>
          {STAGES.map((stage) => (
            <div key={stage.title} className="card" style={{ marginBottom: "32px" }}>
              <div className="card-header">
                <div>
                  <h3 className="card-title">{stage.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>{stage.subtitle}</p>
                </div>
                <span className="badge" style={{ color: stage.periodColor, background: stage.periodBg }}>{stage.period}</span>
              </div>
              {stage.items.map((item) => (
                <div key={item.title} className="stage-item" style={{ background: stage.accentBg, border: `1px solid ${stage.accentColor}33` }}>
                  <p className="stage-item-title" style={{ color: stage.accentColor }}>{item.title}</p>
                  <p className="stage-item-text">{item.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section-white">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "48px" }}>Mes Certifications</h2>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.title} className="card" style={{ marginBottom: "24px" }}>
              <div className="cert-row">
                <div className="cert-left">
                  <div className="cert-icon" style={{ background: `linear-gradient(135deg, ${cert.iconFrom}, ${cert.iconTo})` }}>{cert.icon}</div>
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-subtitle">{cert.subtitle}</p>
                  </div>
                </div>
                <span className="badge" style={{ color: cert.periodColor, background: cert.periodBg }}>{cert.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </Layout>
  );
}
