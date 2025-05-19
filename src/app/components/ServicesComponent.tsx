export const ServicesPage = () => (
  <section className="w-full flex flex-col items-center p-8  rounded-xl shadow-md">
    <h2 className="text-3xl font-bold mb-2 text-gray-500">My Services</h2>
    <p className="text-gray-500 mb-8 max-w-md text-center">
      Your services you stines to apleentint, yourvlying, goute&apos;s to cner
      mashnedy your abuter to needs.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
      {/* Service Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
        <div className="text-3xl text-gray-600 mb-2">
          {/* Replace with your actual icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-7 9 7m-12 3.75h18M6 12h12m-9 8.25h.008v.008H9v-.008zm4.5 0h.008v.008H13.5v-.008zm4.5 0h.008v.008H18v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800 text-center">
          Landing Pages
        </h3>
        <p className="text-gray-600 text-sm text-center">$1,00 a contact</p>
      </div>

      {/* Service Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
        <div className="text-3xl text-gray-600 mb-2">
          {/* Replace with your actual icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.05-.052.118-.052.168 0l8.954 8.955"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954 8.955c.05.052.118.052.168 0l8.954-8.955"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14.25l-2.25 2.25M12 14.25l2.25 2.25M7.5 15.75l-2.25 2.25M16.5 15.75l2.25 2.25"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800 text-center">
          Full Websites
        </h3>
        <p className="text-gray-600 text-sm text-center">$2,00 a contact</p>
      </div>

      {/* Service Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
        <div className="text-3xl text-gray-600 mb-2">
          {/* Replace with your actual icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.115 1.1 1.207 1.993 2.33 1.993h.262c1.123 0 2.215-.893 2.33-1.993l1.263-12c.093-.894-.691-1.79-1.683-1.79h-.268c-.992 0-1.776.896-1.683 1.79zM9 15.75h.008v.008H9v-.008zm0 2.25h.008v.008H9v-.008zm3 2.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800 text-center">
          Online Stores
        </h3>
        <p className="text-gray-600 text-sm text-center">$1,00 a contact</p>
      </div>

      {/* Service Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
        <div className="text-3xl text-gray-600 mb-2">
          {/* Replace with your actual icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.216a5.25 5.25 0 005.939 0c1.584-.222 2.707-1.616 2.707-3.216m-9 0h9m-9 3.75a2.25 2.25 0 11-.008-4.501A2.25 2.25 0 019 16.5h.008m-4.5 0H4.5m3 0h3m-3-3.75h3m-6 3.75h.008v.008H6v-.008m6-3.75H9.75m6 0h.008v.008H18v-.008m-6 3.75h.008v.008H12v-.008"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-1 text-gray-800 text-center">
          Custom Solutions
        </h3>
        <p className="text-gray-600 text-sm text-center">$1,00 a contact</p>
      </div>
    </div>

    <button className="mt-8 px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors">
      Get a Custom Quote
    </button>
  </section>
);
