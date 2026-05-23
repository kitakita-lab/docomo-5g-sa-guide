"use client";

import { useState } from "react";

const copies = [
  // 「安定性」を先頭固定・初期表示
  {
    heading: (
      <>
        速さだけじゃない。<br />
        <span className="text-red-600">安定性</span>の5Gへ。
      </>
    ),
    sub: "5G SAは「速い」よりも「混んでいても使える」を目指した、次世代の通信の仕組みです。",
    theme: "安定性",
  },
  {
    heading: (
      <>
        混雑に強い<br />
        <span className="text-red-600">5G</span>へ。
      </>
    ),
    sub: "人が集まる場所でも、あなたのスマホがちゃんとつながる。5G SAはその実現を目指しています。",
    theme: "混雑対策",
  },
  {
    heading: (
      <>
        人混みでも、<br />
        <span className="text-red-600">つながりやすく</span>。
      </>
    ),
    sub: "ライブ会場も、花火大会も、駅のホームも。5Gの進化は「爆速」より「どこでも安定」に向かっています。",
    theme: "人混み",
  },
  {
    heading: (
      <>
        ライブでも、ゲームでも。<br />
        <span className="text-red-600">5Gは整理上手</span>に。
      </>
    ),
    sub: "通信の「渋滞」をなくす新しい仕組み。それが5G SAです。",
    theme: "ゲーム",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0); // 「安定性」が先頭で初期表示
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 220);
  };

  const copy = copies[current];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* grid bg — Hero のみ・空気感レベル */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(#e60012 1px, transparent 1px), linear-gradient(to right, #e60012 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* pulse rings — 薄く、文字を邪魔しない */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-gray-200"
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
          0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0.2; }
          100% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* copy */}
      <div
        className="relative z-10 text-center max-w-xl mx-auto animate-fade-in-up"
        style={{ transition: "opacity 0.22s ease", opacity: fading ? 0 : 1 }}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />
          5G SA 入門ガイド
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug tracking-tight text-gray-900 mb-6">
          {copy.heading}
        </h1>

        <p className="text-base text-gray-400 leading-normal mb-10 max-w-md mx-auto">
          {copy.sub}
        </p>

        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-700 active:scale-95 transition-all"
        >
          あるある体験を見る
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* theme pills */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-12 flex flex-wrap gap-2 justify-center">
        {copies.map((c, i) => (
          <button
            key={c.theme}
            onClick={() => goTo(i)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all
              ${i === current
                ? "bg-red-600 text-white border border-red-600"
                : "bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
              }`}
          >
            {c.theme}
          </button>
        ))}
      </div>

      {/* scroll hint — 空気レベル */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-gray-300 tracking-widest uppercase">Scroll</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1l6 6 6-6" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
