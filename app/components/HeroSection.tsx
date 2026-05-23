"use client";

import { useState, useEffect, useCallback } from "react";

const copies = [
  {
    kicker: "5G SA 入門ガイド",
    heading: (
      <>
        人混みでも、
        <br />
        <span className="text-red-600">つながりやすく</span>。
      </>
    ),
    sub: "ライブ会場も、花火大会も、駅のホームも。5Gの進化は「爆速」より「どこでも安定」に向かっています。",
    label: "A",
  },
  {
    kicker: "5G SA 入門ガイド",
    heading: (
      <>
        速さだけじゃない。
        <br />
        <span className="text-red-600">安定性</span>の5Gへ。
      </>
    ),
    sub: "5G SAは「速い」よりも「混んでいても使える」を目指した、次世代の通信の仕組みです。",
    label: "B",
  },
  {
    kicker: "5G SA 入門ガイド",
    heading: (
      <>
        混雑に強い
        <br />
        <span className="text-red-600">5G</span>へ。
      </>
    ),
    sub: "人が集まる場所でも、あなたのスマホがちゃんとつながる。5G SAはその実現を目指しています。",
    label: "C",
  },
  {
    kicker: "5G SA 入門ガイド",
    heading: (
      <>
        ライブでも、
        <br />
        ゲームでも。
        <br />
        <span className="text-red-600">5Gは整理上手</span>に。
      </>
    ),
    sub: "通信の「渋滞」をなくす新しい仕組み。それが5G SAです。",
    label: "D",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 250);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % copies.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const copy = copies[current];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-20">
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#e60012 1px, transparent 1px), linear-gradient(to right, #e60012 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* pulse rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-red-400"
            style={{
              width: `${i * 130}px`,
              height: `${i * 130}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.5)",
              opacity: 0,
              animation: `heroRing ${2.5 + i * 0.6}s ease-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroRing {
          0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.5; }
          100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* copy */}
      <div
        className="relative z-10 text-center max-w-2xl mx-auto animate-fade-in-up"
        style={{ transition: "opacity 0.25s ease", opacity: fading ? 0 : 1 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
          {copy.kicker}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
          {copy.heading}
        </h1>

        <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
          {copy.sub}
        </p>

        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-base shadow-lg hover:bg-red-700 active:scale-95 transition-all"
        >
          あるある体験を見る
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* copy variant selector */}
      <div className="relative z-10 flex items-center gap-3 mt-12">
        <span className="text-xs text-gray-300 mr-1">コピー案</span>
        {copies.map((c, i) => (
          <button
            key={c.label}
            onClick={() => goTo(i)}
            className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all border
              ${i === current
                ? "bg-red-600 text-white border-red-600 scale-110"
                : "bg-white text-gray-400 border-gray-200 hover:border-red-300 hover:text-red-400"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
