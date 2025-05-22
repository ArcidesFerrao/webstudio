import Image from "next/image";
import React from "react";
// Assuming you have these icons or similar components defined elsewhere
// For demonstration, let's create a basic placeholder for them

export const AboutMeSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Picture Frame */}
        <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-8 border-white/90 hover:rotate-3 transition-transform">
          <Image
            src="/your-photo.jpg" // Make sure to replace this with your actual image path
            alt="Arcides Ferrao"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-gray-800">
                Arcides Ferrao
              </span>
              <span className="text-blue-500">📍</span>
              <span className="text-gray-500">Maputo</span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Full-stack developer building{" "}
              <span className="font-semibold text-blue-600">
                scalable websites
              </span>{" "}
              and{" "}
              <span className="font-semibold text-purple-600">
                tech systems
              </span>{" "}
              to empower local brands. Currently revolutionizing tech education
              through{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text font-medium">
                Innovante Academy
              </span>{" "}
              – teaching real-world development skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourprofile" // Replace with your actual GitHub profile link
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
            >
              {/* <GitHubIcon className="w-5 h-5" /> */}
              <span>Explore My GitHub</span>
              {/* <ArrowUpRight className="w-4 h-4" /> */}
            </a>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-8 bg-gray-300"></span>
              <span>5+ years experience</span>
              <span>•</span>
              <span>20+ projects delivered</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Full-Stack Development
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Tech Education
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              System Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
