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
      "Participer à l'offre": "Participate in the catalog offer by adding my service offer"


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
      "Participer à l'offre": "Participer à l'offre de catalogue en ajoutant mon offre de services"
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