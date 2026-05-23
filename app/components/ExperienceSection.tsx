"use client";

import { useScrollAnimation } from "./useScrollAnimation";

interface ScenarioCard {
  emoji: string;
  scene: string;
  story: string;
  uiType: "spinner" | "ping" | "progress" | "unread" | "bars";
  tags: string[];
}

const scenarios: ScenarioCard[] = [
  {
    emoji: "🎪",
    scene: "ライブ会場",
    story: "写真を送ろうとしたら、ずっと「送信中」のまま…",
    uiType: "spinner",
    tags: ["混雑", "送信失敗"],
  },
  {
    emoji: "🎆",
    scene: "花火大会",
    story: "LINEを送ったのに、30分後に「既読」がついた",
    uiType: "unread",
    tags: ["混雑", "遅延"],
  },
  {
    emoji: "📶",
    scene: "地下街・繁華街",
    story: "5G表示なのに、サイトが全然開かない",
    uiType: "progress",
    tags: ["5G表示", "でも遅い"],
  },
  {
    emoji: "🎮",
    scene: "オンラインゲーム",
    story: "ボタンを押したのに、反応がワンテンポ遅れる",
    uiType: "ping",
    tags: ["遅延", "ラグ"],
  },
  {
    emoji: "🚃",
    scene: "朝の駅ホーム",
    story: "通勤中に動画を見たら、ずっとくるくるしてた",
    uiType: "bars",
    tags: ["混雑時間帯", "バッファリング"],
  },
  {
    emoji: "🛍️",
    scene: "大型ショッピングモール",
    story: "地図アプリが固まって、迷子になりかけた",
    uiType: "spinner",
    tags: ["混雑", "アプリ不安定"],
  },
];

function SpinnerUI() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="w-5 h-5 rounded-full border-2 border-gray-200 border-t-gray-500 animate-spin shrink-0" />
      <span className="text-xs text-gray-500">送信中…</span>
    </div>
  );
}

function PingUI() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
      <span className="text-xs font-mono text-orange-500">ping: 148ms</span>
      <span className="text-xs text-gray-400">高め</span>
    </div>
  );
}

function ProgressUI() {
  return (
    <div className="px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between mb-1">
        <span className="text-[10px] text-gray-400">ページを読み込み中…</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
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
    <div className="flex items-end gap-1 px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex-1">
        <div className="text-[10px] text-gray-400 mb-0.5">送信済み</div>
        <div className="bg-green-400 text-white text-xs px-2 py-1 rounded-lg rounded-br-none inline-block max-w-full">
          花火きれい！🎆
        </div>
      </div>
      <div className="text-[10px] text-gray-300 shrink-0 pb-0.5">未読</div>
    </div>
  );
}

function BarsUI() {
  return (
    <div className="flex items-end gap-0.5 px-3 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
      {[3, 5, 2, 4, 2, 3].map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-sm"
          style={{
            height: `${h * 5}px`,
            backgroundColor: h < 3 ? "#e5e7eb" : "#60a5fa",
            animation: `barJitter ${1.5 + i * 0.2}s ease-in-out ${i * 0.1}s infinite alternate`,
          }}
        />
      ))}
      <span className="text-[10px] text-gray-400 ml-1 pb-0.5">くるくる…</span>
      <style>{`
        @keyframes barJitter {
          from { opacity: 0.5; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function CardUI({ type }: { type: ScenarioCard["uiType"] }) {
  switch (type) {
    case "spinner":  return <SpinnerUI />;
    case "ping":     return <PingUI />;
    case "progress": return <ProgressUI />;
    case "unread":   return <UnreadUI />;
    case "bars":     return <BarsUI />;
  }
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-3xl mb-4">😓</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            こんな経験、ありませんか？
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            5Gに切り替わったはずなのに、人が多い場所では
            なぜかもたつく。それには理由があります。
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((s, i) => (
            <div
              key={s.scene}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${Math.min(i * 100 + 100, 600)}` : "opacity-0"}`}
            >
              {/* card header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{s.emoji}</span>
                <span className="text-sm font-semibold text-gray-700">{s.scene}</span>
              </div>

              {/* story */}
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {s.story}
              </p>

              {/* mini UI mock */}
              <div className="mb-3">
                <CardUI type={s.uiType} />
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-1">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bridge */}
        <div className={`mt-12 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center
          ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <div className="text-lg font-bold text-gray-800 mb-2">
            これ、全部「混雑」が原因かもしれません。
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            5Gの電波（無線）が届いていても、通信の"中継所"が4G時代のままだと、
            混雑時に渋滞が起きます。それがNSAの限界です。
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-red-600 text-sm font-medium">
            <span>NSAとSAの違いを見てみよう</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
