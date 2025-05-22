import Image from "next/image";

export const About = () => (
  // <section className="p-8 bg-gray-100 rounded-lg my-8">
  <section className="about flex flex-col items-center p-8 gap-5">
    <h2 className="text-4xl font-bold bg-clip-text ">About Me</h2>
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
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
          />
        </div>
      </div>
      <div>
        <button>See more on GitHub</button>
      </div>
    </div>
  </section>
);
