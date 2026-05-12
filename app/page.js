"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Code2,
  FileText,
  GitBranch,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Users,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showSplash ? <SplashScreen /> : <MainPage />}</>;
}

/* SPLASH SCREEN */
function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img src="/images/logo1.png" alt="Logo" className="w-24 animate-pulse" />
    </div>
  );
}

/* MAIN PAGE */
function MainPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState("frontend");

  const pathname = usePathname();
  const isActive = pathname === "/";
  {
    /* clickable navbar*/
  }
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  {/*my skills*/}

  const frontendSkills = [
    {
      title: "Next.js",
      level: "Advanced",
      darkLogo: "/images/nextjs.png",
      lightLogo: "/images/nextjs1.png",
    },
    {
      title: "Tailwind CSS",
      level: "Intermediate",
      darkLogo: "/images/tailwind.png",
      lightLogo: "/images/tailwind1.png",
    },
    {
      title: "Javascript",
      level: "Advanced",
      darkLogo: "/images/javascript.png",
      lightLogo: "/images/javascript1.png",
    },
    {
      title: "HTML",
      level: "Advanced",
      darkLogo: "/images/html.png",
      lightLogo: "/images/html1.png",
    },
    {
      title: "CSS",
      level: "Advanced",
      darkLogo: "/images/css.png",
      lightLogo: "/images/css1.png",
    },
    {
      title: "Responsive Design",
      level: "Advanced",
      darkLogo: "/images/responsive design.png",
      lightLogo: "/images/responsive1.png",
    },
    {
      title: "Git & GitHub",
      level: "Intermediate",
      darkLogo: "/images/github.png",
      lightLogo: "/images/github1.png",
    },
  ];

  const businessSkills = [
    {
      title: "Requirement Gathering",
      level: "Advanced",
      darkLogo: "/images/requirements.png",
      lightLogo: "/images/requirement1.png",
    },
    {
      title: "BRD / SRS / FRD",
      level: "Advanced",
      darkLogo: "/images/documentation.png",
      lightLogo: "/images/documents1.png",
    },
    {
      title: "UML Diagrams",
      level: "Intermediate",
      darkLogo: "/images/uml.png",
      lightLogo: "/images/uml1.png",
    },
    {
      title: "Workflow Design",
      level: "Intermediate",
      darkLogo: "/images/workflow.png",
      lightLogo: "/images/workflow1.png",
    },
    {
      title: "Stakeholder collaboration",
      level: "Intermediate",
      lightLogo: "/images/communication1.png",
      darkLogo: "/images/collaboration.png",
    },
  ];

  {/*forntend proejcts*/}
const [activeProjectTab, setActiveProjectTab] = useState("frontend");

