"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero-section text-center p-10">
      <div className="my-5">
        <h2 className="text-4xl font-bold py-5">{t("hero_title")}</h2>
        <p className="my-5 ">{t("hero_subtitle")}</p>
      </div>
      <div className="flex gap-5 justify-center py-5">
        <a href="#projects" className="btn">
          <span>{t("hero_view_projects")}</span>
        </a>
        <a href="#contact" className="btn btn-outline">
          <span>{t("hero_contact_us")}</span>
        </a>
      </div>
    </section>
  );
}
