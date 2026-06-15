import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import ExtraServices from "@/components/ExtraServices";
import CalculatorSection from "@/components/CalculatorSection";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Advantages />
        <Services />
        <ExtraServices />
        <CalculatorSection />
        <Trust />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <Team />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}