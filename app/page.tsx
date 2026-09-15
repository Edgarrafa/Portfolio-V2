import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div className="">
      {/* NAVIGATION */}
      <Navigation />
      {/* HOME */}
      <Hero />
      {/* EXPERIENCE */}
      <Experience />
      {/* PROJECTS */}
      <Projects />
      {/* SKILLS */}
      <Skills />
      {/* CONTACT */}
      <Contact />
      <Footer />
    </div>
  );
}
