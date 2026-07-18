"use client";

import { useI18n } from "@/i18n/context";

export default function About() {
  const { t } = useI18n();

  const sections = [
    {
      icon: "🌍",
      title: t.about.visionTitle,
      text: t.about.visionText,
    },
    {
      icon: "🔥",
      title: t.about.activismTitle,
      text: t.about.activismText,
    },
    {
      icon: "🧭",
      title: t.about.paradigmTitle,
      text: t.about.paradigmText,
    },
  ];

  return (
    <>
      <section className="relative py-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="gradient-text">{t.about.heroTitle}</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              {t.about.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-5xl mb-6">{section.icon}</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                  {section.title}
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {section.text}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-500/10 to-lime-400/5 border border-zinc-800 flex items-center justify-center">
                  <div className="text-7xl opacity-50">{section.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
