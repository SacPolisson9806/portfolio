import { useState } from "react";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";

/* ============================================================
   CONFIG — Projets
============================================================ */

const PROJECTS_PRO = [
  {
    id: 1,
    title: "DriveOne",
    subtitle: "Site de location automobile",
    description:
      "Site de location automobile réalisé dans le cadre de l'épreuve E5 du BTS SIO, option SLAM. Intègre un CRUD complet, des filtres, tris et gestion d'utilisateurs.",
    aboutLong:
      "DriveOne est une plateforme de location automobile développée dans le cadre de l'épreuve E5 du BTS SIO option SLAM. Elle permet aux utilisateurs de consulter un catalogue de véhicules variés (citadines, berlines, SUV, utilitaires...), de filtrer selon leurs besoins et de réserver en ligne. Le site propose deux niveaux d'accès : visiteur pour parcourir le catalogue, et utilisateur connecté pour réserver, louer ou mettre en vente un véhicule. Une interface administrateur permet de gérer le parc, les réservations et les comptes. L'objectif est de proposer une solution complète, flexible et sécurisée pour la gestion de locations automobiles.",
    features: [
      "Mode visiteur et mode utilisateur connecté",
      "Catalogue de véhicules avec filtres et tris",
      "Réservation et location en ligne",
      "Mise en vente de véhicules entre utilisateurs",
      "Interface administrateur pour gérer le parc et les comptes",
    ],
    techDetail:
      "DriveOne repose sur une architecture full-stack structurée en couches. Le front-end est développé en Angular, communiquant avec le back-end via une API REST. Le back-end est construit en C# avec .NET, organisé en contrôleurs, services et DTO. La base de données relationnelle est gérée avec HeidiSQL.",
    techFeatures: [
      "Front-end Angular avec routing et composants",
      "API REST en C# / .NET",
      "Architecture en couches (contrôleurs, services, DTO)",
      "Base de données relationnelle gérée via HeidiSQL",
      "Authentification et gestion des rôles utilisateurs",
    ],
    tech: ["Angular", "C#", ".NET", "HeidiSQL"],
    link: "#",
    github: "#",
    year: "2026",
    status: "En cours",
    initials: "D1",
    cat: "Développement Web",
    catClass: "cat-web",
    bannerColor: "linear-gradient(135deg, #1976d2, #1565c0)",
    route: "/Pages/Driveonepage",
  },
  {
    id: 2,
    title: "ESport Manager",
    subtitle: "Gestion d'équipes e-sport",
    description:
      "Application de gestion d'équipes e-sport réalisée dans le cadre de l'épreuve E5 du BTS SIO, option SLAM. Gestion des joueurs, staff, sponsors et palmarès.",
    aboutLong:
      "ESport Manager est une application web de gestion d'organisations e-sport, développée dans le cadre de l'épreuve E5 du BTS SIO option SLAM. Elle permet à un administrateur de gérer l'intégralité d'une structure e-sport : les équipes et leurs membres, le staff technique, les sponsors partenaires ainsi que le palmarès des compétitions. Chaque équipe dispose d'un dashboard dédié offrant une vue complète sur toutes les informations de l'organisation.",
    features: [
      "Gestion des équipes et de leurs membres",
      "Suivi des joueurs, managers et staff",
      "Gestion des sponsors et partenaires",
      "Historique et palmarès des compétitions",
      "Dashboard administrateur par équipe",
      "CRUD complet sur toutes les sections",
    ],
    techDetail:
      "ESport Manager utilise React pour le front-end avec un routing multi-pages. Le back-end est développé en PHP avec une API REST, et les données sont stockées dans une base MySQL. Le style est entièrement géré en CSS pur avec des styles inline pour les valeurs dynamiques.",
    techFeatures: [
      "Front-end React avec routing et composants",
      "API REST en PHP",
      "Base de données MySQL",
      "CSS pur sans framework",
      "Architecture CRUD complète",
      "Dashboard admin dynamique",
    ],
    tech: ["React", "PHP", "MySQL", "CSS"],
    link: "#",
    github: "#",
    year: "2026",
    status: "En cours",
    initials: "EM",
    cat: "Application",
    catClass: "cat-app",
    bannerColor: "linear-gradient(135deg, #388e3c, #2e7d32)",
    route: "/Pages/Esportpage",
  },
  {
    id: 3,
    title: "Portfolio Développeur",
    subtitle: "Portfolio moderne",
    description:
      "Site personnel développé en React et CSS pur. Présente mon parcours, mes projets, mes compétences et ma veille technologique.",
    aboutLong:
      "Ce portfolio est ma vitrine personnelle en tant que développeur web. Il a pour objectif de présenter de façon claire et complète qui je suis, ce que je sais faire et ce que j'ai réalisé. On y retrouve mon parcours académique et professionnel, mes projets avec leurs détails techniques, mes compétences informatiques, transversales et linguistiques, ainsi qu'une veille technologique régulière. Il s'adresse aussi bien aux recruteurs qu'aux professionnels souhaitant en savoir plus sur mon profil. Ce portfolio évolue au fil de ma progression et de mes nouveaux projets.",
    features: [
      "Présentation du parcours académique et des stages",
      "Showcase interactif des projets réalisés",
      "Section compétences avec graphiques animés",
      "Veille technologique",
      "Navigation fluide entre toutes les pages",
      "Design responsive adapté à tous les écrans",
    ],
    techDetail:
      "Ce portfolio est développé entièrement en React avec un routing géré par React Router. Le style est écrit en CSS pur dans un fichier global centralisé, sans aucun framework CSS externe. Le projet est bundlé avec Vite pour des performances optimales au développement comme en production. L'architecture repose sur des composants réutilisables, des données séparées du JSX sous forme de tableaux de configuration, et des styles inline pour les valeurs dynamiques.",
    techFeatures: [
      "React + React Router pour la navigation SPA",
      "CSS global centralisé sans framework",
      "Vite comme bundler",
      "Composants réutilisables (Layout, Navbar...)",
      "Données séparées du JSX (tableaux de config)",
      "Animations CSS et IntersectionObserver",
    ],
    tech: ["React", "CSS", "Vite", "React Router"],
    link: "#",
    github: "#",
    year: "2026",
    status: "En cours",
    initials: "PF",
    cat: "Portfolio",
    catClass: "cat-design",
    bannerColor: "linear-gradient(135deg, #6d28d9, #5b21b6)",
    route: "/Projects",
  },
  {
    id: 4,
    title: "Personnage",
    subtitle: "Découverte du PHP en stage",
    description:
      "Projet réalisé lors de mon premier stage en entreprise, permettant de découvrir et pratiquer les bases du développement PHP à travers la création et la gestion de personnages.",
    aboutLong:
      "Personnage est un projet développé durant mon premier stage en entreprise l'année dernière. Il avait pour objectif de me faire découvrir le langage PHP de manière concrète et progressive. À travers ce projet, j'ai appris à structurer du code PHP, à manipuler des données et à comprendre les bases de la programmation web côté serveur. Ce projet m'a permis de poser les premières bases solides en développement back-end et de mieux comprendre le fonctionnement d'une application web.",
    features: [
      "Création et gestion de personnages",
      "Découverte de la syntaxe PHP",
      "Manipulation de données",
      "Apprentissage de la programmation back-end",
      "Structuration du code PHP",
    ],
    techDetail:
      "Ce projet est entièrement développé en PHP pur, sans framework. Il m'a permis de comprendre les fondamentaux du langage : variables, fonctions, tableaux, boucles, et manipulation de données côté serveur.",
    techFeatures: [
      "PHP pur sans framework",
      "Manipulation de variables et tableaux",
      "Fonctions et logique back-end",
      "Structure de projet web basique",
    ],
    tech: ["PHP"],
    link: "#",
    github: "#",
    year: "2024",
    status: "Terminé",
    initials: "PN",
    cat: "Stage 1ère année",
    catClass: "cat-web",
    bannerColor: "linear-gradient(135deg, #0f172a, #1e3a5f)",
    route: "/Pages/Personnagepage",
  },
  {
    id: 5,
    title: "TutoSymfony",
    subtitle: "Découverte du framework Symfony",
    description:
      "Projet réalisé lors de mon deuxième stage en entreprise cette année, permettant de découvrir le framework Symfony à travers des tutoriels et des mises en pratique progressives.",
    aboutLong:
      "TutoSymfony est un projet réalisé durant mon deuxième stage en entreprise cette année. Il avait pour objectif de me faire découvrir Symfony, l'un des frameworks PHP les plus utilisés en entreprise. À travers des tutoriels guidés et des exercices pratiques, j'ai appris à structurer une application web avec Symfony, à utiliser ses composants principaux et à comprendre le fonctionnement d'un framework MVC moderne.",
    features: [
      "Découverte du framework Symfony",
      "Apprentissage via tutoriels guidés",
      "Mise en pratique des concepts Symfony",
      "Compréhension de l'architecture MVC",
      "Utilisation des composants Symfony",
    ],
    techDetail:
      "Ce projet est basé sur le framework Symfony (PHP). Il m'a permis de comprendre l'architecture MVC, le système de routing, les contrôleurs, les entités Doctrine et les templates Twig.",
    techFeatures: [
      "Framework Symfony (PHP)",
      "Architecture MVC",
      "Routing et contrôleurs",
      "Entités et Doctrine ORM",
      "Templates Twig",
    ],
    tech: ["Symfony", "PHP", "Twig", "Doctrine"],
    link: "#",
    github: "#",
    year: "2025",
    status: "Terminé",
    initials: "TS",
    cat: "Stage 2ème année",
    catClass: "cat-app",
    bannerColor: "linear-gradient(135deg, #4c1d95, #6d28d9)",
    route: "/Pages/Tutosymfonypage",
  },
];

