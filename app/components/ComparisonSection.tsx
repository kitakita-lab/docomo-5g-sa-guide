"use client";

import { useScrollAnimation } from "./useScrollAnimation";

type Fit = "nsa" | "sa" | "both";

interface ComparisonRow {
  category: string;
  icon: string;
  nsa: string;
  sa: string;
  fit: Fit;
}

const rows: ComparisonRow[] = [
  {
    category: "混雑時の安定性",
    icon: "👥",
    nsa: "4Gコアが詰まりやすい",
    sa: "用途別に通信を整理",
    fit: "sa",
  },
  {
    category: "ゲーム・動画の遅延",
    icon: "🎮",
    nsa: "数十ms程度",
    sa: "1〜5ms級に改善",
    fit: "sa",
  },
  {
    category: "エリアの広さ",
    icon: "📡",
    nsa: "広い（先行展開済み）",
    sa: "拡大中",
    fit: "nsa",
  },
  {
    category: "コアネットワーク",
    icon: "🖥️",
    nsa: "4G EPC",
    sa: "5G Core",
    fit: "sa",
  },
  {
    category: "専用レーン",
    icon: "🛣️",
    nsa: "なし（共有）",
    sa: "あり（用途別）",
    fit: "sa",
  },
  {
    category: "導入コスト",
    icon: "💰",
    nsa: "低い（設備流用）",
    sa: "高い（全新設）",
    fit: "nsa",
  },
  {
    category: "将来サービス",
    icon: "🔮",
    nsa: "限定的",
    sa: "幅広く対応可",
    fit: "sa",
  },
];

function FitBadge({ fit, side }: { fit: Fit; side: "nsa" | "sa" }) {
  if (fit === side) return <span className="text-[9px] text-emerald-500 font-medium">✓</span>;
  return null;
}

const nsaUseCases = [
  { emoji: "🗾", text: "今すぐ広いエリアで5Gを使いたい" },
  { emoji: "📱", text: "普段のSNS・地図・動画を快適に" },
  { emoji: "🚀", text: "まずはとにかく5Gを体験したい" },
];

