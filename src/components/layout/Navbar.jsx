"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  // 🌙 FIX: lazy init (NO useEffect state sync issue)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌙 ONLY sync DOM (NO setState here)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/70 dark:bg-black/40 border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#5B4BFF] to-[#7B70FF] text-white flex items-center justify-center font-bold">
            M
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#111] dark:text-white">
              Mehedi
            </h2>
            <p className="text-[11px] text-gray-500">Frontend Developer</p>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-2 bg-white/70 dark:bg-black/30 backdrop-blur-xl border border-[#ececec] px-3 py-2 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#5B4BFF]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white/80 dark:bg-black/40"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <Moon size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Sun size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button className="h-[48px] px-6 rounded-2xl border">Login</button>

          <button className="h-[48px] px-6 rounded-2xl bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] text-white">
            Hire Me
          </button>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden w-11 h-11 rounded-2xl border flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
