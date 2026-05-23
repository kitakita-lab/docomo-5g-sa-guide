"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "あるある" },
  { id: "nsa", label: "NSAとは" },
  { id: "sa", label: "SAとは" },
  { id: "comparison", label: "比較" },
  { id: "faq", label: "FAQ" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    // 常にページ最上部から開始: scroll restoration を無効化し hash をクリア
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);

    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      for (const { id } of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"}`}
    >
      <div className="h-14 flex items-center max-w-4xl mx-auto w-full">
        {/* logo — shrink-0で常に表示 */}
        <div className="pl-4 pr-3 shrink-0">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
            <span className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white text-xs font-bold">5G</span>
            SA ガイド
          </a>
        </div>

        {/* 区切り線 */}
        <div className="h-4 w-px bg-gray-200 shrink-0" />

        {/* tabs — 横スクロール */}
        <div className="flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-center gap-x-3 px-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`shrink-0 whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-colors
                  ${active === id
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
