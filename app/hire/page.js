"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function HireMe() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    hireType: "",
    message: "",
  });

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true); // ✅ IMPORTANT FIX

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setLoading(true);

    const res = await fetch("/api/hire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setSubmitted(false);

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        hireType: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: darkMode
            ? "url('/images/bg-dark.png')"
            : "url('/images/bg-light.png')",
        }}
      >
        {/* NAVBAR (UNCHANGED - YOUR CODE KEPT SAME) */}
        <>
          <nav
            className="flex items-center justify-between
            px-4 sm:px-6 md:px-16
            py-3 md:py-2
            bg-blue/40 backdrop-blur-md shadow-sm
            fixed top-0 left-0 w-full z-50"
          >
            {/* Left: Logo */}
            <Link href="/">
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
              <ul className="hidden md:flex text-sm gap-8">
                <li
                  onClick={() => (window.location.href = "/#home")}
                  className={`cursor-pointer transition-all duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-purple-500`}
                >
                  Home
                </li>

                <li
                  onClick={() => (window.location.href = "/#about")}
                  className={`cursor-pointer transition-all duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-purple-500`}
                >
                  About
                </li>

                <li
                  onClick={() => (window.location.href = "/#services")}
                  className={`cursor-pointer transition-all duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-purple-500`}
                >
                  Services
                </li>

                <li
                  onClick={() => (window.location.href = "/#projects")}
                  className={`cursor-pointer transition-all duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-purple-500`}
                >
                  Projects
                </li>

                <li
                  onClick={() => (window.location.href = "/#experience")}
                  className={`cursor-pointer transition-all duration-200 ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-purple-500`}
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
                <Link href="/">
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
                    window.location.href = "/#home";
                    setMenuOpen(false);
                  }}
                >
                  Home
                </li>

                <li
                  onClick={() => {
                    window.location.href = "/#about";
                    setMenuOpen(false);
                  }}
                >
                  About
                </li>

                <li
                  onClick={() => {
                    window.location.href = "/#services";
                    setMenuOpen(false);
                  }}
                >
                  Services
                </li>

                <li
                  onClick={() => {
                    window.location.href = "/#projects";
                    setMenuOpen(false);
                  }}
                >
                  Projects
                </li>

                <li
                  onClick={() => {
                    window.location.href = "/#experience";
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

        {/* FORM SECTION */}
        <div className="relative w-full min-h-screen flex pt-28 pb-20 items-center justify-center px-4 overflow-hidden">
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-125 h-125 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 left-10 animate-float"></div>
            <div className="absolute w-100 h-100 bg-purple-400 opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-floatSlow"></div>
          </div>

          {/* FORM (SCROLL ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }} //  re-animates on scroll
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`w-full max-w-5xl p-8 rounded-2xl shadow-2xl border border-transparent
        hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:scale-[1.03]
        hover:border-purple-400/40
        ${
          darkMode
            ? "bg-black/70 text-white backdrop-blur-xl"
            : "bg-white/70 text-gray-900 backdrop-blur-xl"
        }`}
          >
            {/* TITLE */}
            <h2 className="text-5xl font-bold text-center mb-8">
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                Hire Me
              </span>
            </h2>

            {success && (
              <p className="text-green-400 text-center mb-4">
                ✅ Your request has been sent!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* LEFT + RIGHT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LEFT SIDE */}
                <div className="space-y-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`w-full p-3 rounded border bg-transparent outline-none transition-all duration-300
${!form.name && submitted ? "border-red-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]" : ""}
              hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
              focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
              ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
            `}
                  />

                  {!form.name && submitted && (
                    <p className="text-red-500 text-sm mt-1">
                      Please fill your name
                    </p>
                  )}
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    type="email"
                    className={`w-full p-3 rounded border bg-transparent outline-none transition-all duration-300
              ${!form.email && submitted ? "border-red-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]" : ""}
              hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
              focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
              ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
            `}
                  />

                  {!form.email && submitted && (
                    <p className="text-red-500 text-sm mt-1">
                      Please fill your email
                    </p>
                  )}

                  {/* PHONE WITH COUNTRY CODE */}
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className={`p-3 rounded border outline-none transition-all duration-300
    hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
    focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
    ${
      darkMode
        ? "bg-black text-white border-gray-600"
        : "bg-white text-black border-black"
    }
  `}
                    >
                      <option
                        value="+92"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇵🇰 +92
                      </option>
                      <option
                        value="+91"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇮🇳 +91
                      </option>
                      <option
                        value="+1"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇺🇸 +1
                      </option>
                      <option
                        value="+44"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇬🇧 +44
                      </option>

                      {/* Added popular ones */}

                      <option
                        value="+61"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇦🇺 +61
                      </option>
                      <option
                        value="+971"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇦🇪 +971
                      </option>
                      <option
                        value="+966"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇸🇦 +966
                      </option>
                      <option
                        value="+81"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇯🇵 +81
                      </option>
                      <option
                        value="+49"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇩🇪 +49
                      </option>
                      <option
                        value="+33"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇫🇷 +33
                      </option>
                      <option
                        value="+39"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇮🇹 +39
                      </option>
                      <option
                        value="+86"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇨🇳 +86
                      </option>
                      <option
                        value="+82"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇰🇷 +82
                      </option>
                      <option
                        value="+7"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇷🇺 +7
                      </option>
                      <option
                        value="+55"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇧🇷 +55
                      </option>
                      <option
                        value="+27"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇿🇦 +27
                      </option>
                      <option
                        value="+34"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇪🇸 +34
                      </option>
                      <option
                        value="+90"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇹🇷 +90
                      </option>
                      <option
                        value="+20"
                        className={
                          darkMode
                            ? "bg-black text-white"
                            : "bg-white text-black"
                        }
                      >
                        🇪🇬 +20
                      </option>
                    </select>

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full p-3 rounded border bg-transparent outline-none transition-all duration-300
                hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
                focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
                ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
              `}
                    />
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-4">
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full p-3 rounded border bg-transparent outline-none transition-all duration-300
              hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
              focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
              ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
            `}
                  />

                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className={`w-full p-3 rounded border bg-transparent outline-none transition-all duration-300
              hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
              focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
              ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
            `}
                  />

                  <select
                    name="hireType"
                    value={form.hireType}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border outline-none transition-all duration-300
    hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
    focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
    ${
      darkMode
        ? "bg-black text-white border-gray-600"
        : "bg-white text-black border-black"
    }
  `}
                  >
                    <option
                      value="freelancer"
                      className={
                        darkMode ? "bg-black text-white" : "bg-white text-black"
                      }
                    >
                      Freelancer
                    </option>

                    <option
                      value="full-time"
                      className={
                        darkMode ? "bg-black text-white" : "bg-white text-black"
                      }
                    >
                      Full-Time
                    </option>

                    <option
                      value="part-time"
                      className={
                        darkMode ? "bg-black text-white" : "bg-white text-black"
                      }
                    >
                      Part-Time
                    </option>

                    <option
                      value="contract"
                      className={
                        darkMode ? "bg-black text-white" : "bg-white text-black"
                      }
                    >
                      Contract
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE CENTER */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Project Details / Message *"
                  className={`w-full p-4 rounded border bg-transparent outline-none transition-all duration-300
            hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
            focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]
            ${darkMode ? "text-white placeholder-gray-400 border-gray-600" : "text-gray-900 placeholder-gray-500 border-gray-300"}
          `}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center">
                <button
                  disabled={loading}
                  className="w-full md:w-1/2 py-3 rounded bg-purple-600 text-white font-semibold 
          hover:bg-purple-700 transition-all duration-300 
          shadow-[0_0_15px_rgba(168,85,247,0.6)]
          hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
          active:scale-95"
                >
                  {loading ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
