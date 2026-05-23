"use client";

import { useScrollAnimation } from "./useScrollAnimation";

type Winner = "nsa" | "sa" | "tie";

interface ComparisonRow {
  category: string;
  icon: string;
  nsa: string;
  sa: string;
  winner: Winner;
  detail?: string;
}

const rows: ComparisonRow[] = [
  {
    category: "コアネットワーク",
    icon: "🖥️",
    nsa: "4G EPC（既存）",
    sa: "5G Core（新設）",
    winner: "sa",
    detail: "SAは5GCを新設するため真の5G機能が使える",
  },
  {
    category: "制御方式",
    icon: "🔀",
    nsa: "4G LTEが担当",
    sa: "5G単独で完結",
    winner: "sa",
    detail: "NSAは4GのコントロールプレーンC-planeに依存",
  },
  {
    category: "展開・導入コスト",
    icon: "💰",
    nsa: "低コスト（既存流用）",
    sa: "高コスト（全新設）",
    winner: "nsa",
    detail: "NSAは4G資産を活用できるため初期投資が少ない",
  },
  {
    category: "通信遅延",
    icon: "⏱️",
    nsa: "数十ms程度",
    sa: "1〜5ms（理論値）",
    winner: "sa",
    detail: "SAはUPFエッジ配置で超低遅延を実現できる",
  },
  {
    category: "ネットワークスライシング",
    icon: "🔪",
    nsa: "非対応",
    sa: "完全対応",
    winner: "sa",
    detail: "スライシングは5GCの機能のためSA専用",
  },
  {
    category: "エッジコンピューティング",
    icon: "🌐",
    nsa: "限定的",
    sa: "本格対応（MEC）",
    winner: "sa",
    detail: "5GCのUPF分散配置によりMECが本領発揮",
  },
  {
    category: "エリアカバレッジ",
    icon: "📡",
    nsa: "広い（先行展開済み）",
    sa: "拡大中",
    winner: "nsa",
    detail: "NSAのほうが先に普及しているためエリアは広い",
  },
  {
    category: "現在のドコモ主用途",
    icon: "📱",
    nsa: "一般スマホ向け",
    sa: "法人・IoT向け拡大",
    winner: "tie",
    detail: "ドコモはSAも段階的に展開中",
  },
];

function WinnerBadge({ winner, side }: { winner: Winner; side: "nsa" | "sa" }) {
  if (winner === "tie") {
    return (
      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">引き分け</span>
    );
  }
  if (winner === side) {
    return (
      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-100 text-green-700">◎ 優位</span>
    );
  }
  return null;
}

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comparison" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">

        {/* section header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4 border border-gray-200">
            Section 03
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NSA vs SA 徹底比較
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            「どちらが優れているか」ではなく、<strong>目的と状況に応じた使い分け</strong>が重要。
          </p>
        </div>

        {/* header row */}
        <div className={`grid grid-cols-7 gap-2 mb-3 ${isVisible ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
          <div className="col-span-2" />
          <div className="col-span-2 text-center">
            <div className="inline-block px-4 py-2 rounded-xl bg-amber-100 text-amber-700 font-bold text-sm border border-amber-200 w-full">
              NSA
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center text-gray-300 text-lg font-light">vs</div>
          <div className="col-span-2 text-center">
            <div className="inline-block px-4 py-2 rounded-xl bg-red-100 text-red-700 font-bold text-sm border border-red-200 w-full">
              SA
            </div>
          </div>
        </div>

        {/* comparison rows */}
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-7 gap-2 items-stretch rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${isVisible ? `animate-fade-in-up delay-${Math.min((i + 2) * 100, 600)}` : "opacity-0"}`}
            >
              {/* category */}
              <div className="col-span-2 flex items-center gap-2 p-3 bg-gray-50 border-r border-gray-100">
                <span className="text-xl shrink-0">{row.icon}</span>
                <div>
                  <div className="text-xs font-semibold text-gray-700 leading-tight">{row.category}</div>
                  {row.detail && (
                    <div className="text-[10px] text-gray-400 mt-0.5 leading-tight hidden sm:block">{row.detail}</div>
                  )}
                </div>
              </div>

              {/* NSA */}
              <div className={`col-span-2 flex flex-col items-center justify-center p-3 text-center
                ${row.winner === "nsa" ? "bg-amber-50" : "bg-white"}`}>
                <div className={`text-xs font-medium leading-tight mb-1 ${row.winner === "nsa" ? "text-amber-800" : "text-gray-500"}`}>
                  {row.nsa}
                </div>
                <WinnerBadge winner={row.winner} side="nsa" />
              </div>

              {/* divider */}
              <div className="col-span-1 flex items-center justify-center bg-white">
                <div className="w-px h-8 bg-gray-200" />
              </div>

              {/* SA */}
              <div className={`col-span-2 flex flex-col items-center justify-center p-3 text-center
                ${row.winner === "sa" ? "bg-red-50" : "bg-white"}`}>
                <div className={`text-xs font-medium leading-tight mb-1 ${row.winner === "sa" ? "text-red-700" : "text-gray-500"}`}>
                  {row.sa}
                </div>
                <WinnerBadge winner={row.winner} side="sa" />
              </div>
            </div>
          ))}
        </div>

        {/* summary cards */}
        <div className={`grid sm:grid-cols-2 gap-6 mt-12 ${isVisible ? "animate-fade-in-up delay-500" : "opacity-0"}`}>
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200 flex items-center justify-center text-xl">🏗️</div>
              <div className="font-bold text-amber-800">NSA が向いている場面</div>
            </div>
            <ul className="space-y-2">
              {[
                "早期に5Gエリアを広げたい",
                "既存4G設備を最大限活用したい",
                "一般コンシューマー向けの高速通信",
                "5G投資コストを抑えたい初期フェーズ",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-amber-700">
                  <span className="text-amber-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-200 flex items-center justify-center text-xl">🏢</div>
              <div className="font-bold text-red-800">SA が向いている場面</div>
            </div>
            <ul className="space-y-2">
              {[
                "工場・病院・自動運転など超低遅延が必要",
                "用途別に帯域保証したい法人向け",
                "ネットワークスライシングを活用したい",
                "将来のB5G／6Gに向けた基盤構築",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-red-700">
                  <span className="text-red-400 mt-0.5 shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white ${isVisible ? "animate-fade-in-up delay-600" : "opacity-0"}`}>
          <div className="text-2xl mb-3">💡</div>
          <h3 className="text-xl font-bold mb-3">まとめ：NSAは橋渡し、SAが本命</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
            NSAは4Gから5Gへの移行期を支える「橋渡し技術」。
            SAはIoT・産業用途・次世代サービスを支える「真の5G基盤」。
            ドコモは両者を段階的に展開し、完全SA化を目指している。
          </p>
        </div>

      </div>
    </section>
  );
}
