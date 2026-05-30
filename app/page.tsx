import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Philosophy from "@/components/Philosophy";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Configurator from "@/components/Configurator";
import Hygiene from "@/components/Hygiene";
import Guarantee from "@/components/Guarantee";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Philosophy />
        <Pricing />
        <Services />
        <Configurator />
        <Hygiene />
        <Guarantee />
        <Gallery />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Location />
      </main>
      <Footer />
    </>
  );
}
