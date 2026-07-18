"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center text-zinc-950 font-black text-sm">
                R
              </div>
              <span className="text-white font-bold text-lg">Regenera</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/pillars"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {t.nav.pillars}
              </Link>
              <Link
                href="/contact"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Social
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block text-zinc-400 hover:text-white text-sm transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800/50 mt-10 pt-6 text-center text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} Regenera. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
