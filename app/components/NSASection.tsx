"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function NSADiagram() {
  return (
    <div className="w-full max-w-sm mx-auto select-none">
      <div className="flex flex-col items-center mb-2">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-200 shadow-sm">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="18" y="2" width="4" height="16" rx="2" fill="#3b82f6"/>
            <path d="M8 6 Q20 0 32 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M12 10 Q20 5 28 10" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <rect x="16" y="18" width="8" height="14" rx="1" fill="#93c5fd"/>
            <rect x="12" y="32" width="16" height="4" rx="1" fill="#bfdbfe"/>
          </svg>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-blue-200">5G NR</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">新しい無線</div>
      </div>

      <div className="flex justify-center my-1 gap-6">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="28" viewBox="0 0 12 28" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="6" y1="0" x2="6" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M2 16 L6 24 L10 16" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      <div className="text-center text-xs text-amber-600 font-semibold mb-1">制御は4G経由</div>

      <div className="relative rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 shadow-sm">
        <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-xs font-bold text-amber-600 border border-amber-300 rounded">
          4G コアネットワーク（EPC）
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          {[{ label: "MME", sub: "制御" }, { label: "S-GW", sub: "転送" }, { label: "P-GW", sub: "接続" }].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-12 h-10 rounded-lg bg-amber-200 border border-amber-300 flex items-center justify-center text-xs font-bold text-amber-800">{label}</div>
              <div className="text-[10px] text-amber-600 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
        ▲ 無線は5G NRだが<br />
        コアネットワークは4G（EPC）のまま
      </div>
    </div>
  );
}

function CongestionDiagram() {
  return (
    <div className="select-none">
      <div className="text-xs font-semibold text-gray-500 mb-4 text-center tracking-wide">混雑時に何が起きる？</div>

      {/* many phones converging */}
      <div className="relative">
        {/* phones grid */}
        <div className="grid grid-cols-5 gap-2 mb-1">
          {["📱","📱","📱","📱","📱","📱","📱","📱","📱","📱"].map((icon, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-lg">{icon}</span>
              <svg width="2" height="16" viewBox="0 0 2 16">
                <line x1="1" y1="0" x2="1" y2="16" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 2"/>
              </svg>
            </div>
          ))}
        </div>

        {/* converging arrows label */}
        <div className="flex justify-center mb-1">
          <svg width="160" height="24" viewBox="0 0 160 24">
            <path d="M10 0 Q80 20 150 0" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
            <path d="M80 20 L75 24 L85 24Z" fill="#f59e0b"/>
          </svg>
        </div>

        {/* bottleneck */}
        <div className="flex justify-center mb-1">
          <div className="relative flex items-center justify-center">
            <div className="w-14 h-10 rounded-lg bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
              <span className="text-[10px] font-bold text-amber-700 text-center leading-tight">4G EPC<br/>ボトルネック</span>
            </div>
            {/* congestion indicator */}
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center text-white text-[8px] font-bold animate-pulse">
              混
            </div>
          </div>
        </div>

        {/* slow trickle down */}
        <div className="flex justify-center">
          <svg width="12" height="20" viewBox="0 0 12 20">
            <line x1="6" y1="0" x2="6" y2="14" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M2 10 L6 18 L10 10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <div className="text-center text-[10px] text-gray-400 mt-1">遅延・不安定に</div>
      </div>
    </div>
  );
}

const scenes = [
  { emoji: "🎪", label: "ライブ会場" },
  { emoji: "🎆", label: "花火大会" },
  { emoji: "🚃", label: "駅ホーム" },
  { emoji: "🎶", label: "フェス" },
  { emoji: "🏬", label: "大型施設" },
  { emoji: "🌆", label: "繁華街" },
];

const keyPoints = [
  {
    icon: "🏠",
    title: "4Gの土台をそのまま活用",
    desc: "コアネットワーク（EPC）は4G LTEのものを流用。既存インフラを使えるため導入コストが低い。",
  },
  {
    icon: "📡",
    title: "無線だけ5G NR",
    desc: "空中の電波部分のみ5G NRを新設。だから「5G」と表示されるが、混雑時の処理は4Gコア任せ。",
  },
  {
    icon: "🚦",
    title: "混雑すると渋滞しやすい",
    desc: "人が集まる場所では4Gコアがボトルネックに。5G表示でも遅く感じる原因のひとつ。",
  },
  {
    icon: "⚡",
    title: "メリット：早く広く届けられた",
    desc: "4Gインフラを活かして素早く5Gエリアを拡大できた。先行展開に最適な方式。",
  },
];

export default function NSASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nsa" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">

        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4 border border-blue-200">
            Section 01
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NSA（非スタンドアローン）とは？
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-semibold text-amber-600">古い土台に新しい部屋を追加</span>したイメージ。
            4Gのコアネットワークを活かしたまま5G電波だけを追加する方式。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">

          {/* diagram */}
          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
              <div className="text-sm font-semibold text-slate-500 mb-6 text-center tracking-wide uppercase">ネットワーク構成図</div>
              <NSADiagram />
            </div>
          </div>

          {/* metaphor + congestion */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6">
              <div className="text-2xl mb-3">🏠</div>
              <div className="text-base font-semibold text-amber-800 mb-2">たとえ話：増築リフォーム</div>
              <p className="text-sm text-amber-700 leading-relaxed">
                築20年の家（4Gコア）の上に、新しい部屋（5G無線）を増築したイメージ。
                部屋は新しくて広いが、水道や電気は古い設備をそのまま使っている。
              </p>
            </div>

            {/* congestion diagram */}
            <div className="bg-white border border-orange-100 rounded-3xl p-5">
              <CongestionDiagram />
            </div>
          </div>
        </div>

        {/* scene tags */}
        <div className={`mb-10 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          <div className="text-center text-sm font-semibold text-gray-600 mb-4">
            こんな場面で起きやすい
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {scenes.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-sm text-orange-700">
                <span>{s.emoji}</span>
                <span className="font-medium">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            人が集中する場所ほど、4Gコアがボトルネックになりやすい
          </p>
        </div>

        {/* key points */}
        <div className="grid sm:grid-cols-2 gap-4">
          {keyPoints.map((pt, i) => (
            <div
              key={pt.title}
              className={`flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${(i + 3) * 100}` : "opacity-0"}`}
            >
              <div className="text-2xl shrink-0">{pt.icon}</div>
              <div>
                <div className="font-semibold text-gray-800 mb-1 text-sm">{pt.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{pt.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
