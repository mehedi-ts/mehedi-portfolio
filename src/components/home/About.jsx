"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* COUNTER COMPONENT (JS ONLY) */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(value.replace(/\D/g, "")) || 0;

    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(10, Math.floor(duration / (end || 1)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {value.includes("+") ? "+" : ""}
      {value.includes("%") ? "%" : ""}
    </span>
  );
};

const About = () => {
  const features = [
    "Clean & Modern Code",
    "Pixel Perfect UI Design",
    "High Performance Web Apps",
    "Mobile First Responsive",
  ];

  const stats = [
    { value: "15+", title: "Projects Completed" },
    { value: "10+", title: "Happy Clients" },
    { value: "100%", title: "Client Satisfaction" },
    { value: "2+", title: "Years Experience" },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 overflow-hidden">
      {/* BACKGROUND (MATCH HERO STYLE) */}
      <div className="absolute top-10 -left-20 w-[280px] h-[280px] bg-[#5B4BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[280px] h-[280px] bg-[#7B70FF]/15 blur-[120px] rounded-full" />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[36px] p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-10 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#5B4BFF]/10 blur-[60px] rounded-[30px]" />

            <div className="relative rounded-[30px] overflow-hidden">
              <Image
                src="/images/mehedi.png"
                alt="Mehedi"
                width={400}
                height={500}
                className="w-full object-cover hover:scale-105 transition duration-700"
              />

              {/* FLOAT CARD */}
              <motion.div
                whileHover={{ y: -3 }}
                className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl px-5 py-4 flex items-center gap-4 shadow-lg"
              >
                <h3 className="text-[34px] font-bold text-[#5B4BFF] leading-none">
                  <Counter value="2+" />
                </h3>

                <div>
                  <p className="text-sm font-semibold text-[#111]">Years</p>
                  <p className="text-xs text-gray-500">Learning Journey</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CENTER CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-3 bg-[#f5f3ff] border border-[#e8e6ff] px-5 py-2.5 rounded-full mb-6">
              <span className="w-2.5 h-2.5 bg-[#5B4BFF] rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-[#5B4BFF]">About Me</p>
            </div>

            {/* TITLE */}
            <h2 className="text-[34px] md:text-[48px] font-bold leading-[1.1] text-[#111]">
              Passionate Frontend
              <br />
              <span className="text-[#5B4BFF]">Developer</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-[32px] text-[16px] max-w-[600px]">
              I’m Mehedi, a frontend developer passionate about building modern,
              scalable and high-performance web applications with clean
              architecture and smooth user experience.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5B4BFF] group-hover:scale-125 transition" />
                  <p className="text-gray-600 text-sm">{f}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#5B4BFF]/5 blur-[60px] rounded-[30px]" />

            <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[30px] p-7 shadow-lg">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    className="text-center"
                  >
                    <h3 className="text-[38px] font-bold text-[#5B4BFF]">
                      <Counter value={s.value} />
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">{s.title}</p>
                  </motion.div>
                ))}
              </div>

              {/* BUTTON */}
              <button className="mt-8 w-full h-[56px] rounded-2xl bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] text-white font-semibold hover:scale-[1.02] transition">
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
