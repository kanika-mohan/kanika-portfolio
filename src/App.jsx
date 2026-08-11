import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Internships from "./sections/Internship";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
      </main>

      <AIChat />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;