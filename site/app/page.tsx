import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Frameworks from "@/components/Frameworks";
import Spectrum from "@/components/Spectrum";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import Talks from "@/components/Talks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <div className="relative">
        <Nav />
        <Hero />
      </div>
      <About />
      <Frameworks />
      <Spectrum />
      <Services />
      <Work />
      <Writing />
      <Talks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
