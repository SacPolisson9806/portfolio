import { Link } from "react-router-dom";
import { Layout } from "./Layout";

const SKILLS = [
  { category: "Frontend",           techs: ["React", "Angular", "JavaScript", "JSX", "Vite", "HTML/CSS"], color: "#1976d2", bg: "#e3f0fc" },
  { category: "Backend",            techs: ["Node.js", "C#", "PHP"],                                       color: "#388e3c", bg: "#e8f5e9" },
  { category: "Outils & Plateformes", techs: ["VS Code", "Visual Studio", "Git/GitHub", "MongoDB", "HeidiSQL", "Netlify", "Laragon", "Modelio", "Looping"], color: "#1565c0", bg: "#e8eaf6" },
];

const CARDS = [
  { to: "/parcours",   label: "Parcours",    cta: "En savoir plus",    description: "Découvrez mon évolution professionnelle et académique, les étapes clés qui ont forgé mon expertise.",      color: "#1976d2", bg: "#e3f0fc" },
  { to: "/projects",   label: "Projets",     cta: "Voir les projets",  description: "Explorez mes réalisations professionnelles et personnelles, des idées transformées en solutions concrètes.", color: "#388e3c", bg: "#e8f5e9" },
  { to: "/Competence", label: "Compétences", cta: "Mes compétences",   description: "Découvrez les compétences techniques développées et perfectionnées à travers chaque défi.",                color: "#1565c0", bg: "#e8eaf6" },
];

const ABOUT_PARAGRAPHS = [
  "Étudiant en BTS SIO avec option SLAM, mon parcours a débuté avec une passion pour la création de jeux vidéo. Recherchant une formation spécialisée sans opportunités adaptées autour de moi, j'ai orienté mes études vers le BAC SIO avec les options RISC et ARED.",
  "Le BTS SIO a été un tournant décisif pour moi. En première année, j'ai découvert les fondamentaux de la programmation avec HTML, CSS et C#. Partant de zéro, ce début a été exigeant mais ma passion pour le code m'a permis de progresser.",
  "La deuxième année a apporté son lot de défis. C'est à travers l'acharnement et la persévérance que j'ai réussi à surmonter les obstacles et à continuer ma progression.",
  "Aujourd'hui, je continue mon apprentissage du développement web, avec une nette préférence pour le front-end où je peux allier l'aspect technique et la créativité visuelle.",
  "Au-delà du BTS SIO, mon objectif est de construire une carrière solide autour du code et de la création d'expériences numériques.",
];

function ArrowIcon({ color = "currentColor" }) {
  return (
    <svg width="16" height="16" fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
    </svg>
  );
}

function BoltIcon({ color }) {
  return (
    <svg width="22" height="22" fill="none" stroke={color} strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function SectionTitle({ title, barColor, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <h2 className="section-title">{title}</h2>
      <div className={`section-bar section-bar-${barColor}`} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="blob-right" />
        <div className="blob-left" />
        <div className="hero-content">
          <h1 className="hero-title">Enzo Leparoux</h1>
          <p className="hero-subtitle">Développeur Web & Créateur Digital</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-filled">Voir mes Projets <ArrowIcon color="#fff" /></Link>
            <Link to="/veille"   className="btn-outline">Veille Technologique <ArrowIcon color="#1976d2" /></Link>
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="section-white">
        <div className="container">
          <SectionTitle title="À propos de moi" barColor="blue" />
          {ABOUT_PARAGRAPHS.map((text, i) => <p key={i} className="paragraph">{text}</p>)}
        </div>
      </section>

      {/* ── CONNAISSANCES ── */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Mes Connaissances" barColor="green" subtitle="Les technologies et langages que j'ai appris et développés" />
          <div className="skills-grid">
            {SKILLS.map(({ category, techs, color, bg }) => (
              <div key={category} className="skill-card">
                <h3 className="skill-card-title">{category}</h3>
                <div className="skill-tags">
                  {techs.map((tech) => (
                    <span key={tech} className="tag" style={{ color, background: bg }}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="cta-title">Prêt à découvrir mon univers?</h2>
          <p className="cta-text">
            Explorez mon <strong style={{ color: "#1976d2" }}>parcours</strong>,{" "}
            mes <strong style={{ color: "#388e3c" }}>projets</strong> et mes{" "}
            <strong style={{ color: "#1565c0" }}>compétences</strong>.
          </p>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="section">
        <div className="container-wide">
          <div className="cards-grid">
            {CARDS.map(({ to, label, cta, description, color, bg }) => (
              <Link key={to} to={to} className="card-link">
                <div className="card-icon" style={{ background: bg }}>
                  <BoltIcon color={color} />
                </div>
                <h3 className="card-title">{label}</h3>
                <p className="card-desc">{description}</p>
                <span style={{ fontSize: "14px", fontWeight: "600", color, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  {cta} <ArrowIcon color={color} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEILLE ── */}
      <section className="section-white">
        <div className="container">
          <SectionTitle title="Veille Technologique" barColor="blue" />
          <p className="paragraph" style={{ marginBottom: "32px" }}>
            Dans un monde technologique en constante évolution, la veille est essentielle.
            Je m'engage à rester à l'avant-garde des tendances, des nouvelles frameworks et
            des meilleures pratiques qui façonnent l'avenir du développement web.
          </p>
          <Link to="/veille" className="veille-card">
            <div className="veille-icon"><BoltIcon color="#7c3aed" /></div>
            <h3 className="card-title">Dernières Tendances Technologiques</h3>
            <p className="card-desc">
              Plongez dans mes analyses et découvertes sur les technologies émergentes,
              les tendances du marché et les innovations qui redéfinissent l'écosystème du développement web.
            </p>
            <span style={{ fontSize: "14px", fontWeight: "600", color: "#7c3aed", display: "inline-flex", alignItems: "center", gap: "4px" }}>
              Découvrir la veille <ArrowIcon color="#7c3aed" />
            </span>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
