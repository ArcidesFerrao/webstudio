import Image from "next/image";

export const About = () => (
  // <section className="p-8 bg-gray-100 rounded-lg my-8">
  <section className="about flex flex-col items-center p-8 gap-5">
    <h2 className="text-4xl font-bold bg-clip-text ">About Me</h2>
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <p>
            I&apos;m **Arcides Ferrao**, full-stack developer from **Maputo
            🇲🇿**.
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
            I’m also launching **Innovante Academy** to teach real dev skills.
          </p>
        </div>
        <div>
          <Image src="/" alt="picture" width={200} height={200} />
        </div>
      </div>
      <div>
        <button>See more on GitHub</button>
      </div>
    </div>
  </section>
);
