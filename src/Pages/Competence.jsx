import { useState, useEffect, useRef } from "react";
import { Layout } from "./Layout";

/* ============================================================
   DATA
============================================================ */

const TECH_SKILLS = [
  { name: "HTML",       pct: 85, barColor: "#1976d2" },
  { name: "CSS",        pct: 85, barColor: "#1976d2" },
  { name: "JavaScript", pct: 50, barColor: "#f97316" },
  { name: "React",      pct: 65, barColor: "#1976d2" },
  { name: "Angular",    pct: 35, barColor: "#1976d2" },
  { name: "C#",         pct: 60, barColor: "#eab308" },
  { name: "SQL",        pct: 60, barColor: "#eab308" },
  { name: "PHP",        pct: 50, barColor: "#1976d2" },
];

const LEVELS = [
  { label: "Bleu",   desc: "HTML, CSS, React, Angular, PHP", color: "#1976d2", bg: "#e3f0fc", icon: "🔵" },
  { label: "Orange", desc: "JavaScript",                     color: "#f97316", bg: "#fff7ed", icon: "🟠" },
  { label: "Jaune",  desc: "C#, SQL",                        color: "#eab308", bg: "#fefce8", icon: "🟡" },
];

const TRANSVERSAL = [
  { icon: "👥", title: "Collaboration",   desc: "Savoir s'intégrer à l'équipe, échanger ses idées et participer aux réunions. Capacité à informer et écouter ses collègues efficacement." },
  { icon: "🔄", title: "Adaptabilité",    desc: "Capacité à s'adapter à de nouveaux outils, logiciels, et méthodes de travail d'une entreprise." },
  { icon: "📹", title: "Relationnel",     desc: "Capacité à créer des liens, participer aux moments informels et entretenir une bonne ambiance." },
  { icon: "📋", title: "Organisation",    desc: "Capacité à s'organiser et mener ses tâches de manière autonome, en cherchant les informations nécessaires et en posant des questions quand il le faut." },
  { icon: "⚡", title: "Implication",     desc: "Fort investissement dans les projets entrepris, avec la volonté de mener les tâches jusqu'au bout et de produire un travail soigné." },
  { icon: "📈", title: "Persévérance",    desc: "Capacité à essayer plusieurs approches et à continuer à chercher des solutions jusqu'à parvenir à un résultat satisfaisant." },
  { icon: "💡", title: "Esprit critique", desc: "Capacité à analyser les besoins et à suggérer des améliorations pertinentes." },
  { icon: "🎨", title: "Créativité",      desc: "Capacité à imaginer des idées originales, souvent de manière spontanée, avec l'envie de les tester et de les concrétiser." },
  { icon: "🔍", title: "Curiosité",       desc: "Envie d'apprendre et d'explorer de nouveaux outils, capacité à chercher des ressources et solutions pour concrétiser des idées originales." },
];

const LANGUAGES = [
  {
    flag: "🇫🇷",
    name: "Français",
    sub: "Langue maternelle",
    level: "Courant",
    pct: 100,
    color: "#1976d2",
    bg: "#e3f0fc",
    desc: "Expression écrite et orale parfaite, langue utilisée au quotidien.",
  },
  {
    flag: "🇬🇧",
    name: "Anglais",
    sub: "Langue secondaire",
    level: "Débutant",
    pct: 10,
    color: "#f97316",
    bg: "#fff7ed",
    desc: "Notions de base, compréhension simple à l'écrit.",
  },
];

/* ============================================================
   HELPERS
============================================================ */



function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ============================================================
   HERO — nouveau contenu, même style
============================================================ */

function HeroSection() {
  const BADGES = [
    { text: "Front-end",  top: "16%", left: "10%",  color: "#ede9fe", textColor: "#6d28d9" },
    { text: "Back-end",   top: "38%", left: "18%",  color: "#fef9c3", textColor: "#854d0e" },
    { text: "React ⚛",   top: "10%", right: "14%", color: "#e0f2fe", textColor: "#0369a1" },
    { text: "SQL 🗄",     top: "36%", right: "10%", color: "#fce7f3", textColor: "#be185d" },
    { text: "Logique",    top: "58%", left: "8%",   color: "#dcfce7", textColor: "#15803d" },
    { text: "Créativité", top: "58%", right: "6%",  color: "#ffedd5", textColor: "#c2410c" },
  ];

  return (
    <section className="comp-hero">
      {BADGES.map((b, i) => (
        <span
          key={i}
          className="comp-hero-badge"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            background: b.color,
            color: b.textColor,
          }}
        >
          {b.text}
        </span>
      ))}
      <div className="comp-hero-inner">
        <p className="comp-hero-eyebrow">— Mon Profil —</p>
        <h1 className="comp-hero-title">
          Coder, créer,<br />
          <span className="comp-hero-accent">progresser</span>
        </h1>
        <p className="comp-hero-sub">
          Technique · Transversal · Linguistique
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION COMPÉTENCES INFORMATIQUES
============================================================ */

