"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="w-full pt-10 md:pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-blue-600 font-medium">Hi, I&apos;m</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Mehedi 👋
            <br />
            <span className="text-gray-900">
              Frontend <span className="text-blue-600">Developer</span>
            </span>
          </h1>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
            I build modern, responsive and user-friendly websites with clean
            code and great attention to detail.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
            >
              View Projects →
            </Link>

            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Hire Me
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-4 justify-center md:justify-start pt-2">
            <FaGithub className="cursor-pointer text-gray-600 hover:text-black" />
            <FaLinkedin className="cursor-pointer text-gray-600 hover:text-blue-600" />
            <FaXTwitter className="cursor-pointer text-gray-600 hover:text-blue-400" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <Image
            src="https://i.ibb.co.com/wNrPHZdq/image-134435-1688475692.webp"
            alt="hero"
            width={600}
            height={500}
            className="w-full max-w-md md:max-w-lg drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
