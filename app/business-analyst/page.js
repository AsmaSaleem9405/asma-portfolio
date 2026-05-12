"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Documentation",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Diagramming",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Workflow",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    title: "Case Study",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function BusinessAnalystPage() {

  // ✅ useRouter INSIDE component
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#07010f] text-white py-16 px-6 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        My Recent Works
      </h1>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-14">

        {/* Frontend Button */}
        <button
          onClick={() => router.push("/#projects")}
          className="px-6 py-2 rounded-full border border-pink-500 bg-transparent
          text-sm md:text-base font-medium relative overflow-hidden
          hover:border-pink-400
          hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]
          transition-all duration-300"
        >
          Frontend Developer
        </button>

        {/* Active Business Analyst */}
        <Link href="/business-analyst">
          <button className="px-6 py-2 rounded-full bg-pink-600 text-sm md:text-base font-medium shadow-lg shadow-pink-500/40 hover:scale-105 transition duration-300">
            Business Analyst
          </button>
        </Link>

      </div>

      {/* Projects */}
      <section
        id="projects"
        className="relative max-w-6xl w-full"
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-pink-700/20 blur-3xl"></div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] rounded-xl overflow-hidden border border-pink-900/30 hover:scale-[1.02] transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover hover:scale-110 transition duration-500"
                />
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}