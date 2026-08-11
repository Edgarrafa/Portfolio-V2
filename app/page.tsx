import Image from "next/image";
import { cn } from "@/lib/utils";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="">
      {/* NAVIGATION */}
      <nav></nav>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <ParticlesBackground />
      </section>
      {/* ABOUT */}
      <section className=""></section>
      {/* EXPERIENCE */}
      <section></section>
      {/* PROJECTS */}
      <section></section>
      {/* SKILLS */}
      <section></section>
      {/* CONTACT */}
      <section></section>
      <footer>
      </footer>
    </div>
  );
}
