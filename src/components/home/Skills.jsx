"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { FaReact, FaJs, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

/* ANIMATION VARIANTS */
const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
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

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const skillsData = [
    {
      id: 1,
      name: "React",
      icon: <FaReact />,
      value: 90,
      desc: "UI building with reusable components",
    },
    {
      id: 2,
      name: "Next.js",
      icon: <SiNextdotjs />,
      value: 88,
      desc: "Full-stack modern web apps",
    },
    {
      id: 3,
      name: "Tailwind",
      icon: <SiTailwindcss />,
      value: 95,
      desc: "Utility-first UI design system",
    },
    {
      id: 4,
      name: "JavaScript",
      icon: <FaJs />,
      value: 85,
      desc: "Core frontend programming",
    },
    {
      id: 5,
      name: "TypeScript",
      icon: <SiTypescript />,
      value: 80,
      desc: "Type-safe scalable apps",
    },
    {
      id: 6,
      name: "Node.js",
      icon: <FaNodeJs />,
      value: 78,
      desc: "Backend APIs & server logic",
    },
    {
      id: 7,
      name: "Express",
      icon: <SiExpress />,
      value: 76,
      desc: "REST API development",
    },
    {
      id: 8,
      name: "MongoDB",
      icon: <SiMongodb />,
      value: 74,
      desc: "NoSQL database handling",
    },
    {
      id: 9,
      name: "Firebase",
      icon: <SiFirebase />,
      value: 82,
      desc: "Auth + realtime database",
    },
    {
      id: 10,
      name: "GitHub",
      icon: <FaGithub />,
      value: 86,
      desc: "Version control workflow",
    },
  ];

  const displayed = showAll ? skillsData : skillsData.slice(0, 6);

  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 overflow-hidden">
      {/* BACKGROUND (MATCH HERO + ABOUT SYSTEM) */}
      <div className="absolute top-10 -left-20 w-[300px] h-[300px] bg-[#5B4BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#7B70FF]/15 blur-[120px] rounded-full" />

      {/* MAIN WRAPPER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[36px] p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
      >
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f3ff] border border-[#e8e6ff] mb-4">
              <span className="w-2.5 h-2.5 bg-[#5B4BFF] rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-[#5B4BFF]">My Skills</p>
            </div>

            <h2 className="text-[34px] md:text-[48px] font-bold text-[#111] leading-tight">
              Technologies I Work With
            </h2>

            <p className="text-gray-600 mt-4 max-w-[600px] leading-[30px]">
              I build modern scalable web applications using industry standard
              tools and clean architecture patterns.
            </p>
          </motion.div>

          <motion.button
            variants={item}
            onClick={() => setShowAll(!showAll)}
            className="h-[54px] px-7 rounded-2xl bg-[#5B4BFF] text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            {showAll ? "Show Less" : "View All Skills"}
          </motion.button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {displayed.map((skill, i) => (
            <motion.div
              key={skill.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-[#eee] rounded-[28px] p-7 shadow-sm hover:shadow-[0_20px_50px_rgba(91,75,255,0.12)] transition"
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B4BFF] to-[#7B70FF] flex items-center justify-center text-white text-3xl mb-6 group-hover:rotate-6 transition">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-xl font-bold text-[#111] group-hover:text-[#5B4BFF] transition">
                {skill.name}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm mt-2 leading-[26px]">
                {skill.desc}
              </p>

              {/* PROGRESS */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Proficiency</span>
                  <span className="font-semibold text-[#111]">
                    {skill.value}%
                  </span>
                </div>

                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
