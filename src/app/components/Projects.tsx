import Image from "next/image";

export const Projects = () => {
  return (
    <section className="services w-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-white-to-gray-50 rounded-xl shadow-m">
      <h2 className="text-4xl font-bold mb-2  bg-clip-text ">Projects</h2>
      <p className=" mb-8 max-w-md text-center">
        Some of my most recent projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
          <Image src="/" alt="picture" />
          <h3 className="text-xl font-semibold mb02">Veste Ousadia</h3>
          <p className=" mb-4">E-Commerce Platform</p>
          <p className="mb-4">Design - Frontend - Backend</p>
        </div>
        <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
          <Image src="/" alt="picture" />
          <h3 className="text-xl font-semibold mb02">Veste Ousadia</h3>
          <p className=" mb-4">E-Commerce Platform</p>
          <p className="mb-4">Design - Frontend - Backend</p>
        </div>
        <div className=" p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 ">
          <Image src="/" alt="picture" />
          <h3 className="text-xl font-semibold mb02">Veste Ousadia</h3>
          <p className=" mb-4">E-Commerce Platform</p>
          <p className="mb-4">Design - Frontend - Backend</p>
        </div>
      </div>
    </section>
  );
};