const PROJECTS_PERSO = [
  {
    id: 7,
    title: "HubJeuxReact",
    subtitle: "Hub de mini-jeux multijoueur",
    description:
      "Site de jeux en ligne développé en React regroupant plusieurs mini-jeux : Pendu, Snake, Course de voiture, Sudoku, Quiz, Chiffre mystère, Code Cracker, Cemantix et Arrow Rush. Système de points, d'expérience et de quêtes par jeu.",
    aboutLong:
      "HubJeuxReact est un hub de mini-jeux développé en React, pensé pour proposer une expérience ludique variée au sein d'une même plateforme. On peut y jouer à plusieurs jeux différents : Pendu, Snake, Course de voiture, Sudoku, Quiz, Chiffre mystère, Code Cracker, Cemantix et Arrow Rush. Le site intègre un système de progression avec des points d'expérience et des quêtes propres à chaque jeu, ce qui encourage les joueurs à revenir et à progresser. L'objectif à terme est de permettre le multijoueur, bien que cette fonctionnalité ne soit pas encore implémentée. Ce projet mêle ma passion pour les jeux vidéo et le développement web.",
    features: [
      "9 mini-jeux : Pendu, Snake, Course de voiture, Sudoku, Quiz, Chiffre mystère, Code Cracker, Cemantix, Arrow Rush",
      "Système de points d'expérience par jeu",
      "Système de quêtes et objectifs à accomplir",
      "Multijoueur prévu (en cours de développement)",
      "Interface hub centralisée pour accéder à tous les jeux",
      "Progression et récompenses pour motiver les joueurs",
    ],
    techDetail:
      "HubJeuxReact est développé entièrement en React avec un routing géré par React Router. Chaque jeu est un composant indépendant. Le système de points et de quêtes est géré via le state React et persisté en base de données HeidiSQL. Le style est en CSS pur. Le projet est bundlé avec Vite.",
    techFeatures: [
      "React + React Router pour la navigation",
      "Composants indépendants par jeu",
      "Gestion de l'état global (points, quêtes, XP)",
      "Base de données HeidiSQL pour la persistance",
      "CSS pur sans framework",
      "Vite comme bundler",
      "Architecture modulaire et extensible",
    ],
    tech: ["React", "CSS", "Vite", "React Router", "HeidiSQL"],
    link: "#",
    github: "#",
    year: "2026",
    status: "En cours",
    initials: "HJ",
    cat: "Jeux & Loisirs",
    catClass: "cat-design",
    bannerColor: "linear-gradient(135deg, #0ea5e9, #0284c7)",
    route: "/Pages/Hubjeuxpage",
  },
];

