"use client";

import { useI18n } from "@/i18n/context";

export default function Pillars() {
  const { t } = useI18n();

  const pillars = [
    {
      icon: "📚",
      color: "emerald",
      title: t.pillarsPage.educationTitle,
      items: t.pillarsPage.educationItems,
    },
    {
      icon: "🤝",
      color: "lime",
      title: t.pillarsPage.encounterTitle,
      items: t.pillarsPage.encounterItems,
    },
    {
      icon: "📡",
      color: "emerald",
      title: t.pillarsPage.communicationTitle,
      items: t.pillarsPage.communicationItems,
    },
  ];

  return (
    <>
      <section className="relative py-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="gradient-text">{t.pillarsPage.heroTitle}</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              {t.pillarsPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div>
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                    {pillar.title}
                  </h2>
                </div>
                <div>
                  <ul className="space-y-4">
                    {pillar.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                        <span className="text-zinc-300 text-lg leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
