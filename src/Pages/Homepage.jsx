import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import BackToTop from '../Components/BackToTop';

const Homepage = () => {
  return (
    <>
      <Hero />
      <BackToTop />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
