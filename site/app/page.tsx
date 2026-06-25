import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
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
      <Work />
      <Services />
      <Writing />
      <Talks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
