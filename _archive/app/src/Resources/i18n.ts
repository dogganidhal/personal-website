import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";


export const localizations: Resource = {
  en: {
    nav: {
      aboutMe: "About me",
      resume: "Resume",
      code: "Code",
      blog: "Blog",
      contact: "Contact",
      flag: "🇺🇸"
    },
    main: {
      jobTitle: "Full-stack software developer",
      aboutTitle: "About"
    },
    about: {

    },
    resume: {
      title: "{{fullName}}'s resume",
      educationSectionTitle: "education",
      experienceSectionTitle: "experience",
      skillsSectionTitle: "skills",
      certificatesSectionTitle: "certificates"
    },
    contact: {
      title: "Contact me",
      caption: `
Want to get in touch ? For professional purposes, or even personal purposes ?
Fill the form below to reach me out, I promise I will respond quickly
        `.trim(),
      nameFieldLabel: "Name",
      nameFieldHelper: "So I know how to call you",
      emailFieldLabel: "Email",
      emailFieldHelper: "So I know how to contact you afterward",
      contentFieldLabel: "Your message",
      submitButtonTitle: "Submit",
    }
  },
  fr: {
    nav: {
      aboutMe: "À propos de moi",
      resume: "CV",
      code: "Code",
      blog: "Blog",
      contact: "Contact",
      flag: "🇫🇷",
    },
    main: {
      jobTitle: "Développeur full-stack",
      aboutTitle: "À propos"
    },
    about: {

    },
    resume: {
      title: "CV de {{fullName}}",
      educationSectionTitle: "Éducation",
      experienceSectionTitle: "Éxperience",
      skillsSectionTitle: "Compétences",
      certificatesSectionTitle: "Certifications"
    },
    contact: {
      title: "Contacter moi",
      caption: `
          Voulez vous me contacter ? Pour des raisons professionnelles, ou même personnelles ?
          Remplissez le formulaire ci-dessous, je vous promets que je vous réponds vite
        `.trim(),
      nameFieldLabel: "Prénom",
      nameFieldHelper: "Pour que sache comment vous appeler",
      emailFieldLabel: "Adresse mail",
      emailFieldHelper: "Pour que je sache comment vous contacter par la suite",
      contentFieldLabel: "Votre message",
      submitButtonTitle: "Envoyer",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: localizations,
    fallbackLng: ['en', 'fr'],
    lng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false
    },
  });