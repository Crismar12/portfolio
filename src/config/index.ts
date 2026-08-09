import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francis Esculpi — Backend & Fullstack Developer",
  author: "Francis Esculpi",
  description:
    "Desarrolladora backend y fullstack. Me especializo en la creación de APIs RESTful y el desarrollo de soluciones integrales. Mi pila tecnológica incluye Python, Java (Spring Boot), Node.js y tecnologías frontend modernas como React y TypeScript",
  lang: "es",
  siteLogo: "/francis-big.jpg",
  navLinks: [
    { text: "Experiencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/francis-esculpi-9018752ab/" },
    { text: "Github", href: "https://github.com/Crismar12" },
  ],
  socialImage: "/francis-big.jpg",
  canonicalURL: "https://portfolio-peach-ten-y2v80mbyty.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Francis Esculpi",
    specialty: "Backend & Fullstack Developer",
    summary:
      "Desarrolladora backend y fullstack. Me especializo en la creación de APIs RESTful y el desarrollo de soluciones integrales. Mi pila tecnológica incluye Python, Java (Spring Boot), Node.js y tecnologías frontend modernas como React y TypeScript",
    email: "printza9.08@gmail.com",
  },
  experience: [
    {
      company: "Ética Administraciones",
      position: "Junior Full-stack Developer",
      startDate: "Enero 2026",
      endDate: "Mayo 2026",
      summary: [
        "Construcción de una Progressive Web App (PWA) para la gestión operativa y administrativa de comunidades urbanísticas.",
      ],
    },
    {
      company: "Darki",
      position: "Junior Python Developer",
      startDate: "Julio 2025",
      endDate: "Septiembre 2025",
      summary: [
        "Implementé un pipeline de datos automatizado y una API para calcular y enviar métricas diarias de rendimiento comercial vía WhatsApp.",
      ],
    },
  ],
  projects: [
    {
      name: "El Paraíso del Pollo",
      summary: "Sistema de gestión de pedidos para restaurante desarrollado con React, TypeScript, Express, PostgreSQL (Neon.tech) y Cloudinary.",
      linkPreview: "https://paraiso-del-pollo.vercel.app/",
      linkSource: "https://github.com/Crismar12/paraiso_del_pollo.git",
      image: "/paraiso_pollo.png",
    },
    {
      name: "Finance Unified Base",
      summary: "Sistema de análisis de datos que transforma los extractos de tarjetas de crédito (en formato PDF) en conjuntos de datos limpios y listos para el análisis, con el fin de generar informes financieros y obtener información valiosa.",
      linkSource: "https://github.com/Crismar12/finance-base.git",
      image: "/finance-base1.jpg",
    },
    {
      name: "Crypto Flow",
      summary: "Sistema de ingeniería de datos robusto y listo para la producción que automatiza la extracción, transformación y carga (ETL) diarias de datos del mercado de criptomonedas.",
      linkSource: "https://github.com/Crismar12/crypto_flow.git",
      image: "/coingecko_1.jpg",
    },
    {
      name: "Proyectos Colaborativos",
      summary: "Plataforma moderna y robusta para la gestión colaborativa de proyectos, diseñada con Spring Boot y una arquitectura web escalable. Permite a los usuarios crear, organizar y colaborar en proyectos utilizando diversas tecnologías.",
      linkSource: "https://github.com/Crismar12/Proyectos_Colaborativos.git",
      image: "/pro_colab.png",
    },
  ],
  about: {
    description: `
      Desarrolladora Backend & Fullstack con experiencia profesional en Python. Me especializo en la construcción de APIs RESTful, el diseño de bases de datos relacionales y el desarrollo de soluciones integrales. Mi stack tecnológico incluye Python, Java (Spring Boot), Node.js y tecnologías frontend modernas como React y TypeScript. Me enfoco en automatizar procesos, construir arquitecturas escalables y entregar código funcional: desde pipelines ETL hasta aplicaciones web completas.
    `,
    image: "/francis-big.jpg",
  },
};
