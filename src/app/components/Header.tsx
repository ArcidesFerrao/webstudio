"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="relative w-full flex space-x-6 justify-center py-4 ">
      <Link href="/#hero">Home</Link>
      <Link href="/#services">{t("nav_services")}</Link>
      <Link href="/#projects">{t("nav_projects")}</Link>
      {/* <Link href="/market">Products</Link> */}
      <Link href="/#contact">{t("nav_contact")}</Link>
      <button
        className="absolute right-4 language-btn"
        onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      >
        {language === "en" ? "PT" : "EN"}
      </button>
    </nav>
  );
};
