"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Heart, Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  primaryNav,
  isNavGroup,
  type NavGroup,
} from "@/lib/routes";
import { site } from "@/lib/site";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (i: number) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(i);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimerRef.current = null;
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const firstLink = drawerRef.current?.querySelector<HTMLElement>("a, button, summary");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
        'a, button, summary, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (openDropdown === null) return;
    const onMouseDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openDropdown]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isGroupActive = (group: NavGroup) =>
    (group.href ? isActive(group.href) : false) ||
    group.items.some((item) => pathname === item.href || pathname.startsWith(item.href + "/"));

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav
        ref={navRef}
        className="container-custom flex items-center justify-between h-16 md:h-20"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display font-bold text-lg xl:text-xl text-primary-700 shrink-0"
          aria-label="Clinique ESSAADA — Accueil"
        >
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-600 text-white grid place-items-center shrink-0">
            <Heart className="w-5 h-5" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap">Clinique ESSAADA</span>
        </Link>

        <ul className="hidden min-[1080px]:flex items-center gap-0.5 xl:gap-1">
          {primaryNav.map((entry, i) => {
            if (!isNavGroup(entry)) {
              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    aria-current={isActive(entry.href) ? "page" : undefined}
                    className={`px-3 xl:px-3.5 py-2 rounded-lg text-sm xl:text-base font-medium whitespace-nowrap transition-colors ${
                      isActive(entry.href)
                        ? "text-primary-700 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-700 hover:bg-neutral-50"
                    }`}
                  >
                    {entry.label}
                  </Link>
                </li>
              );
            }

            const active = isGroupActive(entry);
            const isOpen = openDropdown === i;
            return (
              <li
                key={entry.label}
                className="relative group"
                onMouseEnter={() => openMenu(i)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : i)}
                  onFocus={() => openMenu(i)}
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  className={`inline-flex items-center gap-1 px-3 xl:px-3.5 py-2 rounded-lg text-sm xl:text-base font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "text-primary-700 bg-primary-50"
                      : "text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 group-hover:text-primary-700 group-hover:bg-neutral-50"
                  }`}
                >
                  {entry.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 z-50 min-w-[300px] ${isOpen ? "block" : "hidden group-hover:block"}`}
                  onMouseEnter={() => openMenu(i)}
                  onMouseLeave={scheduleClose}
                >
                    <div
                      role="menu"
                      aria-label={entry.label}
                      className="bg-white rounded-xl shadow-xl ring-1 ring-neutral-150 p-2"
                    >
                      {entry.href && (
                        <Link
                          href={entry.href}
                          role="menuitem"
                          className="block px-3 py-2.5 rounded-lg hover:bg-primary-50 mb-1 border-b border-neutral-100"
                          aria-current={pathname === entry.href ? "page" : undefined}
                        >
                          <div className="text-sm font-semibold text-primary-700 inline-flex items-center gap-1.5">
                            Vue d'ensemble
                            <span aria-hidden="true">→</span>
                          </div>
                        </Link>
                      )}
                      <ul className="space-y-0.5">
                        {entry.items.map((item) => {
                          const itemActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + "/");
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                role="menuitem"
                                aria-current={itemActive ? "page" : undefined}
                                className={`block px-3 py-2.5 rounded-lg transition-colors ${
                                  itemActive
                                    ? "bg-primary-50"
                                    : "hover:bg-neutral-50"
                                }`}
                              >
                                <div className="font-medium text-neutral-900 text-sm leading-snug">
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-neutral-500 mt-0.5 leading-snug">
                                    {item.description}
                                  </div>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
              </li>
            );
          })}
        </ul>

        <div className="hidden min-[1080px]:flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold transition-colors min-h-[48px]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Appeler</span>
          </a>
        </div>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen(!open)}
          className="min-[1080px]:hidden p-2 -mr-2 text-neutral-800 min-h-[48px] min-w-[48px] grid place-items-center"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-haspopup="menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="min-[1080px]:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white z-40 overflow-y-auto"
        >
          <ul className="flex flex-col p-4 gap-1">
            {primaryNav.map((entry) => {
              if (!isNavGroup(entry)) {
                return (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      aria-current={isActive(entry.href) ? "page" : undefined}
                      className={`block px-4 py-4 rounded-xl text-xl font-medium ${
                        isActive(entry.href)
                          ? "bg-primary-50 text-primary-700"
                          : "text-neutral-800 hover:bg-neutral-50"
                      }`}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }

              const active = isGroupActive(entry);
              return (
                <li key={entry.label}>
                  <details className="group" open={active}>
                    <summary
                      className={`flex items-center justify-between px-4 py-4 rounded-xl text-xl font-medium cursor-pointer list-none ${
                        active
                          ? "bg-primary-50 text-primary-700"
                          : "text-neutral-800 hover:bg-neutral-50"
                      }`}
                    >
                      <span>{entry.label}</span>
                      <ChevronDown
                        className="w-5 h-5 transition-transform group-open:rotate-180 shrink-0"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="pl-4 mt-1 mb-2 ml-4 space-y-0.5 border-l-2 border-primary-100">
                      {entry.href && (
                        <li>
                          <Link
                            href={entry.href}
                            className="block px-4 py-3 rounded-lg text-base font-semibold text-primary-700 hover:bg-primary-50"
                            aria-current={pathname === entry.href ? "page" : undefined}
                          >
                            Vue d'ensemble →
                          </Link>
                        </li>
                      )}
                      {entry.items.map((item) => {
                        const itemActive =
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/");
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={itemActive ? "page" : undefined}
                              className={`block px-4 py-3 rounded-lg text-base ${
                                itemActive
                                  ? "bg-primary-50 text-primary-700 font-semibold"
                                  : "text-neutral-700 hover:bg-neutral-50"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
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
