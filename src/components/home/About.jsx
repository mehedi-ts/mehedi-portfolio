import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
      <div className="bg-white border border-[#f1f1f1] rounded-4xl p-5 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-8 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-[#f4f2ff] to-[#e8e4ff] h-full">
              <Image
                src="/images/mehedi.png"
                alt="Mehedi"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />

              {/* EXPERIENCE CARD */}
              <div className="absolute bottom-5 left-5 bg-white shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3">
                <h3 className="text-[34px] font-bold text-[#5B4BFF] leading-none">
                  2+
                </h3>

                <div>
                  <p className="text-sm font-semibold text-[#111]">Years</p>

                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div>
            <p className="text-[15px] font-semibold text-[#5B4BFF] mb-2">
              About Me
            </p>

            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-[#111] mb-5">
              Passionate Frontend <br />
              Developer
            </h2>

            <p className="text-[#6b7280] leading-7.5 text-[15px] mb-8 max-w-155">
              I’m Mehedi, a passionate Frontend Developer with 2+ years of
              experience building beautiful, functional, and responsive web
              applications. I love turning ideas into reality using modern
              technologies. I focus on writing clean, maintainable code and
              creating seamless user experiences.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-[#695CFF] flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#695CFF] rounded-full"></span>
                </div>

                <p className="text-[15px] font-medium text-[#444]">
                  Clean & Modern Code
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-[#695CFF] flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#695CFF] rounded-full"></span>
                </div>

                <p className="text-[15px] font-medium text-[#444]">
                  Pixel Perfect Design
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-[#695CFF] flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#695CFF] rounded-full"></span>
                </div>

                <p className="text-[15px] font-medium text-[#444]">
                  Fast & Performance
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-[#695CFF] flex items-center justify-center">
                  <span className="w-2 h-2 bg-[#695CFF] rounded-full"></span>
                </div>

                <p className="text-[15px] font-medium text-[#444]">
                  Responsive & Mobile First
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="border border-[#ececec] rounded-[28px] p-6">
            <div className="grid grid-cols-2 gap-y-8">
              <div>
                <h3 className="text-[38px] font-bold text-[#5B4BFF]">15+</h3>

                <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-[38px] font-bold text-[#111]">10+</h3>

                <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-[38px] font-bold text-[#5B4BFF]">100%</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-[38px] font-bold text-[#111]">2+</h3>

                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-8 h-13.5 rounded-2xl border border-[#e9e9e9] text-[#5B4BFF] font-semibold hover:bg-[#5B4BFF] hover:text-white duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
