"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "あるある" },
  { id: "nsa", label: "NSAとは" },
  { id: "sa", label: "SAとは" },
  { id: "comparison", label: "比較" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
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
      <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900 text-sm shrink-0">
          <span className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white text-xs font-bold">5G</span>
          SA ガイド
        </a>

        {/* 横スクロール対応 */}
        <div className="flex items-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${active === id
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