/* ============================================================
   ICÔNES
============================================================ */

function ExternalLinkIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function DownArrowIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
    </svg>
  );
}

/* ============================================================
   MODALE
============================================================ */

function ProjectModal({ project, onClose }) {
  const [tab, setTab] = useState("about");

  return (
    <div className="pm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="pm-box">

        {/* Bannière */}
        <div className="pm-banner" style={{ background: project.bannerColor }}>
          <div className="pm-banner-initials">{project.initials}</div>
          <div className="pm-banner-bottom">
            <div className="pm-banner-badges">
              {project.cat && (
                <span className={`pm-badge-cat ${project.catClass}`}>{project.cat}</span>
              )}
              {project.year && (
                <span className="pm-badge-year">{project.year}</span>
              )}
            </div>
            <h2 className="pm-title">{project.title || "—"}</h2>
            {project.subtitle && <p className="pm-subtitle">{project.subtitle}</p>}
          </div>
          <button className="pm-close" onClick={onClose}><CloseIcon /></button>
        </div>

        {/* Onglets */}
        <div className="pm-tabs">
          <button className={`pm-tab${tab === "about" ? " active" : ""}`} onClick={() => setTab("about")}>
            <InfoIcon /> À propos
          </button>
          <button className={`pm-tab${tab === "tech" ? " active" : ""}`} onClick={() => setTab("tech")}>
            <CodeIcon /> Technique
          </button>
          <button className={`pm-tab${tab === "apercu" ? " active" : ""}`} onClick={() => setTab("apercu")}>
            <ImageIcon /> Aperçus
          </button>
        </div>

        {/* Contenu */}
        <div className="pm-body">

          {tab === "about" && (
            <div>
              <h3 className="pm-section-title">À propos de ce projet</h3>
              <p className="pm-text">
                {project.aboutLong || project.description || "Description à venir."}
              </p>
              {Array.isArray(project.features) && project.features.length > 0 && (
                <>
                  <h3 className="pm-section-title" style={{ marginTop: "20px" }}>Fonctionnalités</h3>
                  <ul className="pm-features">
                    {project.features.map((f, i) => (
                      <li key={i} className="pm-feature-item">
                        <span className="pm-feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {tab === "tech" && (
            <div>
              {project.techDetail && (
                <>
                  <h3 className="pm-section-title">Architecture technique</h3>
                  <p className="pm-text" style={{ marginBottom: "20px" }}>{project.techDetail}</p>
                </>
              )}
              <h3 className="pm-section-title">Stack utilisée</h3>
              {Array.isArray(project.tech) && project.tech.length > 0 ? (
                <div className="pm-tech-grid" style={{ marginBottom: "20px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="pm-tech-badge">{t}</span>
                  ))}
                </div>
              ) : (
                <p className="pm-text" style={{ color: "#9ca3af", marginBottom: "20px" }}>Stack à renseigner.</p>
              )}
              {Array.isArray(project.techFeatures) && project.techFeatures.length > 0 && (
                <>
                  <h3 className="pm-section-title">Points techniques</h3>
                  <ul className="pm-features">
                    {project.techFeatures.map((f, i) => (
                      <li key={i} className="pm-feature-item">
                        <span className="pm-feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {tab === "apercu" && (
            <div>
              {Array.isArray(project.images) && project.images.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Aperçu ${i + 1}`}
                      style={{ width: "100%", borderRadius: "10px", border: "1px solid #e5e7eb" }}
                    />
                  ))}
                </div>
              ) : (
                <div className="pm-apercu">
                  <div className="pm-apercu-placeholder">
                    <span className="pm-apercu-icon">🖼</span>
                    <p className="pm-apercu-text">Aperçus à venir</p>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pm-footer">
          {project.route ? (
            <Link to={project.route} className="btn-filled" style={{ fontSize: "14px", padding: "12px 24px" }}>
              <ExternalLinkIcon size={15} /> Accéder au site →
            </Link>
          ) : (
            <a href={project.link} className="btn-filled" style={{ fontSize: "14px", padding: "12px 24px" }}>
              <ExternalLinkIcon size={15} /> Accéder au site →
            </a>
          )}
          <a href={project.github} className="pm-github-btn">
            <GithubIcon /> Voir le code
          </a>
        </div>

      </div>
    </div>
  );
}

/* ============================================================
   CARD
============================================================ */

function ProjectCard({ project, onOpen }) {
  return (
    <div className="ed-card">
      <div className="ed-card-img-wrap" style={{ background: project.bannerColor || "#f3f4f6" }}>
        <span className="ed-card-initials">{project.initials}</span>
        {project.cat && <span className={`ed-card-cat ${project.catClass}`}>{project.cat}</span>}
        {project.year && <span className="ed-card-year">{project.year}</span>}
      </div>
      <div className="ed-card-body">
        <h3 className="ed-card-title">
          {project.title || <span style={{ color: "#d1d5db" }}>Titre à venir</span>}
        </h3>
        <p className="ed-card-desc">
          {project.description || <span style={{ color: "#d1d5db" }}>Description à venir.</span>}
        </p>
        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div className="ed-card-tags">
            {project.tech.map((t) => (
              <span key={t} className="ed-card-tag">{t}</span>
            ))}
          </div>
        )}
        <div className="ed-card-footer">
          <span className="ed-card-link" style={{ cursor: "pointer" }} onClick={() => onOpen(project)}>
            Voir le projet <ExternalLinkIcon />
          </span>
          <a href={project.github} className="ed-card-github">
            <GithubIcon /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION
============================================================ */

function ProjectSection({ num, title, subtitle, projects, onOpen }) {
  return (
    <section className="ed-section">
      <div className="ed-section-inner">
        <div className="ed-section-header">
          <div className="ed-section-left">
            <span className="ed-section-num">{num}</span>
            <div>
              <h2 className="ed-section-title">{title}</h2>
              <p className="ed-section-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="ed-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE PRINCIPALE
============================================================ */

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      {/* Hero */}
      <section className="hero">
        <div className="blob-right" />
        <div className="blob-left" />
        <div className="hero-content">
          <h1 className="hero-title">Mes projets réalisés</h1>
          <p className="hero-subtitle">
            Découvrez mes projets professionnels et personnels, mettant en avant mes
            compétences et ma passion pour le développement web.
          </p>
          <div className="bounce"><DownArrowIcon /></div>
        </div>
      </section>

      {/* Professionnels */}
      <ProjectSection
        num="01"
        title="Projets Professionnels"
        subtitle="Des solutions complètes réalisées dans le cadre du BTS SIO, option SLAM."
        projects={PROJECTS_PRO}
        onOpen={setSelected}
      />

      {/* Personnels */}
      <ProjectSection
        num="02"
        title="Projets Personnels"
        subtitle="Des créations originales explorant de nouvelles idées et technologies."
        projects={PROJECTS_PERSO}
        onOpen={setSelected}
      />

    </Layout>
  );
}