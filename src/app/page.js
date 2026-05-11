import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </main>
  );
}
