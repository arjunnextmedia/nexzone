import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import Container from "@/components/Common/Layout/Container";
import ServiceSection from "@/components/Home/ServiceSection";
import AdditionalServices from "@/components/Home/AdditionalServices";
import WhyChooseSection from "@/components/Home/WhyChooseSection";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <AdditionalServices />
      <WhyChooseSection />
    </main>
  );
}
