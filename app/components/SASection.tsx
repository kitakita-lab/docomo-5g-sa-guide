"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function SADiagram() {
  return (
    <div className="w-full max-w-xs mx-auto select-none">
      <div className="flex flex-col items-center mb-2">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 border border-red-200">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            <rect x="18" y="2" width="4" height="16" rx="2" fill="#e60012"/>
            <path d="M6 5 Q20 -2 34 5" stroke="#e60012" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M10 9 Q20 3 30 9" stroke="#e60012" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M13 13 Q20 8 27 13" stroke="#e60012" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <rect x="16" y="18" width="8" height="14" rx="1" fill="#fca5a5"/>
            <rect x="12" y="32" width="16" height="4" rx="1" fill="#fecaca"/>
          </svg>
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-red-600 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-red-100">5G NR</span>
        </div>
        <p className="text-[10px] text-gray-400 mt-1">5G 無線</p>
      </div>

      <div className="flex justify-center my-1 gap-5">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="10" height="24" viewBox="0 0 10 24" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="5" y1="0" x2="5" y2="18" stroke="#e60012" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M1 14 L5 22 L9 14" stroke="#e60012" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      <p className="text-center text-[10px] text-red-500 font-semibold mb-1">すべて5G制御</p>

      <div className="relative rounded-2xl border border-red-200 bg-red-50 p-3">
        <div className="absolute -top-2.5 left-3 bg-white px-2 py-0.5 text-[10px] font-bold text-red-600 border border-red-100 rounded">
          5G コアネットワーク（5GC）
        </div>
        <div className="flex items-center justify-center gap-2 mt-0.5">
          {[{ label: "AMF", sub: "制御" }, { label: "SMF", sub: "セッション" }, { label: "UPF", sub: "転送" }].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-11 h-9 rounded-lg bg-red-200 border border-red-100 flex items-center justify-center text-xs font-bold text-red-700">{label}</div>
              <p className="text-[9px] text-red-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2.5 border-t border-red-100 space-y-1">
          {[
            { label: "動画・SNS用", color: "bg-red-400", w: "w-3/5" },
            { label: "ゲーム優先", color: "bg-orange-400", w: "w-2/5" },
            { label: "その他", color: "bg-red-200", w: "w-1/2" },
          ].map(({ label, color, w }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`h-1 ${w} ${color} rounded-full`} />
              <span className="text-[9px] text-red-400">{label}</span>
            </div>
          ))}
          <p className="text-[9px] text-red-300 pt-0.5">▲ 用途別 専用レーン</p>
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] text-gray-400">
        無線もコアもすべて5G ／ 用途別に通信を整理できる
      </p>
    </div>
  );
}

const benefits = [
  {
    icon: "👥",
    title: "混雑時も安定してつながる",
    desc: "ライブ・フェス会場でも、用途ごとに整理されるため安定しやすい。",
  },
  {
    icon: "🎮",
    title: "ゲームの操作がサクサク",
    desc: "遅延が大幅に抑えられ、操作とゲーム反応のラグが小さくなる。",
  },
  {
    icon: "📹",
    title: "動画・ライブ配信が途切れない",
    desc: "バッファリングが起きにくくなり、「くるくる」が減る。",
  },
  {
    icon: "📞",
    title: "通話・ビデオ通話が安定",
    desc: "混雑した場所でも声が途切れにくくなる。",
  },
];

export default function SASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sa" className="py-28 px-6 bg-gray-50" ref={ref}>
      <div className={`max-w-3xl mx-auto transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}>

        {/* section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium mb-5 tracking-widest uppercase">
            Section 02
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            SA（スタンドアローン）とは？
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto leading-relaxed">
            <span className="text-red-600 font-semibold">土台から全部新築</span>したイメージ。
            5Gを本格活用するための次世代構成。無線もコアも全部5G専用で設計されています。
          </p>
        </div>

        {/* diagram + metaphor */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-14">

          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-xs text-gray-400 text-center mb-5 tracking-wide uppercase">ネットワーク構成図</p>
              <SADiagram />
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-gray-700 mb-1.5">🏢 たとえ話：完全新築ビル</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                土台から設計した最新ビルに、最新の通信設備を完備。
                「エレベーター専用」「宅配専用」のように用途ごとに経路が整理されている。
              </p>
            </div>

            {/* consumer impact grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { emoji: "👥", label: "混雑時の安定性", value: "混雑でも安定" },
                { emoji: "🎮", label: "ゲームの反応", value: "ゲームが快適" },
                { emoji: "📹", label: "動画の途切れ", value: "配信が止まりにくい" },
                { emoji: "📞", label: "通話品質", value: "通話がクリア" },
              ].map(({ emoji, label, value }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-red-50">
                  <div className="text-xl mb-0.5">{emoji}</div>
                  <div className="font-bold text-sm text-red-500">{value}</div>
                  <div className="text-[10px] text-red-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* consumer benefits */}
        <div className={`mb-3 ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
          <h3 className="text-base font-semibold text-gray-700 text-center mb-2">SAで変わる、あなたの体験</h3>
          <p className="text-xs text-gray-400 text-center mb-8">専門知識ゼロでも実感できること</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex gap-3 p-5 rounded-2xl bg-white border border-gray-100 hover:-translate-y-0.5 hover:shadow-sm transition duration-200
                ${isVisible ? `animate-fade-in-up delay-${(i + 3) * 100}` : "opacity-0"}`}
            >
              <div className="text-2xl shrink-0">{b.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">{b.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* tech footnote — 控えめに */}
        <div className={`flex flex-wrap gap-3 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <span className="text-xs text-gray-300 self-center">技術背景：</span>
          {[
            { icon: "🔪", label: "ネットワークスライシング", desc: "用途ごとに仮想レーンを確保" },
            { icon: "⏱️", label: "超低遅延（1ms級）", desc: "自動運転・遠隔医療にも応用可能" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-xs text-gray-400">
              <span>{t.icon}</span>
              <span>{t.label} — {t.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
