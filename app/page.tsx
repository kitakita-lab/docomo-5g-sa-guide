import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import NSASection from "./components/NSASection";
import SASection from "./components/SASection";
import ComparisonSection from "./components/ComparisonSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <NSASection />
        <SASection />
        <ComparisonSection />
        <FAQSection />
      </main>
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">
          5G SA 入門ガイド — 「速さ」より「安定」の5Gへ
        </p>
      </footer>
    </>
  );
}
