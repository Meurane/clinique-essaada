"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Menu, X, Phone } from "lucide-react";
import { navRoutes } from "@/lib/routes";
import { site } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <nav
        className="container-custom flex items-center justify-between h-16 md:h-20"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-lg md:text-xl text-primary-700"
        >
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-600 text-white grid place-items-center">
            <Heart className="w-5 h-5" aria-hidden="true" />
          </span>
          <span>Clinique ESSAADA</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navRoutes.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                aria-current={isActive(r.href) ? "page" : undefined}
                className={`px-3.5 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(r.href)
                    ? "text-primary-700 bg-primary-50"
                    : "text-neutral-700 hover:text-primary-700 hover:bg-neutral-50"
                }`}
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors min-h-[44px]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Appeler</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-neutral-800 min-h-[44px] min-w-[44px]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto"
        >
          <ul className="flex flex-col p-4 gap-1">
            {navRoutes.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  aria-current={isActive(r.href) ? "page" : undefined}
                  className={`block px-4 py-4 rounded-xl text-xl font-medium ${
                    isActive(r.href)
                      ? "bg-primary-50 text-primary-700"
                      : "text-neutral-800 hover:bg-neutral-50"
                  }`}
                >
                  {r.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-neutral-200">
              <Link
                href="/rendez-vous"
                className="block w-full text-center bg-primary-600 text-white px-4 py-4 rounded-xl text-lg font-semibold"
              >
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
