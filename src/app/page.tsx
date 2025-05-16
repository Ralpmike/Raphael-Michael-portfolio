import About from "../components/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/project";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
