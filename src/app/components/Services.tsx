export const Services = () => (
  <section className="services w-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-white-to-gray-50 rounded-xl shadow-m">
    <h2 className="text-4xl font-bold mb-2 text-gray-500 bg-clip-text ">
      What I Offer
    </h2>
    <p className="text-gray-500 mb-8 max-w-md text-center">
      Tailored digital solutions to grow your business
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb02 text-gray-800">
          Landing Pages
        </h3>
        <p className="text-gray-600 mb-4">
          High-converting single page experiences
        </p>
        <div>
          <h4 className="text-2xl font-bold text-blue-600">5000MT</h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mt-1">Starting price</h4>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb02 text-gray-800">
          Full Websites
        </h3>
        <p className="text-gray-600 mb-4">Complete multi-page web presence</p>
        <div>
          <h4 className="text-2xl font-bold text-blue-600">10,000MT</h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mt-1">Starting price</h4>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb02 text-gray-800">
          Online Stores
        </h3>
        <p className="text-gray-600 mb-4"></p>
        <div>
          <h4 className="text-2xl font-bold text-blue-600"></h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mt-1">Starting price</h4>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold mb02 text-gray-800">
          Custom Solutions
        </h3>
        <p className="text-gray-600 mb-4">Dashboards ,APIs & Bespoke Systems</p>
        <div>
          <h4 className="text-2xl font-bold text-blue-600">
            Contact for quote
          </h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mt-1">Tailored to your needs</h4>
        </div>
      </div>
    </div>
    <button className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-50-to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all hover:scale-105">
      Get a Custom Quote
    </button>
  </section>
);
