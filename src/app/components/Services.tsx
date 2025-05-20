export const Services = () => (
  <section className="services w-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-white-to-gray-50 rounded-xl shadow-m">
    <h2 className="text-4xl font-bold mb-2  bg-clip-text ">What I Offer</h2>
    <p className=" mb-8 max-w-md text-center">
      Tailored digital solutions to grow your business
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
        <h3 className="text-xl font-semibold mb02">Landing Pages</h3>
        <p className=" mb-4">High-converting single page experiences</p>
        <div>
          <h4 className="text-2xl font-bold">5 000,00 MZN</h4>
        </div>
        <div>
          <h4 className="text-sm  mt-1">Starting price</h4>
        </div>
      </div>
      <div className=" rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
        <h3 className="text-xl font-semibold mb02">Full Websites</h3>
        <p className=" mb-4">Complete multi-page web presence</p>
        <div>
          <h4 className="text-2xl font-bold">10 000,00 MZN</h4>
        </div>
        <div>
          <h4 className="text-sm  mt-1">Starting price</h4>
        </div>
      </div>
      <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
        <h3 className="text-xl font-semibold mb02 ">Online Stores</h3>
        <p className=" mb-4">E-commerce ready solutions</p>
        <div>
          <h4 className="text-2xl font-bold ">15 000,00 MZN</h4>
        </div>
        <div>
          <h4 className="text-sm  mt-1">Starting price</h4>
        </div>
      </div>
      <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
        <h3 className="text-xl font-semibold mb02 ">Custom Solutions</h3>
        <p className=" mb-4">Dashboards ,APIs & Bespoke Systems</p>
        <div>
          <h4 className="text-2xl font-bold ">Contact for quote</h4>
        </div>
        <div>
          <h4 className="text-sm  mt-1">Tailored to your needs</h4>
        </div>
      </div>
    </div>
    <button className="mt-10 px-8 py-3 font-medium rounded-full hover:shadow-lg transition-all hover:scale-105">
      Get a Custom Quote
    </button>
  </section>
);
