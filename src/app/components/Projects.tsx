"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="projects w-full flex flex-col items-center justify-between py-10 gap-10 rounded-xl shadow-m"
    >
      <h2 className="text-4xl font-bold bg-clip-text ">
        {t("projects_title")}
      </h2>
      <p className="max-w-md text-center">{t("projects_subtitle")}</p>
      <div className="projects-container flex w-full gap-2 justify-between max-w-4xl">
        <div className="project-card max-w-fit justify-self-center ">
          <Image
            src="/assets/ousadia.png"
            alt="picture"
            width={200}
            height={270}
            className="rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <h3 className="text-xl font-medium ">
              <a href="https://www.vesteousadia.com" target="blank">
                <h3 className="text-xl font-medium">Veste Ousadia</h3>
              </a>
            </h3>
            <p className=" ">E-Commerce Platform</p>
            <p className="font-extralight text-sm">
              Design - Frontend - Backend
            </p>
          </div>
        </div>
        <div className="project-card max-w-fit justify-self-center ">
          <Image
            src="/assets/repos.png"
            alt="picture"
            width={200}
            height={270}
            className="rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <h3 className="text-xl font-medium ">Most Starred</h3>
            <p className="">Case Study</p>
            <p className="font-extralight text-sm">Design - Frontend</p>
          </div>
        </div>
        {/* <div className="project-card max-w-fit justify-self-center ">
          <Image
            src="/assets/digital.png"
            alt="picture"
            width={200}
            height={270}
            className="rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <a
              href="https://digital-marketplace-one.vercel.app/"
              target="blank"
            >
              <h3 className="text-xl font-medium">Marketplace</h3>
            </a>
            <p className="">Digital Marketplace</p>
            <p className="font-extralight text-sm">Frontend - Backend</p>
          </div>
        </div> */}
        <div className="project-card max-w-fit justify-self-center ">
          <Image
            src="/assets/contela.png"
            alt="picture"
            width={200}
            height={270}
            className="border rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <a href="https://inventory-eight-lemon.vercel.app/" target="blank">
              <h3 className="text-xl font-medium">Contela</h3>
            </a>
            <p className="">Management Platform</p>
            <p className="font-extralight text-sm">Frontend - Backend</p>
          </div>
        </div>
      </div>
    </section>
  );
};
