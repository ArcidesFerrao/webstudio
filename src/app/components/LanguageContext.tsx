"use client";

import React, { createContext, useContext, useState } from "react";

type Language = keyof typeof translations;
type TranslationKey = keyof (typeof translations)["en"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Building modern websites that make brands stand out.",
    hero_subtitle: "Clean code, modern design, built fast for real results.",
    hero_view_projects: "View My Work",
    hero_contact_us: "Get a Website",

    services_title: "What I Offer",
    services_subtitle:
      "Tailored digital solutions to grow your business online",
    services_starting_at: "Starting at",
    service_landing_pages: "Landing Pages",
    landing_pages_desc: "High-converting single page experiences",
    service_website: "Full Websites",
    website_desc: "Complete multi-page web presence",
    service_ecommerce: "Online Stores",
    ecommerce_desc: "E-commerce ready solutions",
    service_custom: "Custom Solutions",
    custom_desc: "Dashboards ,APIs & Bespoke Systems",
    custom_button: "Tailored to your needs",
    service_button: "Get a Custom Quote",

    projects_title: "My Projects",
    projects_subtitle: "Some of my most recent projects",

    about_title: "About Me",
    about_subtitle: "I'm Arcides Ferrao, full-stack developer from Maputo 🇲🇿.",
    about_description: "I help local brands scale with:",
    about_list_1: "Custom Web Development",
    about_list_2: "Effective E-commerce Solutions",
    about_list_3: "Responsive & SEO-Optimized Design",
    about_button: "...more on GitHub",

    contact_title: "Get In Touch",
    contact_subtitle: "Ready to build something?",
    contact_description:
      "Let’s talk about your project. I usually respond in less than 24 hours.",
    contact_button: "Send Request",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "What do you want built?",

    footer: "© 2025 Evolure Web Studio. All rights reserved.",
  },
  pt: {
    nav_services: "Serviços",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    hero_title: "Construindo sites modernos que destacam marcas.",
    hero_subtitle:
      "Código limpo, design moderno, construído rapidamente para resultados reais.",
    hero_view_projects: "Ver Meu Trabalho",
    hero_contact_us: "Obter um Site",
    services_title: "O Que Ofereço",
    services_subtitle:
      "Soluções digitais personalizadas para expandir seu negócio online",
    services_starting_at: "A partir de",
    service_landing_pages: "Páginas de Destino",
    landing_pages_desc: "Experiências de página única de alta conversão",
    service_website: "Sites Completos",
    website_desc: "Presença web completa de várias páginas",
    service_ecommerce: "Lojas Online",
    ecommerce_desc: "Soluções prontas para comércio eletrônico",
    service_custom: "Soluções Personalizadas",
    custom_desc: "Painéis, APIs e Sistemas Sob Medida",
    custom_button: "Personalizado para suas necessidades",
    service_button: "Obter um Orçamento Personalizado",
    projects_title: "Meus Projetos",
    projects_subtitle: "Alguns dos meus projetos mais recentes",
    about_title: "Sobre Mim",
    about_subtitle:
      "Sou Arcides Ferrao, desenvolvedor full-stack de Maputo 🇲🇿.",
    about_description: "Eu ajudo marcas locais a crescer com:",
    about_list_1: "Desenvolvimento Web Personalizado",
    about_list_2: "Soluções Eficazes de E-commerce",
    about_list_3: "Design Responsivo e Otimizado para SEO",
    about_button: "...mais no GitHub",
    contact_title: "Entre em Contato",
    contact_subtitle: "Pronto para construir algo?",
    contact_description:
      "Vamos conversar sobre seu projeto. Geralmente respondo em menos de 24 horas.",
    contact_button: "Enviar Solicitação",
    contact_name: "Seu Nome",
    contact_email: "Seu Email",
    contact_message: "O que você quer construir?",
    footer: "© 2025 Evolure Web Studio. Todos os direitos reservados.",
  },
};
