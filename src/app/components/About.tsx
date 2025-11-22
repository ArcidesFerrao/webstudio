import Image from "next/image";
import Link from "next/link";

export const About = () => (
  // <section className="p-8 bg-gray-100 rounded-lg my-8">
  <section id="about" className="about flex flex-col items-center p-10 gap-5">
    <h2 className="text-4xl font-bold bg-clip-text ">About Me</h2>
    <div className="flex flex-col gap-5">
      <div className="about-container flex gap-5 items-center">
        <div className="flex flex-col gap-5">
          <p className="flex gap-1">
            I&apos;m <b> Arcides Ferrao,</b> full-stack developer from Maputo
            🇲🇿.
          </p>
          <div className="flex flex-col gap-5">
            <p>I help local brands scale with:</p>
            <ul className="px-5">
              <li className="font-extralight">Custom Websites</li>
              <li className="font-extralight">Scalable Backend Systems</li>
              <li className="font-extralight">Clear Frontend Interfaces</li>
            </ul>
          </div>
          <p>
            I&apos;m also launching Innovante Academy to teach real dev skills.
          </p>
        </div>
        <div>
          <Image
            src="/assets/profile.png"
            alt="arcides-ferrao"
            width={240}
            height={240}
            className="border-8 border-white/90 hover:rotate-3"
          />
        </div>
      </div>
      <div className="button-github h-fit">
        <button className="about-button flex items-center justify-center w-fit gap-2">
          <span className="jam--github"></span>
          <Link href="https://github.com/ArcidesFerrao" target="blank">
            ...more on GitHub
          </Link>
        </button>
      </div>
    </div>
  </section>
);
