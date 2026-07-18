"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";
import { useState } from "react";

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/pillars", label: t.nav.pillars },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-400 flex items-center justify-center text-zinc-950 font-black text-sm">
            R
          </div>
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
            Regenera
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLocale}
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <Link
            href="/contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm px-5 py-2 rounded-full transition-colors"
          >
            {t.nav.donate}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-zinc-300 hover:text-white text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleLocale}
              className="text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 cursor-pointer"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <Link
              href="/contact"
              className="bg-emerald-500 text-zinc-950 font-bold text-sm px-5 py-2 rounded-full"
            >
              {t.nav.donate}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
