"use client";

import { useScrollAnimation } from "./useScrollAnimation";

type UIType = "spinner" | "ping" | "progress" | "unread" | "bars" | "mapFrozen";

interface ScenarioCard {
  emoji: string;
  scene: string;
  story: string;
  uiType: UIType;
}

const scenarios: ScenarioCard[] = [
  {
    emoji: "🎪",
    scene: "ライブ会場",
    story: "写真を送ろうとしたら、ずっと「送信中」のまま…",
    uiType: "spinner",
  },
  {
    emoji: "🎆",
    scene: "花火大会",
    story: "LINEを送ったのに、30分後に「既読」がついた",
    uiType: "unread",
  },
  {
    emoji: "📶",
    scene: "地下街・繁華街",
    story: "5G表示なのに、サイトが全然開かない",
    uiType: "progress",
  },
  {
    emoji: "🎮",
    scene: "オンラインゲーム",
    story: "ボタンを押したのに、反応がワンテンポ遅れる",
    uiType: "ping",
  },
  {
    emoji: "🚃",
    scene: "朝の駅ホーム",
    story: "動画を見たら、ずっとバッファリング",
    uiType: "bars",
  },
  {
    emoji: "🛍️",
    scene: "ショッピングモール",
    story: "地図アプリが固まって、迷子になりかけた",
    uiType: "mapFrozen", // 地図フリーズUIへ変更
  },
];

function SpinnerUI() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
      <div className="w-4 h-4 rounded-full border-2 border-gray-200 border-t-gray-400 animate-spin shrink-0" />
      <span className="text-xs text-gray-400">送信中…</span>
    </div>
  );
}

function PingUI() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
      <span className="text-xs font-mono text-orange-500">ping: 148ms</span>
    </div>
  );
}

function ProgressUI() {
  return (
    <div className="px-3 py-2 bg-gray-50 rounded-lg">
      <div className="text-[10px] text-gray-400 mb-1.5">読み込み中…</div>
      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-300 rounded-full"
          style={{ width: "35%", animation: "stuckProgress 3s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes stuckProgress {
          0%,80%,100% { width: 35%; }
          40% { width: 38%; }
        }
      `}</style>
    </div>
  );
}

function UnreadUI() {
  return (
    <div className="flex items-end gap-1.5 px-3 py-2 bg-gray-50 rounded-lg">
      <div className="bg-green-400 text-white text-xs px-2 py-1 rounded-lg rounded-br-none">
        花火きれい！🎆
      </div>
      <span className="text-[10px] text-gray-300 pb-0.5">未読</span>
    </div>
  );
}

function BarsUI() {
  return (
    <div className="flex items-end gap-0.5 px-3 py-2 bg-gray-50 rounded-lg">
      {[3, 5, 2, 4, 2, 3].map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-sm"
          style={{
            height: `${h * 4}px`,
            backgroundColor: h < 3 ? "#e5e7eb" : "#93c5fd",
            animation: `barJitter ${1.5 + i * 0.2}s ease-in-out ${i * 0.1}s infinite alternate`,
          }}
        />
      ))}
      <span className="text-[10px] text-gray-400 ml-1.5 pb-0.5">くるくる…</span>
      <style>{`
        @keyframes barJitter { from { opacity: 0.5; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

// ショッピングモール用：地図フリーズUI
function MapFrozenUI() {
  return (
    <div className="px-3 py-2 bg-gray-50 rounded-lg">
      <div className="relative h-10 rounded overflow-hidden">
        {/* 地図タイルもどき */}
        <div className="grid grid-cols-5 grid-rows-2 gap-px h-full">
          {["bg-green-100","bg-gray-100","bg-blue-100","bg-gray-100","bg-green-100",
            "bg-gray-100","bg-gray-200","bg-gray-100","bg-blue-100","bg-gray-100"].map((c, i) => (
            <div key={i} className={`${c}`} />
          ))}
        </div>
        {/* 現在地マーカー */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
        </div>
        {/* フリーズオーバーレイ */}
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <span className="text-[9px] text-gray-500 font-medium bg-white/90 px-2 py-0.5 rounded shadow-sm">
            応答なし…
          </span>
        </div>
      </div>
    </div>
  );
}

function CardUI({ type }: { type: UIType }) {
  switch (type) {
    case "spinner":   return <SpinnerUI />;
    case "ping":      return <PingUI />;
    case "progress":  return <ProgressUI />;
    case "unread":    return <UnreadUI />;
    case "bars":      return <BarsUI />;
    case "mapFrozen": return <MapFrozenUI />;
  }
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-28 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-3xl mx-auto">

        {/* header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-3xl mb-5">😓</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            こんな経験、ありませんか？
          </h2>
          <p className="text-base text-gray-400 max-w-sm mx-auto leading-relaxed">
            5Gに切り替わったはずなのに、人が多い場所ではなぜかもたつく。
          </p>
        </div>

        {/* cards — 常時2列、コンパクト */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {scenarios.map((s, i) => (
            <div
              key={s.scene}
              className={`bg-white rounded-2xl p-4 hover:shadow-sm transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${Math.min(i * 100 + 100, 500)}` : "opacity-0"}`}
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xl">{s.emoji}</span>
                <span className="text-xs font-semibold text-gray-600">{s.scene}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.story}</p>
              <CardUI type={s.uiType} />
            </div>
          ))}
        </div>

        {/* bridge */}
        <div className={`mt-12 p-7 rounded-2xl bg-white text-center
          ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <p className="text-base font-semibold text-gray-800 mb-2">
            これ、全部「混雑」が原因かもしれません。
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
            5Gの電波（無線）が届いていても、通信の"中継所"が4G時代のままだと、
            混雑時に渋滞が起きます。それがNSAの限界です。
          </p>
          <a href="#nsa" className="inline-flex items-center gap-1.5 mt-5 text-red-600 text-sm font-medium hover:underline">
            なぜ起きるか見てみる
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
