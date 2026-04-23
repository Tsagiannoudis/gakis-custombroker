import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import Procedures from "@/components/home/Procedures";
import ContactSection from "@/components/home/ContactSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUs />
      <Procedures />
      <ContactSection />
      {/* Μπορείς να προσθέσεις εδώ ένα AboutSection ή Testimonials αργότερα */}
    </>
  );
}
