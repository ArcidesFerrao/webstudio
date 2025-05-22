import Link from "next/link";

export const Services = () => (
  <section
    id="services"
    className="services w-full flex flex-col gap-10 items-center justify-between py-5 bg-gradient-to-b from-white-to-gray-50 rounded-xl shadow-m"
  >
    <h2 className="text-4xl font-bold bg-clip-text ">What I Offer</h2>
    <p className="  max-w-md text-center">
      Tailored digital solutions to grow your business
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl">
      <div className="card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center ">
        <h3 className="mb-2">Landing Pages</h3>
        <p>High-converting single page experiences</p>
        <div>
          <h4 className="font-medium">5 000,00 MZN</h4>
          <h4 className="text-xs ">Starting price</h4>
        </div>
      </div>
      <div className="card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow ">
        <h3 className="mb-2">Full Websites</h3>
        <p>Complete multi-page web presence</p>
        <div>
          <h4 className="font-medium">10 000,00 MZN</h4>

          <h4 className="text-xs  ">Starting price</h4>
        </div>
      </div>
      <div className="card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
        <h3 className="mb-2 ">Online Stores</h3>
        <p>E-commerce ready solutions</p>
        <div>
          <h4 className="font-medium">15 000,00 MZN</h4>
          <h4 className="text-xs  ">Starting price</h4>
        </div>
      </div>
      <div className="card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow ">
        <h3 className="text-xl font-semibold mb-2 ">Custom Solutions</h3>
        <p>Dashboards ,APIs & Bespoke Systems</p>
        <div>
          <h4 className="font-semibold">Contact for quote</h4>
          <h4 className="text-xs font-light">Tailored to your needs</h4>
        </div>
      </div>
    </div>
    <Link href="#contact">
      <button className="font-sm rounded-full hover:shadow-xl transition-all hover:underline">
        Get a Custom Quote
      </button>
    </Link>
  </section>
);
