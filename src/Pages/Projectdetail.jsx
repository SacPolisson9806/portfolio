import { Layout } from "./Layout";
import { Link } from "react-router-dom";

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

/* ============================================================
   BLOC IMAGE + TEXTE — mode site
============================================================ */

function PageBlock({ image, title, description, reverse = false, index }) {
  return (
    <div className="pd-block" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <div className="pd-block-img">
        {image ? (
          <img src={image} alt={title} className="pd-img" />
        ) : (
          <div className="pd-img-placeholder">
            <span className="pd-img-placeholder-num">{String(index + 1).padStart(2, "0")}</span>
            <span className="pd-img-placeholder-text">Image à venir</span>
          </div>
        )}
      </div>
      <div className="pd-block-text">
        <span className="pd-block-num">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="pd-block-title">{title}</h3>
        <p className="pd-block-desc">{description}</p>
      </div>
    </div>
  );
}

/* ============================================================
   BLOC TEXTE SEUL — mode apprentissage
============================================================ */

function LearnBlock({ title, description, index }) {
  return (
    <div className="pd-learn-block">
      <span className="pd-block-num">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="pd-block-title">{title}</h3>
      <p className="pd-block-desc">{description}</p>
    </div>
  );
}

/* ============================================================
   COMPOSANT PRINCIPAL
============================================================ */

export default function ProjectDetail({ project }) {
  const isLearn = project.type === "learn" || project.pages?.every(p => !p.image);

  return (
    <Layout>

      {/* ── HERO BANNIÈRE ── */}
      <div className="pd-hero" style={{ background: project.bannerColor }}>
        <div className="pd-hero-initials">{project.initials}</div>
        <div className="pd-hero-inner">
          <Link to="/projects" className="pd-back">
            <ArrowLeftIcon /> Retour aux projets
          </Link>
          <div className="pd-hero-badges">
            {project.cat && <span className="pd-hero-cat">{project.cat}</span>}
            {project.year && <span className="pd-hero-year">{project.year}</span>}
            {project.status && <span className="pd-hero-status">{project.status}</span>}
          </div>
          <h1 className="pd-hero-title">{project.title}</h1>
          <p className="pd-hero-subtitle">{project.subtitle}</p>
          <div className="pd-hero-tech">
            {project.tech.map((t) => (
              <span key={t} className="pd-tech-badge">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRÉSENTATION GÉNÉRALE ── */}
      <section className="pd-section pd-section-white">
        <div className="pd-inner">
          <h2 className="pd-section-title">
            {isLearn ? "À propos de cet apprentissage" : "Présentation du projet"}
          </h2>
          <p className="pd-about">{project.aboutLong || project.description}</p>
        </div>
      </section>

      {/* ── PAGES DU SITE ou ÉTAPES D'APPRENTISSAGE ── */}
      <section className="pd-section">
        <div className="pd-inner">
          <h2 className="pd-section-title">
            {isLearn ? "Ce que j'ai appris" : "Les pages du site"}
          </h2>
          <p className="pd-section-sub">
            {isLearn
              ? "Les différentes notions et compétences acquises au fil de l'apprentissage."
              : "Découvrez chaque partie du site expliquée simplement avec ses captures d'écran."}
          </p>

          <div className={isLearn ? "pd-learn-blocks" : "pd-blocks"}>
            {project.pages && project.pages.map((page, i) =>
              isLearn ? (
                <LearnBlock
                  key={i}
                  index={i}
                  title={page.title}
                  description={page.description}
                />
              ) : (
                <PageBlock
                  key={i}
                  index={i}
                  image={page.image}
                  title={page.title}
                  description={page.description}
                  reverse={i % 2 !== 0}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ── STACK TECHNIQUE ── */}
      <section className="pd-section pd-section-white">
        <div className="pd-inner">
          <h2 className="pd-section-title">Stack technique</h2>
          {project.techDetail && (
            <p className="pd-about" style={{ marginBottom: "24px" }}>{project.techDetail}</p>
          )}
          <div className="pd-tech-grid">
            {project.tech.map((t) => (
              <span key={t} className="pd-tech-item">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER LIENS ── */}
      <section className="pd-footer-section">
        <div className="pd-inner pd-footer-inner">
          <Link to="/projects" className="pd-back-btn">
            <ArrowLeftIcon /> Retour aux projets
          </Link>
          <div style={{ display: "flex", gap: "12px" }}>
            {project.link && project.link !== "#" && (
              <a href={project.link} className="btn-filled" target="_blank" rel="noreferrer">
                Voir le site →
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a href={project.github} className="pm-github-btn" target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
            )}
          </div>
        </div>
      </section>

    </Layout>
  );
}