"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

function subscribeScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrolled() {
  return window.scrollY > 12;
}

function getScrolledServer() {
  return false;
}

export function Header() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getScrolledServer);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-border bg-nav-bg backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="font-sans text-[1.05rem] font-semibold tracking-tight text-foreground transition-opacity duration-300 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link py-1 text-sm text-muted transition-colors duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <nav aria-label="Mobile" className="flex items-center gap-5 md:hidden">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-xs text-muted transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
