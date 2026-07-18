"use client";

import { useI18n } from "@/i18n/context";

export default function Contact() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative py-32 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="gradient-text">{t.contact.heroTitle}</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed">
              {t.contact.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Gracias por contactarnos! / Thanks for reaching out!");
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-300 mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                required
                rows={6}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3.5 rounded-full text-base transition-all hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
            >
              {t.contact.send}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
