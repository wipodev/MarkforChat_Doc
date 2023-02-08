export default {
  title: "Mark for Chat",
  titleTemplate: ":title",
  description: "Just playing around.",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Mark for Chat",
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/AJ-Wi" }],
  },
  locales: {
    root: {
      label: "Spanish",
      lan: "es",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/" },
          { text: "APP Web", link: "/appweb/" },
          { text: "Equipo", link: "/team/" },
        ],
        footer: {
          message: "Descargo de responsabilidad: esta aplicación no está afiliada a WhatsApp Inc.",
          copyright: 'Copyright © 2023-presente <a href="https://github.com/AJ-Wi">AJ-Wi</a>',
        },
      },
    },
    en: {
      label: "English",
      lan: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "APP Web", link: "/en/appweb/" },
          { text: "Team", link: "/en/team/" },
        ],
        footer: {
          message: "Disclaimer: This app is not affiliated with WhatsApp Inc.",
          copyright: 'Copyright © 2023-present <a href="https://github.com/AJ-Wi">AJ-Wi</a>',
        },
      },
    },
  },
};
