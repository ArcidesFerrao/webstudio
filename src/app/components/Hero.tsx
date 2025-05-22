export const Hero = () => (
  <section id="hero" className="hero-section text-center p-10">
    <div className="my-5">
      <h2 className="text-4xl font-bold py-5">
        Building modern websites that make brands stand out.
      </h2>
      <p className="my-5 ">
        Clean code, modern design, built fast for real results.
      </p>
    </div>
    <div className="flex gap-5 justify-center py-5">
      <a href="/projects" className="btn">
        <span>View My Work</span>
      </a>
      <a href="/contact" className="btn btn-outline">
        <span>Get a Website</span>
      </a>
    </div>
  </section>
);
