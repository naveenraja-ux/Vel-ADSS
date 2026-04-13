import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Materials from "./components/Materials";
import CustomWoodwork from "./components/CustomWoodwork";
import FurnitureSolutions from "./components/FurnitureSolutions";
import DoorsWindows from "./components/DoorsWindows";
import Maintenance from "./components/Maintenance";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Materials />
        <CustomWoodwork />
        <FurnitureSolutions />
        <DoorsWindows />
        <Maintenance />
        <Portfolio />
        <Process />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
