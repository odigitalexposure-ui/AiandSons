import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection/>
      <Services />
      <Gallery/>
      <ContactSection/>
    </>
  );
};

export default Home;