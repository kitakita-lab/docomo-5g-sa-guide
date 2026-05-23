"use client";

import { useScrollAnimation } from "./useScrollAnimation";

function NSADiagram() {
  return (
    <div className="w-full max-w-xs mx-auto select-none">
      <div className="flex flex-col items-center mb-2">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            <rect x="18" y="2" width="4" height="16" rx="2" fill="#3b82f6"/>
            <path d="M8 6 Q20 0 32 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M12 10 Q20 5 28 10" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <rect x="16" y="18" width="8" height="14" rx="1" fill="#93c5fd"/>
            <rect x="12" y="32" width="16" height="4" rx="1" fill="#bfdbfe"/>
          </svg>
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-blue-100">5G NR</span>
        </div>
        <p className="text-[10px] text-gray-400 mt-1">新しい無線</p>
      </div>

      <div className="flex justify-center my-1 gap-5">
        {[0, 1, 2].map((i) => (
          <svg key={i} width="10" height="24" viewBox="0 0 10 24" className="animate-flow-down" style={{ animationDelay: `${i * 0.3}s` }}>
            <line x1="5" y1="0" x2="5" y2="18" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3"/>
            <path d="M1 14 L5 22 L9 14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        ))}
      </div>

      <p className="text-center text-[10px] text-amber-600 font-semibold mb-1">制御は4G経由</p>

      <div className="relative rounded-2xl border border-amber-200 bg-amber-50 p-3">
        <div className="absolute -top-2.5 left-3 bg-white px-2 py-0.5 text-[10px] font-bold text-amber-600 border border-amber-200 rounded">
          4G コアネットワーク（EPC）
        </div>
        <div className="flex items-center justify-center gap-2 mt-0.5">
          {[{ label: "MME", sub: "制御" }, { label: "S-GW", sub: "転送" }, { label: "P-GW", sub: "接続" }].map(({ label, sub }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-11 h-9 rounded-lg bg-amber-200 border border-amber-200 flex items-center justify-center text-xs font-bold text-amber-700">{label}</div>
              <p className="text-[9px] text-amber-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] text-gray-400">
        無線は5G NR ／ コアは4G（EPC）のまま
      </p>
    </div>
  );
}

function CongestionDiagram() {
  return (
    <div className="select-none py-2">
      <p className="text-xs text-gray-400 text-center mb-4">混雑時に何が起きている？</p>

      <div className="grid grid-cols-5 gap-1 mb-1">
        {Array(10).fill("📱").map((icon, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-base">{icon}</span>
            <svg width="2" height="14" viewBox="0 0 2 14">
              <line x1="1" y1="0" x2="1" y2="14" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 2"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-1.5">
        <svg width="140" height="20" viewBox="0 0 140 20">
          <path d="M8 0 Q70 18 132 0" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
          <path d="M70 18 L65 20 L75 20Z" fill="#f59e0b"/>
        </svg>
      </div>

      <div className="flex justify-center mb-1.5">
        <div className="relative">
          <div className="w-16 h-9 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
            <span className="text-[10px] font-bold text-amber-700 text-center leading-tight">4G EPC<br/>詰まる</span>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center text-white text-[8px] font-bold animate-pulse">混</div>
        </div>
      </div>

      <div className="flex justify-center">
        <svg width="10" height="18" viewBox="0 0 10 18">
          <line x1="5" y1="0" x2="5" y2="12" stroke="#9ca3af" strokeWidth="1.5"/>
          <path d="M1 9 L5 17 L9 9" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-1">遅延・不安定</p>
    </div>
  );
}

const keyPoints = [
  {
    icon: "🏠",
    title: "4Gの土台をそのまま活用",
    desc: "コアネットワークは4G LTEのものを流用。既存設備を使えるため導入コストが低い。",
  },
  {
    icon: "📡",
    title: "無線だけ5G NR",
    desc: "空中の電波だけ5G NR。だから「5G」と表示されるが、混雑時の処理は4Gコア任せ。",
  },
  {
    icon: "🚦",
    title: "混雑すると詰まりやすい",
    desc: "人が集まる場所では4Gコアがボトルネックになりやすい。5G表示でも遅く感じる原因のひとつ。",
  },
  {
    icon: "⚡",
    title: "メリット：早く広く展開できた",
    desc: "4Gインフラを活かして素早く5Gエリアを拡大できた。先行展開に向いた方式。",
  },
];

const scenes = [
  { emoji: "🎪", label: "ライブ会場" },
  { emoji: "🎆", label: "花火大会" },
  { emoji: "🚃", label: "駅ホーム" },
  { emoji: "🎶", label: "フェス" },
  { emoji: "🏬", label: "大型施設" },
  { emoji: "🌆", label: "繁華街" },
];

export default function NSASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nsa" className="py-28 px-6 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto">

        {/* section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium mb-5 tracking-widest uppercase">
            Section 01
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            NSA（非スタンドアローン）とは？
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto leading-relaxed">
            <span className="text-amber-600 font-semibold">古い土台に新しい部屋を追加</span>したイメージ。
            4Gのコアネットワークを活かしたまま5G電波だけを追加する方式です。
          </p>
        </div>

        {/* ① なぜ起きる — 先に「納得」を作る */}
        <div className={`mb-12 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <div className="bg-amber-50 rounded-2xl p-6">
            <p className="text-sm font-semibold text-amber-800 mb-2">💡 なぜ「5G表示でも遅い」が起きるのか？</p>
            <p className="text-sm text-amber-700 leading-relaxed">
              5Gの「電波」が届いていても、通信のデータを捌く「中継所（コアネットワーク）」が
              4G時代のままだと、人が集まる場所で渋滞が起きます。
              これがNSA（非スタンドアローン）の構造的な課題です。
            </p>
          </div>
        </div>

        {/* ② 混雑 → NSA図解 の流れ */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-14">

          {/* 混雑ダイアグラム */}
          <div className={`${isVisible ? "animate-slide-left delay-200" : "opacity-0"}`}>
            <div className="bg-gray-50 rounded-2xl p-6">
              <CongestionDiagram />
            </div>
          </div>

          {/* NSA構成図 + たとえ */}
          <div className={`space-y-4 ${isVisible ? "animate-slide-right delay-300" : "opacity-0"}`}>
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-xs text-gray-400 text-center mb-5 tracking-wide uppercase">ネットワーク構成図</p>
              <NSADiagram />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-gray-700 mb-1.5">🏠 たとえ話：増築リフォーム</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                築20年の家（4Gコア）の上に新しい部屋（5G無線）を増築。部屋は新しいが、
                水道・電気は古い設備のまま。
              </p>
            </div>
          </div>
        </div>

        {/* ③ 発生しやすい場面タグ */}
        <div className={`mb-14 ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
          <p className="text-center text-sm text-gray-500 font-medium mb-4">こんな場面で起きやすい</p>
          <div className="flex flex-wrap justify-center gap-2">
            {scenes.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-50 text-sm text-gray-500">
                <span>{s.emoji}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            人が集中する場所ほど、4Gコアがボトルネックになりやすい
          </p>
        </div>

        {/* ④ キーポイント — 補助カード（軽め） */}
        <div className="grid sm:grid-cols-2 gap-4">
          {keyPoints.map((pt, i) => (
            <div
              key={pt.title}
              className={`flex gap-3 p-5 rounded-2xl bg-gray-50
                ${isVisible ? `animate-fade-in-up delay-${(i + 4) * 100}` : "opacity-0"}`}
            >
              <div className="text-xl shrink-0">{pt.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">{pt.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
