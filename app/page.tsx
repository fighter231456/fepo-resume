// app/page.tsx
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 pt-32 sm:pt-40">
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. SKILLS SECTION */}
      <Skills />

      {/* 4. PROJECTS SECTION */}
      <Projects />

      {/* 5. EXPERIENCE SECTION */}
      <Experience />

      {/* 6. CONTACT SECTION */}
      <Contact /> 

    </main>
  );
}