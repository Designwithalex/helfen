"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./ui";
import { IconWhatsApp } from "./icons";
import { nav, whatsappLink } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || open ? "bg-brand-gradient shadow-md" : "bg-brand-gradient"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6 sm:h-24">
          <a
            href="#inicio"
            className="cursor-pointer rounded-lg"
            aria-label="Helfen — Inicio"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex cursor-pointer items-center rounded-full px-4 py-2.5 text-[0.9375rem] font-medium text-white transition-colors duration-200 hover:bg-white/15"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[0.9375rem] font-semibold text-brand-700 shadow-sm transition-all duration-200 hover:bg-brand-50 hover:shadow-md md:inline-flex"
            >
              <IconWhatsApp className="size-5" />
              Escribinos por WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex size-12 cursor-pointer items-center justify-center rounded-xl text-white transition-colors duration-200 hover:bg-white/15 lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-white/20 bg-brand-700 lg:hidden"
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer rounded-xl px-4 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-white/15"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-white px-6 py-4 text-base font-semibold text-brand-700"
          >
            <IconWhatsApp className="size-5" />
            Escribinos por WhatsApp
          </a>
        </Container>
      </div>
    </header>
  );
}