const saUseCases = [
  { emoji: "🎪", text: "ライブ・フェス会場でも安定して使いたい" },
  { emoji: "🎮", text: "オンラインゲームのラグをなくしたい" },
  { emoji: "📹", text: "動画・ライブ配信を途切れさせたくない" },
  { emoji: "🔮", text: "これからの新しい5Gサービスを使いたい" },
];

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comparison" className="py-28 px-6 bg-white" ref={ref}>
      <div className={`max-w-3xl mx-auto transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}>

        {/* section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium mb-5 tracking-widest uppercase">
            Section 03
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            NSA vs SA — 向いている用途を知ろう
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto leading-relaxed">
            どちらが「勝ち」ではなく、<strong className="text-gray-600">目的と場面に応じた使い分け</strong>が大事。
          </p>
        </div>

        {/* building metaphor comparison */}
        <div className={`grid sm:grid-cols-2 gap-5 mb-10 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-200 flex items-center justify-center text-xl shrink-0">🏠</div>
              <div>
                <p className="font-bold text-amber-800 text-sm">NSA ＝ 増築リフォーム</p>
                <p className="text-xs text-amber-500 mt-0.5">普及優先の現実的な選択</p>
              </div>
            </div>
            <p className="text-xs text-amber-700 leading-relaxed">
              4Gの既存設備を活かして素早く5Gを普及させてきた、合理的な方式。部屋は新しいが水道・電気は古い設備のまま、混雑すると古い配線がボトルネックになりやすい。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-200 flex items-center justify-center text-xl shrink-0">🏢</div>
              <div>
                <p className="font-bold text-red-800 text-sm">SA ＝ 完全新築ビル</p>
                <p className="text-xs text-red-400 mt-0.5">5G本格活用の次世代構成</p>
              </div>
            </div>
            <p className="text-xs text-red-700 leading-relaxed">
              土台から設計した最新ビル。5Gを本格活用するための次世代構成で、「エレベーター専用」「宅配専用」のように用途ごとに経路が整理されている。
            </p>
          </div>
        </div>

        {/* use-case cards */}
        <div className={`grid sm:grid-cols-2 gap-5 mb-14 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <div className="p-6 rounded-2xl bg-amber-50 hover:-translate-y-0.5 hover:shadow-sm transition duration-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-200 flex items-center justify-center text-xl shrink-0">🏗️</div>
              <div>
                <p className="font-bold text-amber-800">NSA が向いている</p>
                <p className="text-xs text-amber-500">今すぐ・広く・手軽に</p>
              </div>
            </div>
            <ul className="space-y-3">
              {nsaUseCases.map((u) => (
                <li key={u.text} className="flex items-start gap-2.5">
                  <span className="text-lg shrink-0 leading-tight">{u.emoji}</span>
                  <span className="text-sm text-amber-700 leading-snug">{u.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-red-50 hover:-translate-y-0.5 hover:shadow-sm transition duration-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-200 flex items-center justify-center text-xl shrink-0">🏢</div>
              <div>
                <p className="font-bold text-red-800">SA が向いている</p>
                <p className="text-xs text-red-400">混雑・安定・将来サービス</p>
              </div>
            </div>
            <ul className="space-y-3">
              {saUseCases.map((u) => (
                <li key={u.text} className="flex items-start gap-2.5">
                  <span className="text-lg shrink-0 leading-tight">{u.emoji}</span>
                  <span className="text-sm text-red-700 leading-snug">{u.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* comparison table */}
        <div className={`mb-3 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <p className="text-sm text-gray-400 text-center mb-5">項目別くらべてみる</p>
          <div className="grid grid-cols-7 gap-2 mb-3">
            <div className="col-span-2" />
            <div className="col-span-2 text-center">
              <div className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-600 font-semibold text-xs">NSA</div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-gray-200 text-base">vs</div>
            <div className="col-span-2 text-center">
              <div className="px-3 py-1.5 rounded-xl bg-red-50 text-red-500 font-semibold text-xs">SA</div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-7 gap-1 items-stretch rounded-xl overflow-hidden
                ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 2) * 80, 500)}` : "opacity-0"}`}
            >
              <div className="col-span-2 flex items-center gap-2 p-3 bg-gray-50 rounded-l-xl">
                <span className="text-base shrink-0">{row.icon}</span>
                <p className="text-xs text-gray-700 leading-tight">{row.category}</p>
              </div>

              <div
                className="col-span-2 flex flex-col items-center justify-center p-3 text-center"
                style={{ backgroundColor: row.fit === "nsa" ? "#fef3c7" : "#ffffff" }}
              >
                <p className="text-xs leading-snug mb-0.5 text-gray-700">{row.nsa}</p>
                <FitBadge fit={row.fit} side="nsa" />
              </div>

              <div className="col-span-1 flex items-center justify-center bg-gray-50/50">
                <div className="w-px h-4 bg-gray-100" />
              </div>

              <div
                className="col-span-2 flex flex-col items-center justify-center p-3 text-center rounded-r-xl"
                style={{ backgroundColor: row.fit === "sa" ? "#ffe4e6" : "#ffffff" }}
              >
                <p className="text-xs leading-snug mb-0.5 text-gray-700">{row.sa}</p>
                <FitBadge fit={row.fit} side="sa" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-8 p-8 rounded-2xl bg-gray-900 text-white text-center ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <p className="text-lg font-bold mb-3">NSAは橋渡し。SAが「本物の5G」体験へ。</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            NSAは4Gから5Gへの移行を支えた立役者。
            SAは「ライブ会場でも・ゲームでも・動画でも安定する5G」を実現する、次のステージです。
          </p>
        </div>

      </div>
    </section>
  );
}
