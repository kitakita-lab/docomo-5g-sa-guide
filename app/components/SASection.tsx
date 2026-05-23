"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function SADiagram() {
  return (
    <div className="w-full max-w-sm mx-auto select-none">
      {/* 5G NR tower */}
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

      {/* flowing arrows */}
      <div className="flex justify-center my-1 gap-6">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="12" height="28" viewBox="0 0 12 28" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="6" y1="0" x2="6" y2="20" stroke="#e60012" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M2 16 L6 24 L10 16" stroke="#e60012" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      {/* 5GC label */}
      <div className="text-center text-xs text-red-600 font-semibold mb-1">すべて5G制御</div>

      {/* 5G Core */}
      <div className="relative rounded-2xl border-2 border-red-300 bg-red-50 p-4 shadow-sm">
        <div className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-xs font-bold text-red-600 border border-red-300 rounded">
          5G コアネットワーク（5GC）
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          {[
            { label: "AMF", sub: "制御" },
            { label: "SMF", sub: "セッション" },
            { label: "UPF", sub: "転送" },
          ].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-12 h-10 rounded-lg bg-red-200 border border-red-300 flex items-center justify-center text-xs font-bold text-red-800">
                {label}
              </div>
              <div className="text-[10px] text-red-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
        {/* network slicing indicator */}
        <div className="mt-3 pt-3 border-t border-red-200 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-red-200 overflow-hidden">
            <div className="h-full w-1/3 bg-red-400 rounded-full"/>
          </div>
          <div className="flex-1 h-2 rounded-full bg-red-200 overflow-hidden">
            <div className="h-full w-1/2 bg-red-500 rounded-full"/>
          </div>
          <div className="flex-1 h-2 rounded-full bg-red-200 overflow-hidden">
            <div className="h-full w-2/5 bg-red-300 rounded-full"/>
          </div>
          <div className="text-[10px] text-red-500 whitespace-nowrap">スライス</div>
        </div>
      </div>

      {/* caption */}
      <div className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
        ▲ 無線も コアも すべて5G<br />
        ネットワークスライシングが可能に
      </div>
    </div>
  );
}

const capabilities = [
  {
    icon: "🔪",
    title: "ネットワークスライシング",
    desc: "1つの物理ネットワークを、用途ごとに仮想的に分割。工場・病院・自動運転など、それぞれに最適な通信品質を保証。",
    badge: "SA専用",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    icon: "⏱️",
    title: "超低遅延（1ms級）",
    desc: "5GCのUPF（ユーザープレーン機能）をエッジに配置することで、遅延を1ms台まで低減。自動運転や遠隔医療に必須。",
    badge: "SA専用",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    icon: "📱",
    title: "完全仮想化アーキテクチャ",
    desc: "5GCはクラウドネイティブ設計。ソフトウェアで構成されるため、迅速なアップデートやスケールが可能。",
    badge: "SA専用",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    icon: "🌐",
    title: "MEC（エッジコンピューティング）",
    desc: "ユーザーに近い場所でデータ処理ができるMECが本格活用可能に。リアルタイムAIや高速コンテンツ配信に寄与。",
    badge: "SA強化",
    badgeColor: "bg-orange-100 text-orange-600",
  },
];

export default function SASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sa" className="py-20 px-4 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* section header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4 border border-red-200">
            Section 02
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SA（スタンドアローン）とは？
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-semibold text-red-600">土台から全部新築</span>したイメージ。
            5Gの無線もコアネットワークもすべて5G専用で構成される、真の5Gアーキテクチャ。
          </p>
        </div>

        {/* main grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* diagram */}
          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 border border-red-100">
              <div className="text-sm font-semibold text-slate-500 mb-6 text-center tracking-wide uppercase">ネットワーク構成図</div>
              <SADiagram />
            </div>
          </div>

          {/* metaphor card */}
          <div className={`${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-red-50 border border-red-200 rounded-3xl p-6 mb-6">
              <div className="text-2xl mb-3">🏢</div>
              <div className="text-base font-semibold text-red-800 mb-2">たとえ話：完全新築ビル</div>
              <p className="text-sm text-red-700 leading-relaxed">
                土台から設計した最新ビル（5GC）に、最新の通信設備（5G NR）を完備した状態。
                水道・電気・通信すべて最新規格。エレベーターもセキュリティも完璧。
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "超低遅延", value: "1ms級", color: "bg-red-50 text-red-600 border-red-200" },
                { label: "スライシング", value: "対応", color: "bg-rose-50 text-rose-600 border-rose-200" },
                { label: "エッジ連携", value: "MEC", color: "bg-pink-50 text-pink-600 border-pink-200" },
              ].map(({ label, value, color }) => (
                <div key={label} className={`text-center p-3 rounded-xl border ${color}`}>
                  <div className="font-bold text-base">{value}</div>
                  <div className="text-xs mt-0.5 opacity-80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SA capabilities */}
        <div className={`mb-6 ${isVisible ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">SA で初めて実現できること</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${(i + 3) * 100}` : "opacity-0"}`}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="text-2xl shrink-0">{cap.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-semibold text-gray-800 text-sm">{cap.title}</div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${cap.badgeColor}`}>
                      {cap.badge}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{cap.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
