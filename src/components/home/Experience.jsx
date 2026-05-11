"use client";

import { motion } from "framer-motion";
import { FaCode, FaReact, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const experiences = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Started Web Development Journey",
    company: "Self Learning & Exploration",
    description:
      "Started learning HTML, CSS and basic web design principles. Explored responsive layouts and frontend fundamentals.",
    year: "2022 - 2023",
    color: "from-[#5B4BFF] to-[#7B70FF]",
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "React.js Learning & Practice",
    company: "Frontend Development Practice",
    description:
      "Focused on React ecosystem, hooks, reusable components and building interactive UI systems.",
    year: "2023 - 2024",
    color: "from-[#00C2FF] to-[#4B83FF]",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Frontend Development Deep Dive",
    company: "Real Project Building",
    description:
      "Built real-world frontend projects using React, Tailwind and modern UI architecture systems.",
    year: "2024 - 2025",
    color: "from-[#10B981] to-[#34D399]",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Advanced Learning Phase",
    company: "Next.js & Modern Stack",
    description:
      "Currently mastering Next.js, APIs, authentication and full-stack development workflows.",
    year: "2025 - Present",
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
];

const Experience = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 overflow-hidden">
      {/* BACKGROUND (MATCH SYSTEM) */}
      <div className="absolute top-10 -left-20 w-[300px] h-[300px] bg-[#5B4BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#7B70FF]/15 blur-[120px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <p className="text-sm font-semibold text-[#5B4BFF] mb-2">
          My Experience
        </p>

        <h2 className="text-[34px] md:text-[48px] font-bold text-[#111] mb-4">
          Learning & Development Journey
        </h2>

        <p className="text-gray-600 leading-[30px] max-w-[750px]">
          My journey started from curiosity and evolved into building real-world
          scalable frontend systems with modern technologies.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-[22px] top-0 h-full w-[2px] bg-[#ecebff]" />

        <div className="space-y-10">
          {experiences.map((itemData, i) => (
            <motion.div
              key={itemData.id}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative flex flex-col md:flex-row gap-6 md:gap-8"
            >
              {/* ICON */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  className={`w-[50px] h-[50px] rounded-full bg-gradient-to-br ${itemData.color} text-white flex items-center justify-center shadow-lg text-[18px]`}
                >
                  {itemData.icon}
                </motion.div>
              </div>

              {/* CARD */}
              <div className="flex-1 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[28px] p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(91,75,255,0.12)] transition">
                {/* HEADER */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-[22px] md:text-[26px] font-bold text-[#111]">
                      {itemData.title}
                    </h3>

                    <p className="text-[#5B4BFF] font-semibold text-sm mt-1">
                      {itemData.company}
                    </p>
                  </div>

                  <div className="px-5 py-2 rounded-full bg-[#f5f3ff] text-[#5B4BFF] text-sm font-semibold w-fit">
                    {itemData.year}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-[30px] text-sm md:text-[15px]">
                  {itemData.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-14 bg-gradient-to-r from-[#f8f7ff] to-white border border-[#eee] rounded-[28px] p-7"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-[24px] font-bold text-[#111] mb-2">
              Frontend Developer Journey
            </h3>

            <p className="text-gray-600 leading-[30px] max-w-[700px]">
              Focused on mastering modern frontend architecture and becoming a
              professional full-stack developer.
            </p>
          </div>

          <div className="h-[52px] px-6 rounded-2xl bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] text-white font-semibold flex items-center shadow-lg whitespace-nowrap">
            Open To Opportunities
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