const frontendProjects = [
  {
    title: "Project One",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Project Two",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Project Three",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "Project Four",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

const businessProjects = [
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
  {
    /*  navbar activation */
  }
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: darkMode
            ? "url('/images/bg-dark.png')"
            : "url('/images/bg-light.png')",
        }}
      >
        {/* Overlay */}
        <div
          className={`min-h-screen ${darkMode ? "bg-black/40 text-white" : "text-black"}`}
        >
          {/*navbar */}
          <>
            <nav
              className="flex items-center  justify-between
    px-4 sm:px-6 md:px-16
    py-3 md:py-2
    bg-blue/40 backdrop-blur-md shadow-sm
    fixed top-0 left-0 w-full z-50"
            >
              {/* Left: Logo */}
              <Link href="#home">
                <>
                  <img
                    src="/images/logo1.png"
                    alt="Logo Light"
                    className="h-12 w-auto block dark:hidden"
                  />
                  <img
                    src="/images/logo1.png"
                    alt="Logo Dark"
                    className="h-12 w-auto hidden dark:block"
                  />
                </>
              </Link>

              <div className="flex-1"></div>

              {/* Right side */}
              <div className="flex items-center gap-6 font-bold">
                {/* Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl"
                >
                  {darkMode ? "☀️" : "🌙"}
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? "✖" : "☰"}
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex text-sm gap-8 ">
                  <li
                    onClick={() => scrollToSection("home")}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSection === "home"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Home
                  </li>

                  <li
                    onClick={() => scrollToSection("about")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "about"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    About
                  </li>
                  <li
                    onClick={() => scrollToSection("skills")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "skills"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Skills
                  </li>
                  <li
                    onClick={() => scrollToSection("projects")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "projects"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Projects
                  </li>

                  <li
                    onClick={() => scrollToSection("experience")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "experience"
                        ? "text-purple-800  font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] scale-110"
                        : "hover:text-purple-800 dark:hover:text-purple-800"
                    }`}
                  >
                    Experience
                  </li>
                </ul>

                {/* Button */}
                <button className="hidden md:block bg-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
              <div
                className={`md:hidden fixed inset-0 z-50 flex flex-col ${
                  darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <Link href="#home">
                    <img src="/images/logo1.png" className="h-10" alt="Logo" />
                  </Link>

                  <div className="flex items-center gap-4 z-20">
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="text-xl cursor-pointer"
                    >
                      {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      ✖
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col flex-1 justify-center items-center gap-6 text-lg font-bold text-center -mt-50">
                  <li
                    onClick={() => {
                      scrollToSection("home");
                      setMenuOpen(false);
                    }}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      scrollToSection("about");
                      setMenuOpen(false);
                    }}
                  >
                    About
                  </li>
                  <li
                    onClick={() => {
                      scrollToSection("skills");
                      setMenuOpen(false);
                    }}
                  >
                    Skills
                  </li>
                  <li
                    onClick={() => {
                      scrollToSection("projects");
                      setMenuOpen(false);
                    }}
                  >
                    Projects
                  </li>
                  <li
                    onClick={() => {
                      scrollToSection("experience");
                      setMenuOpen(false);
                    }}
                  >
                    Experience
                  </li>

                  <li className="w-full flex justify-center mt-4">
                    <button
                      className="bg-purple-600 px-6 py-3 rounded-full text-white w-[50%]
      shadow-[0_0_15px_rgba(168,85,247,0.7)]
      animate-pulse
      hover:shadow-[0_0_30px_rgba(168,85,247,1)]
      transition-all duration-300"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
          {/* HERO */}

          <section
            id="home"
            className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20"
          >
            {" "}
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="max-w-xl space-y-5"
            >
              <h6 className="text-lg text-purple-600 pt-18 font-bold">
                I am Asma Saleem
              </h6>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span
                  className={`bg-linear-to-r ${
                    darkMode
                      ? "from-white to-purple-400"
                      : "from-gray-900 to-purple-800"
                  } bg-clip-text text-transparent`}
                >
                  <TypeAnimation
                    sequence={["Front-end Developer", 3000, ""]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>

                <span className={darkMode ? "text-white" : "text-gray-900"}>
                  +
                </span>

                <br />

                <span
                  className={`bg-linear-to-r ${
                    darkMode
                      ? "from-white to-purple-400"
                      : "from-gray-900 to-purple-800"
                  } bg-clip-text text-transparent`}
                >
                  <TypeAnimation
                    sequence={["Business Analyst", 1000, ""]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p
                className={`text-sm md:text-base leading-relaxed whitespace-break-spaces text-justify ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                I’m a Junior Frontend Developer and Business Analyst who enjoys
                turning ideas into practical, user-friendly solutions. With
                experience in modern web technologies and requirement analysis,
                I bridge the gap between business needs and technical execution.
                I focus on building clean, responsive interfaces while ensuring
                clarity in requirements and processes.
              </p>

              {/* BUTTON + ICON ROW */}
              <div className="flex items-center gap-6 flex-wrap">
                {/* GET IN TOUCH */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden border border-purple-500 px-4 md:px-5 py-2 rounded-full flex items-center gap-2 group"
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    Get In Touch
                    <img
                      src="/images/right-arrow.png"
                      alt="arrow"
                      className={`w-5 h-5 md:w-6 md:h-6 animate-pulse ${
                        darkMode ? "invert-0" : "invert"
                      }`}
                    />
                  </span>

                  <span className="absolute inset-0 bg-purple-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                </motion.button>

                {/* SOCIAL ICONS */}
                <div className="flex gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/in/asma-saleem-0bbaa0319/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/linkedin.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>

                  <a
                    href="https://wa.me/923101657409"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/whatsapp.png"
                      className="w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition rounded-full ring-1 ring-purple-500 dark:ring-gray-400"
                    />
                  </a>
                </div>
              </div>

              {/* DOWNLOAD CV */}
              <div className="relative inline-block mt-0">
                <button
                  onClick={() => setOpen(!open)}
                  className="relative overflow-hidden border border-purple-500 px-4 md:px-5 py-2 rounded-full flex items-center gap-2 group"
                >
                  <span className="absolute inset-0 bg-purple-700 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>

                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Download CV
                  </span>

                  <svg
                    className={`relative z-10 w-4 h-4 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    } group-hover:text-white`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {open && (
                  <div
                    className={`absolute mt-2 w-44 md:w-56 border rounded-lg shadow-lg overflow-hidden z-50 ${
                      darkMode
                        ? "bg-black border-white text-white"
                        : "bg-white border-black text-black"
                    }`}
                  >
                    <a
                      href="documents/Asma Saleem - Business Analyst.pdf"
                      download
                      className="block px-4 py-2 hover:bg-purple-700"
                    >
                      Business Analyst
                    </a>

                    <a
                      href="documents/Asma Saleem - Frontend Developer.pdf"
                      download
                      className="block px-4 py-2 hover:bg-purple-700"
                    >
                      Frontend Developer
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
              className="relative mt-10 md:mt-0 flex justify-center md:mr-20"
            >
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500 via-blue-900 to-purple-900 blur-lg opacity-70"></div>

              <img
                src="images/profile.png"
                alt="profile"
                className="relative w-56 md:w-72 lg:w-80 rounded-2xl shadow-lg"
              />
            </motion.div>
          </section>
        </div>
      </div>
      {/*About Me*/}

      <section
        id="about"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/about-bg.png')"
            : "url('/images/about-bg1.png')",
        }}
      >
        <motion.div
          className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* LEFT IMAGE CARD */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div
              className="relative p-0.5 rounded-xl 
            bg-linear-to-r from-purple-500 via-cyan-400 to-purple-900 
            bg-size-[200%_200%] animate-[gradientMove_4s_ease_infinite]
            shadow-[0_0_25px_rgba(0,255,255,0.6)]"
            >
              <div className="rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
            viewport={{ once: false }}
          >
            {/* Top Label */}
            <span className="text-xs font-semibold tracking-widest text-white-300 uppercase bg-purple-900/30 px-3 py-1 rounded">
              About Me
            </span>

            <h1
              className={`text-3xl md:text-3xl pt-6 font-bold leading-snug ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              I AM AVAILABLE FOR{" "}
              <span className="text-purple-500">FRONTEND</span>
              <br />
              DEVELOPMENT &{" "}
              <span className="text-purple-500">BUSINESS ANALYST</span> PROJECTS
            </h1>

            <p
              className={`mt-4 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              I am a passionate Frontend Developer and Junior Business Analyst
              with hands-on experience in building responsive and user-friendly
              web applications using HTML, CSS, Javascript, Next.js, and
              Tailwind CSS. I focus on creating clean UI, improving user
              experience, and delivering high-quality digital solutions while
              following modern frontend best practices.
            </p>

            <p
              className={`mt-3 text-sm md:text-base max-w-md text-justify ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Along with frontend development, I have strong skills in
              requirement gathering, documentation (BRD, SRS, FRD), and
              diagramming including UML diagrams, workflows, and process
              mapping. I also have an understanding of business development and
              stakeholder collaboration, allowing me to bridge the gap between
              business needs and technical implementation to build efficient,
              scalable, and user-focused products.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => router.push("/hire")}
              className="mt-6 px-6 py-2 bg-purple-600 text-white text-sm rounded-full animate-pulse shadow-lg shadow-blue-500/50"
            >
              HIRE ME
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* skills*/}
      <section
        id="skills"
        className="w-full px-4 md:px-16 py-16 md:py-24
                 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: darkMode
            ? "url('/images/skills-bg.png')"
            : "url('/images/skills-bg1.png')",
        }}
      >
        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p
              className={`uppercase tracking-[4px] text-lg font-semibold mb-4 ${
                darkMode ? "text-pink-400" : "text-pink-600"
              }`}
            >
              My Expertise
            </p>

            <h1
              className={`text-4xl md:text-6xl font-extrabold mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              My Skills
            </h1>

            <p
              className={`max-w-2xl mx-auto text-sm md:text-base leading-7 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Passionate Frontend Developer and Junior Business Analyst with
              strong experience in responsive web development, requirement
              gathering, process modeling, and modern UI solutions.
            </p>
          </div>

          {/* FRONTEND SKILLS */}
          {/* FRONTEND SKILLS */}
          <h2
            className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="w-2 h-8 rounded-full bg-linear-to-b from-purple-500 to-pink-500"></span>
            Frontend Developer Skills
          </h2>

          <div className="overflow-visible mb-16 py-8">
            <div className="marquee flex gap-6 items-center">
              {[...frontendSkills, ...frontendSkills].map((skill, i) => (
                <div
                  key={i}
                  className={`w-45 h-55 shrink-0 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:z-50 cursor-pointer ${
                    darkMode
                      ? "bg-[#12052b] text-white border border-purple-900 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.7)]"
                      : "bg-purple-300 backdrop-blur-md text-black border border-purple-200 hover:bg-purple-50 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                  }`}
                >
                  <img
                    src={darkMode ? skill.darkLogo : skill.lightLogo}
                    alt={skill.title}
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />

                  <h3
                    className={`text-sm font-semibold mb-2 min-h-10 flex items-center justify-center ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BUSINESS ANALYST SKILLS */}
          <h2
            className={`text-3xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="w-2 h-8 rounded-full bg-linear-to-b from-cyan-500 to-blue-500"></span>
            Business Analyst Skills
          </h2>

          <div className="overflow-visible mb-20 py-8">
            <div className="marquee flex gap-6 items-center">
              {[...businessSkills, ...businessSkills].map((skill, i) => (
                <div
                  key={i}
                  className={`w-45 h-55 shrink-0 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:z-50 cursor-pointer ${
                    darkMode
                      ? "bg-[#12052b] text-white border border-cyan-900 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]"
                      : "bg-purple-300 backdrop-blur-md text-black border border-purple-200 hover:bg-purple-50 hover:border-purple-400 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]"
                  }`}
                >
                  <img
                    src={darkMode ? skill.darkLogo : skill.lightLogo}
                    alt={skill.title}
                    className="w-14 h-14 mx-auto mb-4 object-contain"
                  />

                  <h3
                    className={`text-sm font-semibold mb-2 min-h-10 flex items-center justify-center ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {skill.title}
                  </h3>

                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*projects*/}

{/* PROJECTS */}

<section
  id="projects"
  className="w-full px-4 md:px-16 py-16 md:py-24
             bg-cover bg-top bg-no-repeat
             scroll-mt-24"
  style={{
    backgroundImage: darkMode
      ? "url('/images/projects-bg.png')"
      : "url('/images/projects-bg1.png')",
  }}
>
  <div className="flex flex-col items-center text-center">

    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      My Recent Works
    </h1>

    {/* BUTTONS */}
    <div className="flex items-center gap-4 mb-14">

      <button
        onClick={() => setActiveProjectTab("frontend")}
        className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
          activeProjectTab === "frontend"
            ? "bg-purple-600 shadow-lg shadow-purple-500/40"
            : "bg-[#141414] hover:bg-purple-600"
        }`}
      >
        Frontend Developer
      </button>

      <button
        onClick={() => setActiveProjectTab("business")}
        className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
          activeProjectTab === "business"
            ? "bg-pink-600 shadow-lg shadow-pink-500/40"
            : "bg-[#141414] hover:bg-pink-600"
        }`}
      >
        Business Analyst
      </button>

    </div>
  </div>

  {/* PROJECT GRID */}
  <div className="relative max-w-6xl w-full">

    <div className="absolute inset-0 bg-purple-700/20 blur-3xl"></div>

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

      {(activeProjectTab === "frontend"
        ? frontendProjects
        : businessProjects
      ).map((project, index) => (
        <div
          key={index}
          className="bg-[#0f0f0f] rounded-xl overflow-hidden border border-purple-900/30 hover:scale-[1.02] transition duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-65 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* OPTIONAL TITLE */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
}
