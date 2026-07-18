"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

const pillarIcons = [
  // Education
  <svg key="edu" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
  // Encounter
  <svg key="enc" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>,
  // Communication
  <svg key="com" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>,
];

export default function Home() {
  const { t } = useI18n();

  const pillarsData = [
    { ...t.pillars.education, icon: pillarIcons[0], color: "emerald" },
    { ...t.pillars.encounter, icon: pillarIcons[1], color: "lime" },
    { ...t.pillars.communication, icon: pillarIcons[2], color: "emerald" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                ONG Regenerativa
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              <span className="gradient-text">{t.hero.title}</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-3.5 rounded-full text-base transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                {t.hero.cta}
              </Link>
              <Link
                href="/contact"
                className="border border-zinc-700 hover:border-emerald-500 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all hover:text-emerald-400"
              >
                {t.hero.ctaDonate}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-lime-400/5 rounded-full blur-2xl hidden lg:block" />
      </section>

      {/* MISSION */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {t.mission.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tight">
              {t.mission.title}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVISM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">
                {t.activism.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6 tracking-tight">
                {t.activism.title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {t.activism.description}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-lime-400/10 border border-emerald-500/10 flex items-center justify-center">
                <div className="text-8xl">🌱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {t.pillars.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
              {t.pillars.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillarsData.map((pillar, i) => (
              <div
                key={i}
                className="card-hover bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pillars"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
            >
              {t.hero.cta}
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 8h8m-4-4 4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="gradient-text">{t.cta.title}</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link
            href="/contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-10 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-emerald-500/25 inline-block"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
