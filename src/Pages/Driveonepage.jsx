import ProjectDetail from "./Projectdetail";

const project = {
  title: "DriveOne",
  subtitle: "Site de location automobile",
  initials: "D1",
  cat: "Développement Web",
  year: "2026",
  status: "En cours",
  bannerColor: "linear-gradient(135deg, #1976d2, #1565c0)",
  tech: ["Angular", "C#", ".NET", "HeidiSQL"],
  aboutLong:
    "DriveOne est une plateforme de location automobile développée dans le cadre de l'épreuve E5 du BTS SIO option SLAM. Elle permet aux utilisateurs de consulter un catalogue de véhicules variés, de filtrer selon leurs besoins et de réserver en ligne, mais aussi de gérer leurs propres locations, que ce soit les véhicules qu'ils ont mis en location ou ceux qu'ils ont eux-mêmes loués. Le site propose deux niveaux d'accès : visiteur pour parcourir le catalogue, et utilisateur connecté pour réserver, louer ou mettre en vente un véhicule. Une interface administrateur permet de gérer le parc, les réservations et les comptes.",
  techDetail:
    "DriveOne repose sur une architecture full-stack structurée en couches. Le front-end est développé en Angular, communiquant avec le back-end via une API REST en C# / .NET, organisé en contrôleurs, services et DTO. La base de données relationnelle est gérée avec HeidiSQL.",
  pages: [
    {
      image: "/images/pagesconnexiondriveone.png",
      title: "Page de connexion",
      description:
        "La page de connexion permet à l'utilisateur de s'authentifier avec ses identifiants ou de continuer en tant que visiteur. Le visiteur accède uniquement au catalogue de véhicules sans pouvoir effectuer de location, tandis que l'utilisateur connecté bénéficie de l'ensemble des fonctionnalités de la plateforme.",
    },
    {
      image: "/images/pagesaccueildriveone.png",
      title: "Page d'accueil",
      description:
        "La page d'accueil constitue le point central de DriveOne. Elle donne accès au catalogue pour les visiteurs et les utilisateurs, à la location de voiture pour les utilisateurs connectés, ainsi qu'au tableau de bord personnel pour gérer ses locations. Une barre de navigation permet d'accéder aux différentes sections du site. La page affiche également les véhicules les plus loués en temps réel.",
    },
    {
      image: "/images/pagescataloguedriveone.png",
      title: "Catalogue de véhicules",
      description:
        "Le catalogue affiche tous les véhicules disponibles avec leurs caractéristiques (type, prix, disponibilité). L'utilisateur peut filtrer par type de véhicule, trier par prix et rechercher un modèle précis. Chaque carte véhicule dispose d'un bouton Détail pour consulter la fiche complète, ainsi que d'un bouton Louer accessible uniquement aux utilisateurs connectés — le visiteur ne voit que le bouton Détail.",
    },
    {
      image: "/images/pagedetaildriveone.png",
      title: "Fiche véhicule",
      description:
        "Chaque véhicule dispose d'une fiche détaillée avec ses photos, ses caractéristiques techniques et son tarif.",
    },
    {
      image: "/images/pageslocationdriveone.png",
      title: "Espace utilisateur",
      description:
        "L'espace utilisateur permet de gérer l'ensemble de ses locations depuis un tableau de bord personnel : suivi des véhicules mis en location par l'utilisateur, historique et gestion des véhicules qu'il a lui-même loués, ainsi que la mise en vente d'un véhicule personnel.",
    },
    {
      image: null,
      title: "Interface administrateur",
      description:
        "Le panneau d'administration permet de gérer l'ensemble du parc automobile, de suivre les réservations, de valider ou refuser des demandes et de gérer les comptes utilisateurs.",
    },
    {
      image: "/images/pageajoutcardriveone.png",
      title: "Mise en vente d'un véhicule",
      description:
        "Accessible uniquement aux utilisateurs connectés, cette page permet de mettre en location un véhicule personnel en remplissant un formulaire détaillé : informations techniques (marque, modèle, année, kilométrage, type de carburant, boîte de vitesses), photos du véhicule, tarif journalier et disponibilités. Une fois soumis, l'annonce est visible dans le catalogue pour les autres utilisateurs.",
    },
    {
      image: "/images/pagelouedriveone.png",
      title: "Location d'une voiture",
      description:
        "Accessible uniquement aux utilisateurs connectés, cette page permet de choisir la durée de location d'une voiture.",
    },
  ],
};

export default function DriveOnePage() {
  return <ProjectDetail project={project} />;
}