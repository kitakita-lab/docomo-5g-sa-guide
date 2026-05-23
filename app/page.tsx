import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import NSASection from "./components/NSASection";
import SASection from "./components/SASection";
import ComparisonSection from "./components/ComparisonSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <NSASection />
        <SASection />
        <ComparisonSection />
      </main>
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">
          5G SA 入門ガイド — 通信の土台の進化を理解する
        </p>
      </footer>
    </>
  );
}
