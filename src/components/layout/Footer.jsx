"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0b0b12] via-[#0f0f18] to-[#0b0b12] rounded-[32px] border border-[#1d1d26]">
        {/* GLOWS */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#5B4BFF]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#7B70FF]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 px-6 md:px-10 lg:px-14 py-12 md:py-14">
          {/* TOP */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12 border-b border-[#232330]">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[#5B4BFF] to-[#7B70FF] flex items-center justify-center text-white font-bold text-[20px] shadow-lg">
                  M
                </div>

                <div>
                  <h2 className="text-[24px] font-bold text-white">
                    Mehedi Hassan
                  </h2>
                  <p className="text-[#9ca3af] text-sm">Frontend Developer</p>
                </div>
              </div>

              <p className="text-[#9ca3af] leading-[30px] text-[15px] max-w-[420px] mb-8">
                Passionate frontend developer focused on modern, scalable and
                user-friendly web applications with clean UI and smooth UX.
              </p>

              <div className="flex items-center gap-4">
                {[
                  {
                    icon: <FaGithub />,
                    color: "hover:bg-white hover:text-black",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    color: "hover:bg-[#0077B5] hover:text-white",
                  },
                  {
                    icon: <FaFacebookF />,
                    color: "hover:bg-[#1877F2] hover:text-white",
                  },
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`w-[50px] h-[50px] rounded-2xl bg-[#17171f] border border-[#262633] text-[#d1d5db] flex items-center justify-center transition duration-300 ${item.color}`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-white text-[20px] font-semibold mb-7">
                Quick Links
              </h3>

              <div className="flex flex-col gap-5">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-[#9ca3af] hover:text-white transition"
                    >
                      {item}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* INFO */}
            <div>
              <h3 className="text-white text-[20px] font-semibold mb-7">
                Contact Info
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="text-[#6b7280] text-sm mb-2">Email</p>
                  <h4 className="text-[#d1d5db] font-medium">
                    mehedi@gmail.com
                  </h4>
                </div>

                <div>
                  <p className="text-[#6b7280] text-sm mb-2">Location</p>
                  <h4 className="text-[#d1d5db] font-medium">Bangladesh</h4>
                </div>

                <div>
                  <p className="text-[#6b7280] text-sm mb-2">Availability</p>
                  <h4 className="text-green-400 font-medium">
                    Available For Work
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[#6b7280] text-[15px] flex items-center gap-2 text-center md:text-left">
              © 2026 Mehedi Hassan. Made with
              <FaHeart className="text-[#ff4d6d]" />
              using Next.js & Tailwind CSS
            </p>

            {/* BACK TO TOP */}
            <button
              onClick={scrollToTop}
              className="group w-[56px] h-[56px] rounded-2xl bg-gradient-to-br from-[#5B4BFF] to-[#7B70FF] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(91,75,255,0.30)] hover:scale-105 active:scale-95 transition"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
