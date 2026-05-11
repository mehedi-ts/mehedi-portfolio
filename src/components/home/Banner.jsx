"use client";

import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Professional Web Developer",
  "Frontend Developer",
  "Problem Solver",
  "Next.js Engineer",
];

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, index]);

  const socials = [
    {
      id: 1,
      icon: FaGithub,
      link: "#",
    },
    {
      id: 2,
      icon: FaLinkedin,
      link: "#",
    },
    {
      id: 3,
      icon: FaXTwitter,
      link: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-[140px] md:pt-[180px] pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#fbfbff] -z-20" />

      <div className="absolute top-[-180px] left-[-120px] w-[400px] h-[400px] bg-[#5B4BFF]/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-120px] w-[400px] h-[400px] bg-[#7B70FF]/20 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* INTRO */}
          <motion.p variants={item} className="text-gray-500 text-[18px]">
            Hello 👋 I am
          </motion.p>

          {/* NAME */}
          <motion.h1
            variants={item}
            className="text-[48px] md:text-[78px] font-extrabold leading-[1.05] text-[#111]"
          >
            Mehedi <span className="text-[#5B4BFF]">Hassan</span>
          </motion.h1>

          {/* TYPEWRITER ROLE */}
          <motion.div
            variants={item}
            className="mt-4 text-[20px] md:text-[26px] font-semibold text-gray-700"
          >
            <span>I am a </span>
            <span className="text-[#5B4BFF] border-r-2 border-[#5B4BFF] pr-2 animate-pulse">
              {text}
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="mt-6 max-w-[600px] text-gray-600 text-[17px] leading-[32px]"
          >
            I build modern web applications with clean architecture,
            performance-focused frontend engineering, and smooth user experience
            that feels premium and professional.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={item} className="flex gap-4 mt-10">
            <Link
              href="#projects"
              className="h-[56px] px-8 rounded-2xl bg-[#5B4BFF] text-white flex items-center justify-center font-semibold shadow-lg hover:scale-[1.03] transition"
            >
              View Projects
            </Link>

            <Link
              href="#contact"
              className="h-[56px] px-8 rounded-2xl border border-gray-200 bg-white text-gray-700 flex items-center justify-center font-semibold hover:bg-gray-50 transition"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* SOCIAL */}
          <motion.div variants={item} className="flex gap-4 mt-10">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:scale-110 transition"
                >
                  <Icon />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-[#5B4BFF]/10 blur-[120px] rounded-full" />

          <div className="rounded-[40px] overflow-hidden border border-white/50 shadow-2xl">
            <Image
              src="https://i.ibb.co.com/wNrPHZdq/image-134435-1688475692.webp"
              alt="hero"
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
