import Link from "next/link";

const frontendProjects = [
  "Frontend Project 1",
  "Frontend Project 2",
  "Frontend Project 3",
  "Frontend Project 4",
];

export default function FrontendPage() {
  return (
    <main className="min-h-screen bg-[#0b0617] text-white px-6 py-14">

      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold mb-6">
          My Recent Works
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-5 flex-wrap">

          {/* Active Frontend */}
          <Link href="/frontend">
            <button className="px-8 py-3 rounded-full bg-purple-600 text-lg font-semibold shadow-lg shadow-purple-500/40">
              Frontend Developer
            </button>
          </Link>

          {/* Business Analyst */}
          <Link href="/business-analyst">
            <button className="px-8 py-3 rounded-full bg-[#1a1a1a] hover:bg-pink-600 transition duration-300 text-lg font-semibold">
              Business Analyst
            </button>
          </Link>

        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {frontendProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <div className="h-56 bg-gradient-to-r from-purple-500 to-pink-500"></div>

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3">
                {project}
              </h2>

              <p className="text-gray-400 mb-4">
                Frontend project showcase.
              </p>

              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg">
                View Project
              </button>

            </div>
          </div>
        ))}

      </div>

    </main>
  );
}