import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Catalogue des données et services du": "Data and Services Catalog of",
      "Data Space Education & Compétences": "Data Space for Education & Skills",
      "Catalogue": "Catalog",
      "Communauté": "Community",
      "Connecter": "Connect",
      "Footer": "Dases Lab is the portal for cataloging services and data from the education & skills data space",
      "Mentions légales": "Terms and Conditions",
      "Contactez-nous" : "Contact us",
      "Recherchez un produit" : "Search for a product by keyword, for example: learning traces",
      "Données ouvertes": "Open Data",
      "Oui": "Yes",
      "Non": "No",
      "Type de licence": "Type of licence",
      "Licence Ouverte v2.0 (Etatlab)": "Open Licence v2.0 (French Etatlab)",
      "Participer à l'offre": "Participate in the catalog offer by adding my service offer",
      "retour": "return",
      "catalogue": "catalog",
      "Détails": "Details",
      "Niveau": "Level",
      "Données personnelles": "Personal Data",
      "Label Gaia-X": "Gaia-X Label",
      "Conditions d’utilisation": "Terms and Conditions",
      "Mon offre": "My offer",
      "Donnez-nous votre avis": "Give us a feedback",
      "Déconnexion": "Log out",
      "Test d'utilisabilité": "Usability test",
      "Donnez-nous votre avis sur": "Give us a feedback on the use of this portail with a form that takes only one minute to complete !",
      "Aidez-nous à améliorer Dases Lab !":"Help us to improve Dases Lab !",
      "Formulaire d'évaluation de l'utilisabilité du portail Dases Lab": "Dases Lab Portal Usability Evaluation Form",
      "Enquête macro": "Macro Survey",
      "plus de temps": "If you have a little more time, and you are part of the EdTech ecosystem, do not hesitate to participate in a more in-depth survey of your daily life, your aspirations and your means. This more macroscopic survey allows us to take the pulse of the sector to better adapt our functional response.",
      "Enquête sur le quotidien, les aspirations et les moyens des EdTechs": "Survey on the daily life, aspirations and means of EdTechs",
      "Communauté Prometheus": "Prometheus Community",
      "Rejoignez la communauté Prometheus-X et ses groupes de travail.": "Join the Prometheus-X community and its working groups.",
      "Vous n'avez encore rien partagé à la communauté": "You haven't shared anything to the community yet",
      "Partager une ressource sur le portail": "Share a ressource on the portal",
      "Fermer": "Close",
      "Obtenez votre laissez-passer": "Get your verifiable credential",
      "DasesLab met en relation": "DasesLab connects humans and businesses, not public keys. We need to know who is behind this public key to allow you to publish and use resources on the portal",
      "Votre nom": "Your family name",
      "Votre prénom": "Your first name",
      "Votre courriel professionnel": "Your professional email",
      "Nom de votre organisation": "Name of your organization",
      "Adresse de votre organisation": "Your organization's address",
      "Je ne suis pas le représentant légal de l'organisation": "I am not the legal representative of the organization",
      "Nom du représentant légal": "Name of legal representative",
      "Courriel du représentant légal": "Email of the legal representative",
      "Je consens à rejoindre DasesLab, et m’engage à respecter sa": "I agree to join DasesLab, and undertake to respect its ",
      "charte d'utilisation": "terms of use",
      "Votre laissez-passer est créé": "Your verifiable credential is created",
      "Vous pouvez maintenant vous connecter sur la page d'accueil": "You can now log in on the homepage",
      "Retourner sur le Portail": "Return to the Portal",
      "Vous pouvez télécharger votre laissez-passer pour le conserver en local": "You can download your verifiable credential to keep it locally",
      "Télécharger votre laissez-passer": "Download your verifiable credential"


    }
  },
  fr: {
    translation: {
      "Catalogue des données et services du": "Catalogue des données et services du",
      "Data Space Education & Compétences": "Data Space Éducation & Compétences",
      "Catalogue": "Catalogue",
      "Communauté": "Communauté",
      "Connecter": "Connecter",
      "Footer": "Dases Lab est le portail de catalogage des services et données du data space éducation & compétences",
      "Mentions légales": "Mentions légales",
      "Contactez-nous": "Contactez-nous",
      "Recherchez un produit" : "Recherchez un produit par mot-cle, par exemple : traces d'apprentissage",
      "Données ouvertes": "Données ouvertes",
      "Oui": "Oui",
      "Non": "Non",
      "Type de licence": "Type de licence",
      "Licence Ouverte v2.0 (Etatlab)": "Licence Ouverte v2.0 (Etatlab)",
      "Participer à l'offre": "Participer à l'offre de catalogue en ajoutant mon offre de services",
      "retour": "retour",
      "catalogue": "catalogue",
      "Détails": "Détails",
      "Niveau": "Niveau",
      "Données personnelles": "Données Personnelles",
      "Label Gaia-X": "Label Gaia-X",
      "Conditions d’utilisation": "Conditions d’utilisation",
      "Mon offre": "Mon offre",
      "Donnez-nous votre avis": "Donnez-nous votre avis",
      "Déconnexion": "Déconnexion",
      "Test d'utilisabilité": "Test d'utilisabilité",
      "Donnez-nous votre avis sur": "Donnez-nous votre avis sur l'utilisabilité du service à l'aide d'un formulaire qui ne prend qu'une toute petite minute à remplir !",
      "Aidez-nous à améliorer Dases Lab !": "Aidez-nous à améliorer Dases Lab !",
      "Formulaire d'évaluation de l'utilisabilité du portail Dases Lab": "Formulaire d'évaluation de l'utilisabilité du portail Dases Lab",
      "Enquête macro": "Enquête macro",
      "plus de temps": "Si vous avez un peu plus de temps, et que vous faites partie de l'écosystème des EdTechs, n'hésitez pas à participer à une enquête plus approfondie sur votre quotidien, vos aspirations et vos moyens. Cette enquête, plus macroscopique, nous permet de prendre le pouls de la filière pour mieux adapter notre réponse fonctionnelle.",
      "Enquête sur le quotidien, les aspirations et les moyens des EdTechs": "Enquête sur le quotidien, les aspirations et les moyens des EdTechs",
      "Communauté Prometheus": "Communauté Prometheus",
      "Rejoignez la communauté Prometheus-X et ses groupes de travail": "Rejoignez la communauté Prometheus-X et ses groupes de travail.",
      "Vous n'avez encore rien partagé à la communauté": "Vous n'avez encore rien partagé à la communauté",
      "Partager une ressource sur le portail": "Partager une ressource sur le portail",
      "Fermer": "Fermer",
      "Obtenez votre laissez-passer": "Obtenez votre laissez-passer",
      "DasesLab met en relation": "DasesLab met en relation des humains et des entreprises, pas des clés publiques. Nous avons besoin de savoir qui se cache derrière cette clé publique pour vous permettre de publier et utiliser des ressources sur le portail",
      "Votre nom": "Votre nom",
      "Votre prénom": "Votre prénom",
      "Votre courriel professionnel": "Votre courriel professionnel",
      "Nom de votre organisation": "Nom de votre organisation",
      "Adresse de votre organisation": "Adresse de votre organisation",
      "Je ne suis pas le représentant légal de l'organisation": "Je ne suis pas le représentant légal de l'organisation",
      "Nom du représentant légal": "Nom du représentant légal",
      "Courriel du représentant légal": "Courriel du représentant légal",
      "Je consens à rejoindre DasesLab, et m’engage à respecter sa": "Je consens à rejoindre DasesLab, et m’engage à respecter sa ",
      "charte d'utilisation": "charte d'utilisation",
      "Votre laissez-passer est créé": "Votre laissez-passer est créé",
      "Vous pouvez maintenant vous connecter sur la page d'accueil": "Vous pouvez maintenant vous connecter sur la page d'accueil",
      "Retourner sur le Portail": "Retourner sur le Portail",
      "Vous pouvez télécharger votre laissez-passer pour le conserver en local": "Vous pouvez télécharger votre laissez-passer pour le conserver en local",
      "Télécharger votre laissez-passer": "Télécharger votre laissez-passer"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;