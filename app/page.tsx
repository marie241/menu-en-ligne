import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Benefits from "./components/Benefits";
import CTASection from "./components/CTASection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <HowItWorks />
        <Pricing />
        <Benefits />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
