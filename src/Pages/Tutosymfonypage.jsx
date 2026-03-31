import ProjectDetail from "./Projectdetail";

const project = {
  title: "TutoSymfony",
  subtitle: "Découverte du framework Symfony",
  initials: "TS",
  cat: "Stage 2ème année",
  year: "2025",
  status: "Terminé",
  type: "learn",
  bannerColor: "linear-gradient(135deg, #4c1d95, #6d28d9)",
  tech: ["Symfony", "PHP", "Twig", "Doctrine"],
  aboutLong:
    "TutoSymfony est un projet réalisé durant mon deuxième stage en entreprise. L'objectif était de découvrir et d'apprendre Symfony, l'un des frameworks PHP les plus utilisés en entreprise. À travers des tutoriels guidés et des exercices pratiques, j'ai acquis les bases de Symfony : comprendre son architecture, utiliser ses composants principaux et être capable de structurer une application web de façon autonome.",
  techDetail:
    "L'apprentissage s'est appuyé sur le framework Symfony (PHP). J'ai progressivement découvert l'architecture MVC, le système de routing, la création de contrôleurs, la gestion des entités avec Doctrine ORM et l'affichage des données via les templates Twig.",
  pages: [
    {
      title: "Découverte de Symfony",
      description:
        "Première prise en main de Symfony : installation, configuration et compréhension de l'organisation générale d'un projet. J'ai découvert la structure des dossiers (src, templates, config, public) et appris comment les différentes couches d'une application Symfony communiquent entre elles.",
    },
    {
      title: "Routing et contrôleurs",
      description:
        "Apprentissage du système de routing de Symfony et création de contrôleurs. J'ai compris comment une URL est associée à une méthode de contrôleur et comment retourner une réponse HTTP adaptée.",
    },
    {
      title: "Entités et base de données avec Doctrine",
      description:
        "Apprentissage de Doctrine ORM pour la gestion de la base de données. J'ai appris à créer des entités, générer des migrations et effectuer des opérations CRUD, ce qui m'a permis de comprendre comment Symfony interagit avec une base de données de façon abstraite.",
    },
    {
      title: "Templates Twig",
      description:
        "Découverte du moteur de templates Twig pour l'affichage des données côté front. J'ai appris la syntaxe Twig, le système d'héritage de templates et l'affichage dynamique de données transmises depuis les contrôleurs.",
    },
  ],
};

export default function TutoSymfonyPage() {
  return <ProjectDetail project={project} />;
}