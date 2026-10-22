import About from "./_Components/About";
import Contact from "./_Components/Contact";
import Footer from "./_Components/Footer";
import Header from "./_Components/Header";
import Projects from "./_Components/Projects";
import Skills from "./_Components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
