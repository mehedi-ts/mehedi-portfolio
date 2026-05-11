"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

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

const Contact = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 -left-20 w-[320px] h-[320px] bg-[#5B4BFF]/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-20 w-[320px] h-[320px] bg-[#7B70FF]/15 blur-[120px] rounded-full" />

      {/* WRAPPER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.06)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
          {/* LEFT SIDE */}
          <motion.div
            variants={item}
            className="relative bg-gradient-to-br from-[#f7f5ff] via-white to-[#f3f1ff] p-8 md:p-10 border-r border-white/60"
          >
            {/* HEADER */}
            <p className="text-sm font-semibold text-[#5B4BFF] mb-3">
              Contact Me
            </p>

            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] text-[#111] mb-6">
              Let’s Work <br /> Together
            </h2>

            <p className="text-gray-600 leading-[30px] text-sm mb-10">
              Have a project idea or collaboration? Feel free to contact
              anytime.
            </p>

            {/* INFO */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-[54px] h-[54px] rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#5B4BFF] shadow-sm">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <h4 className="font-semibold text-[#111]">
                    mehedi@gmail.com
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[54px] h-[54px] rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#5B4BFF] shadow-sm">
                  <FaPaperPlane />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <h4 className="font-semibold text-[#111]">Bangladesh</h4>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, hover: "hover:bg-black" },
                { icon: <FaLinkedinIn />, hover: "hover:bg-[#0077B5]" },
                { icon: <FaFacebookF />, hover: "hover:bg-[#1877F2]" },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`w-[48px] h-[48px] rounded-full border border-gray-200 flex items-center justify-center text-gray-700 ${item.hover} hover:text-white transition`}
                >
                  {item.icon}
                </motion.button>
              ))}
            </div>

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[220px] h-[220px] bg-[#5B4BFF]/10 blur-[90px] rounded-full" />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div variants={item} className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <Input label="Your Name" placeholder="Enter your name" />
              <Input label="Your Email" placeholder="Enter your email" />
            </div>

            <Input label="Subject" placeholder="Project discussion" />

            <div className="mt-5">
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-gray-200 p-5 outline-none resize-none focus:border-[#5B4BFF] transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-7 h-[58px] px-8 rounded-2xl bg-gradient-to-r from-[#5B4BFF] to-[#7B70FF] text-white font-semibold flex items-center gap-3 shadow-lg"
            >
              Send Message
              <FaPaperPlane className="group-hover:translate-x-1 transition" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* INPUT COMPONENT */
const Input = ({ label, placeholder }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-3 block">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="w-full h-[56px] rounded-2xl border border-gray-200 px-5 outline-none focus:border-[#5B4BFF] transition"
      />
    </div>
  );
};

export default Contact;
