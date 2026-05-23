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
    category: "通信の「専用レーン」",
    icon: "🔪",
    nsa: "なし（全員が共有）",
    sa: "あり（用途別に確保）",
    fit: "sa",
  },
  {
    category: "導入・展開コスト",
    icon: "💰",
    nsa: "低い（既存設備流用）",
    sa: "高い（全新設）",
    fit: "nsa",
  },
  {
    category: "今すぐ使えるか",
    icon: "⚡",
    nsa: "はい（多くのエリア）",
    sa: "エリア拡大中",
    fit: "both",
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
  if (fit === "both") {
    return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">どちらも</span>;
  }
  if (fit === side) {
    return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">✓ 得意</span>;
  }
  return null;
}

const nsaUseCases = [
  { emoji: "🗾", text: "今すぐ広いエリアで5Gを使いたい" },
  { emoji: "📱", text: "普段のSNS・地図・動画を快適に" },
  { emoji: "🚀", text: "まずはとにかく5Gを体験したい" },
];

const saUseCases = [
  { emoji: "🎪", text: "ライブ・フェス・イベントでも安定させたい" },
  { emoji: "🎮", text: "オンラインゲームのラグをなくしたい" },
  { emoji: "📹", text: "動画・ライブ配信を途切れさせたくない" },
  { emoji: "🔮", text: "これからの新しい5Gサービスを使いたい" },
];

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comparison" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4 border border-gray-200">
            Section 03
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NSA vs SA — 向いている用途を知ろう
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            どちらが「勝ち」ではなく、<strong>目的と場面に応じた使い分け</strong>が大事。
            あなたのライフスタイルに合う5Gはどちら？
          </p>
        </div>

        {/* use-case visual (top) */}
        <div className={`grid sm:grid-cols-2 gap-6 mb-12 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          {/* NSA card */}
          <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-200 flex items-center justify-center text-2xl shrink-0">🏗️</div>
              <div>
                <div className="font-bold text-lg text-amber-800">NSA が向いている</div>
                <div className="text-xs text-amber-600">今すぐ・広く・手軽に</div>
              </div>
            </div>
            <ul className="space-y-3">
              {nsaUseCases.map((u) => (
                <li key={u.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{u.emoji}</span>
                  <span className="text-sm text-amber-800 leading-snug">{u.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SA card */}
          <div className="p-6 rounded-3xl bg-red-50 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-200 flex items-center justify-center text-2xl shrink-0">🏢</div>
              <div>
                <div className="font-bold text-lg text-red-800">SA が向いている</div>
                <div className="text-xs text-red-600">混雑・安定・将来サービス</div>
              </div>
            </div>
            <ul className="space-y-3">
              {saUseCases.map((u) => (
                <li key={u.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{u.emoji}</span>
                  <span className="text-sm text-red-800 leading-snug">{u.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* comparison table */}
        <div className={`mb-3 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
          <h3 className="text-base font-bold text-gray-600 text-center mb-4">項目別くらべてみる</h3>
          <div className="grid grid-cols-7 gap-2 mb-3">
            <div className="col-span-2" />
            <div className="col-span-2 text-center">
              <div className="px-4 py-2 rounded-xl bg-amber-100 text-amber-700 font-bold text-sm border border-amber-200">NSA</div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-gray-300 text-lg font-light">vs</div>
            <div className="col-span-2 text-center">
              <div className="px-4 py-2 rounded-xl bg-red-100 text-red-700 font-bold text-sm border border-red-200">SA</div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-7 gap-2 items-stretch rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 2) * 80, 600)}` : "opacity-0"}`}
            >
              <div className="col-span-2 flex items-center gap-2 p-3 bg-gray-50 border-r border-gray-100">
                <span className="text-xl shrink-0">{row.icon}</span>
                <div className="text-xs font-semibold text-gray-700 leading-tight">{row.category}</div>
              </div>

              <div className={`col-span-2 flex flex-col items-center justify-center p-3 text-center
                ${row.fit === "nsa" ? "bg-amber-50" : "bg-white"}`}>
                <div className={`text-xs font-medium leading-tight mb-1 ${row.fit === "nsa" ? "text-amber-800" : "text-gray-500"}`}>
                  {row.nsa}
                </div>
                <FitBadge fit={row.fit} side="nsa" />
              </div>

              <div className="col-span-1 flex items-center justify-center bg-white">
                <div className="w-px h-8 bg-gray-200" />
              </div>

              <div className={`col-span-2 flex flex-col items-center justify-center p-3 text-center
                ${row.fit === "sa" ? "bg-red-50" : "bg-white"}`}>
                <div className={`text-xs font-medium leading-tight mb-1 ${row.fit === "sa" ? "text-red-700" : "text-gray-500"}`}>
                  {row.sa}
                </div>
                <FitBadge fit={row.fit} side="sa" />
              </div>
            </div>
          ))}
        </div>

        {/* highway metaphor */}
        <div className={`mt-12 p-6 rounded-3xl bg-gray-50 border border-gray-100 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <div className="text-center mb-5">
            <div className="text-lg font-bold text-gray-800 mb-1">🛣️ 道路で考えてみよう</div>
            <div className="text-xs text-gray-400">ネットワークの仕組みを身近なたとえで</div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
              <div className="text-sm font-bold text-amber-800 mb-2">🏗️ NSA ＝ 一般道</div>
              <p className="text-xs text-amber-700 leading-relaxed">
                みんなが同じ道を共有している状態。ふだんは快適でも、
                イベントの日は全員が同じ道に集中して渋滞が起きる。
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
              <div className="text-sm font-bold text-red-800 mb-2">🏢 SA ＝ 専用レーンつき高速道路</div>
              <p className="text-xs text-red-700 leading-relaxed">
                動画用・ゲーム用・通常用と、用途別に専用レーンがある状態。
                混雑しても各レーンが確保されているので安定しやすい。
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-8 text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <div className="text-2xl mb-3">💡</div>
          <h3 className="text-xl font-bold mb-3">NSAは橋渡し。SAが「本物の5G」体験へ。</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
            NSAは4Gから5Gへの移行を支えた立役者。
            SAは「ライブ会場でも・ゲームでも・動画でも安定する5G」を実現する、
            次のステージです。ドコモは両者を段階的に展開中です。
          </p>
        </div>

      </div>
    </section>
  );
}
