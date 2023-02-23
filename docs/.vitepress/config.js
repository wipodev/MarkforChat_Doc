export default {
  title: "WipoDev",
  titleTemplate: "WipoDev | :title",
  description:
    "aplicación minimalista que te permite comunicarte con personas en WhatsApp sin necesidad de tener su número de teléfono guardado en tu libreta de contactos",
  lastUpdated: true,
  base: "/markforchat/",
  head: [["link", { rel: "icon", href: "/markforchat/logo.svg", type: "image/svg" }]],
  themeConfig: {
    siteTitle: "",
    logo: "/logo-main.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/wipodev" }],
  },
  locales: {
    root: {
      label: "English",
      lan: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "https://wipodev.com" },
          { text: "Mark for Chat", link: "/" },
          { text: "APP Web", link: "/appweb/" },
          { text: "Privacy Policy", link: "/privacy/" },
        ],
        footer: {
          message: "Disclaimer: This app is not affiliated with WhatsApp Inc.",
          copyright: 'Copyright © 2023-present <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
    es: {
      label: "Spanish",
      lan: "es",
      link: "/es/",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "https://wipodev.com/es/" },
          { text: "Mark for Chat", link: "/es/" },
          { text: "APP Web", link: "/es/appweb/" },
          { text: "Políticas de Privacidad", link: "/es/privacy/" },
        ],
        footer: {
          message: "Descargo de responsabilidad: esta aplicación no está afiliada a WhatsApp Inc.",
          copyright: 'Copyright © 2023-presente <a href="https://github.com/wipodev">WipoDev</a>',
        },
      },
    },
  },
};
