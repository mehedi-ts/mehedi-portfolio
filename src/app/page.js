import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Banner></Banner>
      <About></About>
    </main>
  );
}
