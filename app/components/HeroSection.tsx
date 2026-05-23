"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-20">
      {/* background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e60012 1px, transparent 1px), linear-gradient(to right, #e60012 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* animated signal rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-red-600 opacity-0"
            style={{
              width: `${i * 120}px`,
              height: `${i * 120}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: `signalPulseRing ${2 + i * 0.5}s ease-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes signalPulseRing {
          0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
          5G SA 入門ガイド
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
          5G SAで
          <br />
          <span className="text-red-600">通信の土台</span>が
          <br />
          進化する
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
          「爆速」だけじゃない。NSAとSAの違いを図解で理解し、
          次世代ネットワークの本質を掴もう。
        </p>

        <a
          href="#nsa"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-semibold text-lg shadow-lg hover:bg-red-700 transition-colors"
        >
          学習をはじめる
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
