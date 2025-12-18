"use client";

import { useLanguage } from "../components/LanguageContext";

export const ContactForm = () => {
  const { t } = useLanguage();
  return (
    <form
      id="contact"
      action="https://formsubmit.co/cidesferrao@gmail.com"
      method="POST"
      className="contact-form flex flex-col items-center gap-5 py-10"
    >
      <h2 className="text-4xl font-bold bg-clip-text ">{t("contact_title")}</h2>

      <p className="max-w-md text-center">{t("contact_subtitle")}</p>
      <p className="max-w-md text-center font-extralight">
        {t("contact_description")}
      </p>
      <div className="flex flex-col gap-5">
        <input name="name" placeholder={t("contact_name")} required />
        <input
          name="email"
          type="email"
          placeholder={t("contact_email")}
          required
        />
        <textarea name="message" placeholder={t("contact_message")} required />
        <button type="submit" className="btn">
          {t("contact_button")}
        </button>
      </div>
    </form>
  );
};
