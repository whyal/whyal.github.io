"use client";

import { useState } from "react";
import ThemeToggle from "./theme-toggle-wrapper";

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#connect", label: "Connect" },
];

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((current) => !current);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-10 border-b border-[color:var(--border)] bg-[color:var(--surface-strong)]/90 backdrop-blur">
            <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between gap-4">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[0.08em] text-[var(--foreground)] sm:text-xl"
                    >
                        whyal
                    </a>

                    <div className="flex items-center gap-2 sm:hidden">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="flex h-10 w-10 items-center justify-center text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            aria-label="Toggle navigation menu"
                        >
                            <span className="flex w-5 flex-col items-end gap-1.5">
                                <span className="h-0.5 w-5 rounded-full bg-current" />
                                <span className="h-0.5 w-3 rounded-full bg-current" />
                            </span>
                        </button>
                    </div>

                    <div className="hidden items-center gap-3 sm:flex">
                        <nav aria-label="Primary navigation">
                            <ul className="flex flex-wrap items-center justify-end gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="block rounded-full px-3 py-2 transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--foreground)]"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <ThemeToggle />
                    </div>
                </div>

                {isOpen ? (
                    <nav
                        id="mobile-navigation"
                        aria-label="Mobile navigation"
                        className="mt-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-3 sm:hidden"
                    >
                        <ul className="space-y-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block rounded-xl px-3 py-3 transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--foreground)]"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ) : null}
            </div>
        </header>
    );
}
