export default {
  title: "Mark for Chat",
  titleTemplate: ":title",
  description: "Just playing around.",
  lastUpdated: true,
  base: "/markforchat_docs/",
  themeConfig: {
    siteTitle: "Mark for Chat",
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/AJ-Wi" }],
  },
  locales: {
    root: {
      label: "English",
      lan: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "APP Web", link: "/appweb/" },
        ],
        footer: {
          message: "Disclaimer: This app is not affiliated with WhatsApp Inc.",
          copyright: 'Copyright © 2023-present <a href="https://github.com/AJ-Wi">AJ-Wi</a>',
        },
      },
    },
    es: {
      label: "Spanish",
      lan: "es",
      link: "/es/",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          { text: "APP Web", link: "/es/appweb/" },
        ],
        footer: {
          message: "Descargo de responsabilidad: esta aplicación no está afiliada a WhatsApp Inc.",
          copyright: 'Copyright © 2023-presente <a href="https://github.com/AJ-Wi">AJ-Wi</a>',
        },
      },
    },
  },
};