function TechSection() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const maxPct = Math.max(...TECH_SKILLS.map((s) => s.pct));

  return (
    <section className="comp-section comp-section-white">
      <div className="comp-inner" ref={ref}>
        <h2 className="comp-section-title">Compétences Informatiques</h2>
        <p className="comp-section-sub">
          Étudiant en développement informatique, j'ai acquis des compétences dans différents langages de
          programmation au cours de ma formation, pour créer des sites web modernes et fonctionnels.
        </p>

        {/* Légende niveaux */}
        <div className="comp-levels">
          {LEVELS.map((l) => (
            <div key={l.label} className="comp-level-card" style={{ background: l.bg }}>
              <span className="comp-level-icon">{l.icon}</span>
              <div>
                <div className="comp-level-label" style={{ color: l.color }}>{l.label}</div>
                <div className="comp-level-range">{l.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique */}
        <div className="comp-chart-wrap">
          <div className="comp-chart-yaxis">
            {[100, 80, 60, 40, 20, 0].map((v) => (
              <div key={v} className="comp-chart-ylabel">{v}%</div>
            ))}
          </div>
          <div className="comp-chart-area">
            <div className="comp-chart-grid">
              {[0, 20, 40, 60, 80, 100].map((v) => (
                <div key={v} className="comp-chart-gridline" style={{ bottom: `${v}%` }} />
              ))}
            </div>
            <div className="comp-chart-bars">
              {TECH_SKILLS.map((s) => (
                <div key={s.name} className="comp-bar-col">
                  <div className="comp-bar-wrap">
                    <div
                      className="comp-bar"
                      style={{
                        height: visible ? `${(s.pct / maxPct) * 100}%` : "0%",
                        background: s.barColor,
                      }}
                    />
                  </div>
                  <div className="comp-bar-label" style={{ color: s.barColor }}>
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION TRANSVERSALES
============================================================ */

function TransversalSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="comp-section">
      <div className="comp-inner">
        <h2 className="comp-section-title">Compétences Transversales</h2>
        <p className="comp-section-sub">
          Des compétences personnelles et professionnelles me permettant de m'adapter et de m'investir
          efficacement dans différents types de projets.
        </p>
        <div className="comp-transversal-grid">
          {TRANSVERSAL.map((item) => (
            <div
              key={item.title}
              className={`comp-trans-card${hovered === item.title ? " active" : ""}`}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="comp-trans-icon-wrap">
                <span className="comp-trans-icon">{item.icon}</span>
              </div>
              <h3 className={`comp-trans-title${hovered === item.title ? " active" : ""}`}>
                {item.title}
              </h3>
              <p className="comp-trans-desc">{item.desc}</p>
              {hovered === item.title && <div className="comp-trans-bar" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION LANGUES
============================================================ */

function LanguagesSection() {
  const ref = useRef(null);
  const visible = useInView(ref);

  return (
    <section className="comp-section comp-section-white">
      <div className="comp-inner" ref={ref}>
        <h2 className="comp-section-title">Compétences Linguistiques</h2>
        <p className="comp-section-sub">
          Français courant et anglais en cours d'apprentissage.
        </p>
        <div className="lang-grid">
          {LANGUAGES.map((l) => (
            <div key={l.name} className="lang-card" style={{ borderTop: `4px solid ${l.color}` }}>
              {/* En-tête */}
              <div className="lang-card-header">
                <span className="lang-flag">{l.flag}</span>
                <div className="lang-card-info">
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-sub">{l.sub}</span>
                </div>
                <span className="lang-level-badge" style={{ background: l.bg, color: l.color }}>
                  {l.level}
                </span>
              </div>

              {/* Description */}
              <p className="lang-desc">{l.desc}</p>

              {/* Barre de progression */}
              <div className="lang-bar-wrap">
                <div className="lang-bar-header">
                  <span className="lang-bar-label">Niveau</span>
                  <span className="lang-bar-pct" style={{ color: l.color }}>{l.pct}%</span>
                </div>
                <div className="lang-track">
                  <div
                    className="lang-fill"
                    style={{
                      width: visible ? `${l.pct}%` : "0%",
                      background: `linear-gradient(90deg, ${l.color}99, ${l.color})`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE PRINCIPALE
============================================================ */

export default function Competence() {
  return (
    <Layout>
      <HeroSection />
      <TechSection />
      <TransversalSection />
      <LanguagesSection />
    </Layout>
  );
}