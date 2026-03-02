import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import Container from "@/components/Common/Layout/Container";

export default function Home() {
  return (
    <main className="w-full flex-col flex min-h-screen relative">
      <HeroSection />
      <AboutSection />

      {/* Other sections that need a contained width will go inside Container below */}

    </main>
  );
}
