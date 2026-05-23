"use client";

import { useScrollAnimation } from "./useScrollAnimation";

const faqs = [
  {
    q: "無料なら、SAにした方がいいの？",
    a: [
      "基本的には、SA対応端末ならONにしておくのがおすすめです。",
      "SAは、混雑時の安定性・低遅延・将来の5Gサービスを見据えた新しい5G構成です。",
      "一方で、エリアや端末の状況によっては体感差が小さい場合もあります。NSAは4G設備を活かして5Gを広く普及させるための、現実的で合理的な方式として普及を支えてきました。",
    ],
  },
  {
    q: "じゃあNSAはもう古いの？",
    a: [
      "NSAは「ダメな方式」ではありません。5Gを短期間で全国へ広げるうえで、重要な役割を果たしてきました。",
      '現在は、"まず広く使える5G" のNSAから、"混雑時や将来サービスに強いSA" へ、少しずつ進化している段階です。',
    ],
  },
  {
    q: "SAにすると常に速くなる？",
    a: [
      "SAは「最高速度」よりも、混雑時の安定性・遅延の少なさ・通信整理の効率に強みがあります。",
      "そのため、ライブ会場・駅・フェス・ゲームなど、人が集中する場面ほど違いが出やすくなります。",
    ],
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-28 px-6 bg-white" ref={ref}>
      <div className={`max-w-3xl mx-auto transition-opacity duration-700 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}>

        {/* header */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-400 text-xs font-medium mb-5 tracking-widest uppercase">
            Section 04
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            よくある疑問
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto">
            "結局どう違うの？" を整理してみる
          </p>
        </div>

        {/* FAQ cards */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`rounded-2xl border border-gray-100 bg-white p-6
                ${isVisible ? `animate-fade-in-up delay-${(i + 1) * 100}` : "opacity-0"}`}
            >
              <p className="text-lg font-semibold text-gray-900 mb-4">{faq.q}</p>
              <div className="space-y-2.5">
                {faq.a.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-gray-600">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* closing CTA */}
        <div className={`p-8 rounded-2xl bg-gray-900 text-white text-center ${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
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
