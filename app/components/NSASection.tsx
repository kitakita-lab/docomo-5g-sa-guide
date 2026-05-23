"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function NSADiagram() {
  return (
    <div className="w-full max-w-sm mx-auto select-none">
      {/* 5G NR tower */}
      <div className="flex flex-col items-center mb-2">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-200 shadow-sm">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            {/* antenna */}
            <rect x="18" y="2" width="4" height="16" rx="2" fill="#3b82f6"/>
            <path d="M8 6 Q20 0 32 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M12 10 Q20 5 28 10" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* tower body */}
            <rect x="16" y="18" width="8" height="14" rx="1" fill="#93c5fd"/>
            <rect x="12" y="32" width="16" height="4" rx="1" fill="#bfdbfe"/>
          </svg>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-blue-200">5G NR</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">新しい無線</div>
      </div>

      {/* arrows going down */}
      <div className="flex justify-center my-1 gap-6">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="28" viewBox="0 0 12 28" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="6" y1="0" x2="6" y2="20" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M2 16 L6 24 L10 16" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      {/* 4G Core label */}
      <div className="text-center text-xs text-amber-600 font-semibold mb-1">制御は4G経由</div>

      {/* 4G EPC Core */}
      <div className="relative rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 shadow-sm">
        <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-xs font-bold text-amber-600 border border-amber-300 rounded">
          4G コアネットワーク（EPC）
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          {[
            { label: "MME", sub: "制御" },
            { label: "S-GW", sub: "転送" },
            { label: "P-GW", sub: "接続" },
          ].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-12 h-10 rounded-lg bg-amber-200 border border-amber-300 flex items-center justify-center text-xs font-bold text-amber-800">
                {label}
              </div>
              <div className="text-[10px] text-amber-600 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* caption */}
      <div className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
        ▲ 無線は5G NRだが<br />
        コアネットワークは4G（EPC）のまま
      </div>
    </div>
  );
}

const keyPoints = [
  {
    icon: "🏗️",
    title: "4Gの土台をそのまま活用",
    desc: "コアネットワーク（EPC）は4G LTEのものを流用。既存インフラを使えるため導入コストが低い。",
  },
  {
    icon: "📡",
    title: "無線だけ5G NR",
    desc: "空中の電波部分（無線アクセス）のみ5G NR（New Radio）を新設。ユーザーが体感するのはここ。",
  },
  {
    icon: "🔀",
    title: "コントロールは4G経由",
    desc: "接続の確立・維持などの制御シグナルは4G LTEを通じて行われる（Dual Connectivity）。",
  },
  {
    icon: "⚡",
    title: "メリット：早期展開",
    desc: "4Gインフラを活かして素早く5Gエリアを拡大できる。ドコモが5Gを先行展開した方式。",
  },
];

export default function NSASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nsa" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* section header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4 border border-blue-200">
            Section 01
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NSA（非スタンドアローン）とは？
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-semibold text-amber-600">古い土台に新しい部屋を追加</span>したイメージ。
            4Gのコアネットワークを活かしたまま5Gの電波だけを追加する方式。
          </p>
        </div>

        {/* main grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* diagram */}
          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-200">
              <div className="text-sm font-semibold text-slate-500 mb-6 text-center tracking-wide uppercase">ネットワーク構成図</div>
              <NSADiagram />
            </div>
          </div>

          {/* metaphor card */}
          <div className={`${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-6">
              <div className="text-2xl mb-3">🏠</div>
              <div className="text-base font-semibold text-amber-800 mb-2">たとえ話：増築リフォーム</div>
              <p className="text-sm text-amber-700 leading-relaxed">
                築20年の家（4Gコア）の上に、新しい部屋（5G無線）を増築したイメージ。
                部屋は新しくて広いが、水道や電気は古い設備をそのまま使っている状態。
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-3xl">📊</div>
              <div>
                <div className="text-sm font-semibold text-gray-700">NSA = OptionA3（3GPP）</div>
                <div className="text-xs text-gray-400 mt-0.5">現在のドコモ5Gエリアの多くがこの方式</div>
              </div>
            </div>
          </div>
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
