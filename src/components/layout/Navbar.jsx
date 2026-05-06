"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            M
          </div>
          Mehedi
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="w-full px-4 py-2 rounded-lg border border-gray-300">
            Login
          </button>
          <button className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
