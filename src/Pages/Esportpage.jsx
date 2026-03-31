import ProjectDetail from "./Projectdetail";

const project = {
  title: "ESport Manager",
  subtitle: "Gestion d'équipes e-sport",
  initials: "EM",
  cat: "Application",
  year: "2026",
  status: "En cours",
  bannerColor: "linear-gradient(135deg, #388e3c, #2e7d32)",
  tech: ["React", "PHP", "MySQL", "CSS"],
  aboutLong:
    "ESport Manager est une application web de gestion d'organisations e-sport. Elle permet à un administrateur de gérer l'intégralité d'une structure e-sport : les équipes et leurs membres, le staff technique, les sponsors partenaires ainsi que le palmarès des compétitions. Chaque équipe dispose d'un dashboard dédié offrant une vue complète sur toutes les informations de l'organisation.",
  techDetail:
    "ESport Manager utilise React pour le front-end avec un routing multi-pages. Le back-end est développé en PHP avec une API REST, et les données sont stockées dans une base MySQL. Le style est entièrement géré en CSS pur.",
  pages: [
    {
      image: null,
      title: "Page d'accueil",
      description:
        "La page d'accueil présente la plateforme ESport Manager et permet de naviguer vers les différentes équipes disponibles. Elle affiche une liste des équipes enregistrées avec leur logo et leurs informations principales.",
    },
    {
      image: null,
      title: "Dashboard équipe",
      description:
        "Chaque équipe dispose d'un dashboard centralisé qui affiche toutes les informations de l'organisation : membres, jeux pratiqués, sponsors actifs et derniers résultats en compétition.",
    },
    {
      image: null,
      title: "Gestion des joueurs",
      description:
        "Cette section permet d'ajouter, modifier ou supprimer des joueurs. Chaque joueur a une fiche avec son pseudo, son rôle, son jeu principal et ses informations de contrat.",
    },
    {
      image: null,
      title: "Gestion du staff",
      description:
        "Le staff (managers, coachs, analystes) est géré séparément des joueurs. On peut consulter leur rôle, les jeux qu'ils supervisent et leurs informations de contact.",
    },
    {
      image: null,
      title: "Sponsors & Palmarès",
      description:
        "Les sponsors de l'équipe sont listés avec leurs informations et liens. Le palmarès recense tous les tournois et résultats obtenus par l'équipe au fil du temps.",
    },
  ],
};

export default function ESportPage() {
  return <ProjectDetail project={project} />;
}