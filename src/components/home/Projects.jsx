"use client";

import Image from "next/image";
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    image: "/images/project-1.png",
    description:
      "A productivity platform to manage tasks, projects and team collaboration efficiently.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "TravelGo",
    image: "/images/project-2.png",
    description:
      "Modern travel booking platform with beautiful UI and smooth experience.",
    tags: ["React", "Redux", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "ShopEase",
    image: "/images/project-3.png",
    description:
      "E-commerce platform with cart, payments and admin dashboard system.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 overflow-hidden">
      {/* BACKGROUND GLOW (MATCH SYSTEM) */}
      <div className="absolute top-10 -left-20 w-[300px] h-[300px] bg-[#5B4BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[300px] h-[300px] bg-[#7B70FF]/15 blur-[120px] rounded-full" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between flex-wrap gap-6 mb-14"
      >
        <div>
          <p className="text-sm font-semibold text-[#5B4BFF] mb-2">
            Featured Projects
          </p>

          <h2 className="text-[34px] md:text-[48px] font-bold text-[#111]">
            My Recent Work
          </h2>
        </div>

        <button className="flex items-center gap-2 text-[#5B4BFF] font-semibold group">
          View All Projects
          <FaArrowRight className="group-hover:translate-x-1 transition" />
        </button>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden">
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-[#5B4BFF] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  Featured
                </div>
              )}

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#f5f3ff] text-[#5B4BFF] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h3 className="text-[26px] font-bold text-[#111] group-hover:text-[#5B4BFF] transition">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-[28px] mt-3 mb-6">
                {project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  className="flex-1 h-[50px] rounded-2xl bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] text-white flex items-center justify-center gap-2 font-semibold hover:scale-[1.03] transition"
                >
                  Live Demo
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <a
                  href={project.github}
                  className="w-[52px] h-[50px] rounded-2xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
