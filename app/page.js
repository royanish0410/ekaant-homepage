import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import LocationSection from "./components/Location";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </>
  );
}
