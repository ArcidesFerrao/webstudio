import Image from "next/image";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="projects w-full flex flex-col items-center justify-between py-10 gap-10 rounded-xl shadow-m"
    >
      <h2 className="text-4xl font-bold bg-clip-text ">Projects</h2>
      <p className="max-w-md text-center">Some of my most recent projects</p>
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
                Veste Ousadia
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
            src="/assets/djopa.png"
            alt="picture"
            width={200}
            height={270}
            className="rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <h3 className="text-xl font-medium ">Djopa</h3>
            <p className="">Job Seeking Platform</p>
            <p className="font-extralight text-sm">
              Design - Frontend - Backend
            </p>
          </div>
        </div>
        <div className="project-card max-w-fit justify-self-center ">
          <Image
            src="/assets/clock-timer.png"
            alt="picture"
            width={200}
            height={270}
            className="rounded-lg hover:shadow-lg transition-shadow"
          />
          <div className="flex flex-col justify-around min-h-24">
            <h3 className="text-xl font-medium">Timer</h3>
            <p className="">Clock - Timer</p>
            <p className="font-extralight text-sm">Design - Frontend</p>
          </div>
        </div>
      </div>
    </section>
  );
};
