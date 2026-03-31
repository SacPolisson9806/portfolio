import ProjectDetail from "./Projectdetail";

const project = {
  title: "HubJeuxReact",
  subtitle: "Hub de mini-jeux multijoueur",
  initials: "HJ",
  cat: "Jeux & Loisirs",
  year: "2026",
  status: "En cours",
  bannerColor: "linear-gradient(135deg, #0ea5e9, #0284c7)",
  tech: ["React", "CSS", "Vite", "React Router", "HeidiSQL"],
  aboutLong:
    "HubJeuxReact est un hub de mini-jeux développé en React, pensé pour proposer une expérience ludique variée au sein d'une même plateforme. On peut y jouer à 9 jeux différents. Le site intègre un système de progression avec des points d'expérience et des quêtes propres à chaque jeu. L'objectif à terme est de permettre le multijoueur. Ce projet mêle ma passion pour les jeux vidéo et le développement web.",
  techDetail:
    "HubJeuxReact est développé entièrement en React avec React Router. Chaque jeu est un composant indépendant. Le système de points et de quêtes est persisté en base de données HeidiSQL. Le projet est bundlé avec Vite.",
  pages: [
    {
      title: "Hub principal",
      description:
        "La page d'accueil du hub affiche tous les jeux disponibles sous forme de cartes. On peut voir son niveau, ses points d'expérience et ses quêtes en cours. Un clic sur un jeu lance la partie.",
    },
    {
      title: "Jeu — Pendu",
      description:
        "Le classique jeu du pendu où il faut deviner un mot lettre par lettre. Le joueur gagne des points d'expérience selon le nombre d'erreurs et peut débloquer des quêtes liées à ce jeu.",
    },
    {
      title: "Jeu — Snake",
      description:
        "Le jeu Snake où le serpent grandit à chaque nourriture mangée. Plus le score est élevé, plus les points d'XP gagnés sont importants. Des quêtes encouragent à atteindre certains scores.",
    },
    {
      title: "Jeu — Course de voiture",
      description:
        "Un jeu de course où le joueur contrôle une voiture et doit éviter les obstacles. La vitesse augmente progressivement. Des quêtes récompensent la survie sur de longues distances.",
    },
    {
      title: "Jeu — Sudoku",
      description:
        "Le Sudoku classique avec une grille 9x9 à compléter. Plusieurs niveaux de difficulté sont disponibles. Compléter une grille rapporte de l'XP selon le niveau choisi.",
    },
    {
      title: "Jeu — Quiz",
      description:
        "Un quiz avec des questions à choix multiples sur différents thèmes. Le joueur gagne de l'XP pour chaque bonne réponse et peut suivre son score final à la fin de chaque série.",
    },
    {
      title: "Jeu — Chiffre mystère",
      description:
        "Le joueur doit deviner un nombre mystère en recevant des indices (trop grand / trop petit). Moins d'essais il faut, plus les points gagnés sont élevés.",
    },
    {
      title: "Jeu — Code Cracker",
      description:
        "Le joueur doit déchiffrer un code secret en analysant les indices donnés après chaque tentative. Un jeu de logique et de déduction qui récompense la rapidité.",
    },
    {
      title: "Jeu — Cemantix & Arrow Rush",
      description:
        "Cemantix est un jeu de devinette sémantique où le joueur propose des mots proches du mot cible. Arrow Rush est un jeu de réflexes où il faut appuyer sur la bonne direction au bon moment.",
    },
    {
      title: "Système de quêtes & XP",
      description:
        "Chaque jeu possède ses propres quêtes à accomplir. Les quêtes rapportent des points d'expérience et permettent de progresser sur la plateforme.",
    },
  ],
};

export default function HubJeuxPage() {
  return <ProjectDetail project={project} />;
}