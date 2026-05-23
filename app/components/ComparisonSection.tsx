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
    sa: "用途別に通信を整理できる",
    fit: "sa",
  },
  {
    category: "ゲーム・動画の遅延",
    icon: "🎮",
    nsa: "数十ms程度",
    sa: "大幅に改善（1〜5ms級）",
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
    nsa: "4G EPC（既存）",
    sa: "5G Core（新設）",
    fit: "sa",
  },
  {
    category: "通信の専用レーン",
    icon: "🛣️",
    nsa: "なし（全員が共有）",
    sa: "あり（用途別に確保）",
    fit: "sa",
  },
  {
    category: "導入コスト",
    icon: "💰",
    nsa: "低い（既存設備流用）",
    sa: "高い（全新設）",
    fit: "nsa",
  },
  {
    category: "将来の新サービス",
    icon: "🔮",
    nsa: "限定的",
    sa: "幅広く対応できる",
    fit: "sa",
  },
];

function FitBadge({ fit, side }: { fit: Fit; side: "nsa" | "sa" }) {
  if (fit === "both") return <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-400">どちらも</span>;
  if (fit === side)   return <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 font-medium">✓ 得意</span>;
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
      <div className="max-w-3xl mx-auto">

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

        {/* use-case cards */}
        <div className={`grid sm:grid-cols-2 gap-5 mb-14 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <div className="p-6 rounded-2xl bg-amber-50">
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

          <div className="p-6 rounded-2xl bg-red-50">
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
              <div className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-700 font-semibold text-xs">NSA</div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-gray-200 text-base">vs</div>
            <div className="col-span-2 text-center">
              <div className="px-3 py-1.5 rounded-xl bg-red-100 text-red-600 font-semibold text-xs">SA</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-7 gap-1 items-stretch rounded-xl overflow-hidden border border-gray-50
                ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 2) * 80, 500)}` : "opacity-0"}`}
            >
              <div className="col-span-2 flex items-center gap-2 p-3 bg-gray-50">
                <span className="text-base shrink-0">{row.icon}</span>
                <p className="text-xs text-gray-600 leading-tight">{row.category}</p>
              </div>

              <div className={`col-span-2 flex flex-col items-center justify-center p-2.5 text-center ${row.fit === "nsa" ? "bg-amber-50" : "bg-white"}`}>
                <p className={`text-xs leading-tight mb-1 ${row.fit === "nsa" ? "text-amber-700" : "text-gray-400"}`}>{row.nsa}</p>
                <FitBadge fit={row.fit} side="nsa" />
              </div>

              <div className="col-span-1 flex items-center justify-center bg-white">
                <div className="w-px h-6 bg-gray-100" />
              </div>

              <div className={`col-span-2 flex flex-col items-center justify-center p-2.5 text-center ${row.fit === "sa" ? "bg-red-50" : "bg-white"}`}>
                <p className={`text-xs leading-tight mb-1 ${row.fit === "sa" ? "text-red-600" : "text-gray-400"}`}>{row.sa}</p>
                <FitBadge fit={row.fit} side="sa" />
              </div>
            </div>
          ))}
        </div>

        {/* highway metaphor */}
        <div className={`mt-12 p-6 rounded-2xl bg-gray-50 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <p className="text-sm font-semibold text-gray-700 text-center mb-5">🛣️ 道路で考えてみよう</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1.5">🏗️ NSA ＝ 一般道</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                みんなが同じ道を共有。ふだんは快適でも、イベントの日は全員が集中して渋滞が起きる。
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs font-semibold text-red-600 mb-1.5">🏢 SA ＝ 専用レーンつき高速</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                動画用・ゲーム用・通常用と、用途別に専用レーンがある状態。混雑しても各レーンが確保される。
              </p>
            </div>
          </div>
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
