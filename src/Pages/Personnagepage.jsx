import ProjectDetail from "./Projectdetail";

const project = {
  title: "Personnage",
  subtitle: "Découverte du PHP en stage",
  initials: "PN",
  cat: "Stage 1ère année",
  year: "2024",
  status: "Terminé",
  type: "learn",
  bannerColor: "linear-gradient(135deg, #0f172a, #1e3a5f)",
  tech: ["PHP", "Bootstrap"],
  aboutLong:
    "Projet réalisé durant mon premier stage pour découvrir PHP. J'ai appris les bases du langage côté serveur : variables, fonctions, tableaux, boucles et traitement de formulaires.",
  techDetail:
    "PHP pur sans framework, avec Bootstrap pour la mise en forme des pages.",
  pages: [
    {
      title: "Création d'un personnage",
      description:
        "Formulaire de création d'un personnage. J'ai appris à récupérer et traiter des données de formulaire en PHP.",
    },
    {
      title: "Affichage des personnages",
      description:
        "Liste des personnages créés. J'ai manipulé des tableaux PHP pour afficher dynamiquement des données.",
    },
    {
      title: "Modification et suppression",
      description:
        "Gestion CRUD basique : modifier ou supprimer un personnage et transmettre des données entre pages en PHP.",
    },
  ],
};

export default function PersonnagePage() {
  return <ProjectDetail project={project} />;
}