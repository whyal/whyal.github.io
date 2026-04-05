"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)] sm:w-auto sm:text-xs sm:tracking-[0.18em]"
            aria-label="Toggle website theme"
            title="Toggle theme"
        >
            <span aria-hidden="true">
                {resolvedTheme === "dark" ? "Moon" : "Sun"}
            </span>
        </button>
    );
}
