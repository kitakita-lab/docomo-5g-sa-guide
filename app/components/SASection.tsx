"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function SADiagram() {
  return (
    <div className="w-full max-w-sm mx-auto select-none">
      <div className="flex flex-col items-center mb-2">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-red-50 border-2 border-red-300 shadow-sm">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="18" y="2" width="4" height="16" rx="2" fill="#e60012"/>
            <path d="M6 5 Q20 -2 34 5" stroke="#e60012" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M10 9 Q20 3 30 9" stroke="#e60012" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M13 13 Q20 8 27 13" stroke="#e60012" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <rect x="16" y="18" width="8" height="14" rx="1" fill="#fca5a5"/>
            <rect x="12" y="32" width="16" height="4" rx="1" fill="#fecaca"/>
          </svg>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-red-200">5G NR</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">5G 無線</div>
      </div>

      <div className="flex justify-center my-1 gap-6">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="28" viewBox="0 0 12 28" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="6" y1="0" x2="6" y2="20" stroke="#e60012" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M2 16 L6 24 L10 16" stroke="#e60012" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      <div className="text-center text-xs text-red-600 font-semibold mb-1">すべて5G制御</div>

      <div className="relative rounded-2xl border-2 border-red-300 bg-red-50 p-4 shadow-sm">
        <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-xs font-bold text-red-600 border border-red-300 rounded">
          5G コアネットワーク（5GC）
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          {[{ label: "AMF", sub: "制御" }, { label: "SMF", sub: "セッション" }, { label: "UPF", sub: "転送" }].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-12 h-10 rounded-lg bg-red-200 border border-red-300 flex items-center justify-center text-xs font-bold text-red-800">{label}</div>
              <div className="text-[10px] text-red-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
        {/* lane visualization */}
        <div className="mt-3 pt-3 border-t border-red-200 space-y-1.5">
          {[
            { label: "動画・SNS用", color: "bg-red-400", w: "w-3/5" },
            { label: "ゲーム優先", color: "bg-orange-400", w: "w-2/5" },
            { label: "その他", color: "bg-red-200", w: "w-1/2" },
          ].map(({ label, color, w }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`h-1.5 ${w} ${color} rounded-full`} />
              <span className="text-[9px] text-red-500">{label}</span>
            </div>
          ))}
          <div className="text-[9px] text-red-400 font-semibold pt-0.5">▲ 用途別 専用レーン</div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
        ▲ 無線もコアもすべて5G<br/>
        用途ごとに専用レーンを確保できる
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: "👥",
    title: "混雑時も安定してつながる",
    desc: "ライブ会場やフェスでも、用途ごとに通信を整理できるため、人が集まる場所でも安定しやすい。",
    badge: "体感改善",
    badgeColor: "bg-red-100 text-red-600",
    priority: 1,
  },
  {
    icon: "🎮",
    title: "ゲームの操作がサクサク",
    desc: "遅延を大幅に抑えられるため、オンラインゲームでボタンを押してから反応するまでのラグが小さくなる。",
    badge: "体感改善",
    badgeColor: "bg-red-100 text-red-600",
    priority: 2,
  },
  {
    icon: "📹",
    title: "動画・ライブ配信が途切れない",
    desc: "動画視聴や配信において、バッファリングが起きにくくなる。イベント会場での「くるくる」が減る。",
    badge: "体感改善",
    badgeColor: "bg-red-100 text-red-600",
    priority: 3,
  },
  {
    icon: "📞",
    title: "通話・ビデオ通話が安定",
    desc: "音声通話やビデオ通話の安定性が向上。混雑した場所でも声が途切れにくくなる。",
    badge: "体感改善",
    badgeColor: "bg-rose-100 text-rose-600",
    priority: 4,
  },
];

const techDetails = [
  { icon: "🔪", label: "ネットワークスライシング", desc: "用途ごとに仮想レーンを確保" },
  { icon: "⏱️", label: "超低遅延（1ms級）", desc: "自動運転・遠隔医療にも応用可能" },
];

export default function SASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sa" className="py-20 px-4 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">

        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4 border border-red-200">
            Section 02
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SA（スタンドアローン）とは？
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-semibold text-red-600">土台から全部新築</span>したイメージ。
            5Gの無線もコアも全部5G専用。混雑に強く、用途ごとに通信を整理できる。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">

          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 border border-red-100">
              <div className="text-sm font-semibold text-slate-500 mb-6 text-center tracking-wide uppercase">ネットワーク構成図</div>
              <SADiagram />
            </div>
          </div>

          <div className={`space-y-4 ${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6">
              <div className="text-2xl mb-3">🏢</div>
              <div className="text-base font-semibold text-red-800 mb-2">たとえ話：完全新築ビル</div>
              <p className="text-sm text-red-700 leading-relaxed">
                土台から設計した最新ビル（5GC）に、最新の通信設備（5G NR）を完備。
                「エレベーター専用」「宅配専用」のように、用途ごとに経路が整理されている。
              </p>
            </div>

            {/* everyday impact stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: "👥", label: "混雑時の安定性", value: "UP", color: "bg-red-50 text-red-600 border-red-200" },
                { emoji: "🎮", label: "ゲームの反応速度", value: "速くなる", color: "bg-orange-50 text-orange-600 border-orange-200" },
                { emoji: "📹", label: "動画の途切れ", value: "減る", color: "bg-rose-50 text-rose-600 border-rose-200" },
                { emoji: "📞", label: "通話の安定性", value: "向上", color: "bg-pink-50 text-pink-600 border-pink-200" },
              ].map(({ emoji, label, value, color }) => (
                <div key={label} className={`text-center p-3 rounded-xl border ${color}`}>
                  <div className="text-xl mb-0.5">{emoji}</div>
                  <div className="font-bold text-sm">{value}</div>
                  <div className="text-[10px] mt-0.5 opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* consumer benefits */}
        <div className={`mb-6 ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">SAで変わる、あなたの体験</h3>
          <p className="text-xs text-gray-400 text-center mb-4">専門知識ゼロでも実感できること</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${(i + 3) * 100}` : "opacity-0"}`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl shrink-0">{b.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <div className="font-semibold text-gray-800 text-sm">{b.title}</div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${b.badgeColor}`}>
                      {b.badge}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{b.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* tech footnote (compact) */}
        <div className={`flex flex-col sm:flex-row gap-3 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <div className="text-xs text-gray-400 shrink-0 self-center sm:self-start pt-1">技術背景：</div>
          {techDetails.map((t) => (
            <div key={t.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm">
              <span>{t.icon}</span>
              <div>
                <div className="text-xs font-semibold text-gray-600">{t.label}</div>
                <div className="text-[10px] text-gray-400">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
