import Image from "next/image";

export const About = () => (
  // <section className="p-8 bg-gray-100 rounded-lg my-8">
  <section className="p-8  rounded-lg my-8">
    <h2 className="text-xl font-bold mb-2">About Me</h2>
    <div>
      <div className="flex">
        <div>
          <p>
            I&apos;m **Arcides Ferrao**, full-stack developer from **Maputo
            🇲🇿**.
          </p>
          <p>I help local brands scale with:</p>
          <ul>
            <li>Custom Websites</li>
            <li>Scalable Backend Systems</li>
            <li>Clear Frontend Interfaces</li>
          </ul>
        </div>
        <div>
          <Image src="/" alt="picture" width={300} height={300} />
        </div>
      </div>
      <div>
        <p>
          I’m also launching **Innovante Academy** to teach real dev skills.
        </p>
        <button>See more on GitHub</button>
      </div>
    </div>
  </section>
);
