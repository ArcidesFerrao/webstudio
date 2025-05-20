import Image from "next/image";

export const About = () => (
  // <section className="p-8 bg-gray-100 rounded-lg my-8">
  <section className="p-8  rounded-lg my-8">
    <h2 className="text-xl font-bold mb-2">About Me</h2>
    <div>
      <div>
        <p>
          I&apos;m Arcides Ferrao, full-stack developer from Maputo 🇲🇿. I build
          scalable websites and tech systems to empower local brands. I’m also
          launching Innovante Academy to teach real dev skills.
        </p>
        <button>See more on GitHub</button>
      </div>

      <Image src="/" alt="picture" />
    </div>
  </section>
);
