import ThemeToggle from "./theme-toggle-wrapper";

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <header className="sticky top-0 z-10 border-b border-[color:var(--border)] bg-[color:var(--surface-strong)]/90 backdrop-blur">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                    <a
                        href="#home"
                        className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-[0.08em] text-[var(--foreground)] sm:text-xl"
                    >
                        whyal
                    </a>
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:w-auto lg:justify-end">
                        <nav
                            aria-label="Primary navigation"
                            className="w-full sm:w-auto"
                        >
                            <ul className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-3 sm:text-sm sm:text-left sm:tracking-[0.16em]">
                                <li>
                                    <a
                                        href="#home"
                                        className="block rounded-full px-3 py-2 transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--foreground)]"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#connect"
                                        className="block rounded-full px-3 py-2 transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--foreground)]"
                                    >
                                        Connect
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main
                id="home"
                className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-10"
            >
                <section className="grid flex-1 items-center gap-10 py-8 sm:gap-12 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
                    <div className="space-y-6 sm:space-y-8">
                        <p className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                            Personal Website
                        </p>
                        <div className="space-y-4 sm:space-y-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm sm:tracking-[0.24em]">
                                Hello, I&apos;m
                            </p>
                            <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                                Yong Lun
                            </h1>
                            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">
                                From training neural networks to training for a
                                handstand. I’m a big fan of the &quot;start
                                before you’re ready&quot; philosophy—whether
                                that’s planning a trip to Osaka, routing a new
                                circuit board, or experimenting with generative
                                art. This is where I document the journey.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                            <a
                                href="#connect"
                                className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_40px_rgba(12,74,110,0.18)] sm:w-auto"
                            >
                                Let&apos;s Connect
                            </a>
                            <a
                                href="https://whyal.github.io/portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)] sm:w-auto"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>

                    <aside className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[image:var(--card-gradient)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-8">
                        <div className="absolute inset-x-6 top-6 h-px bg-[image:var(--card-highlight)]" />
                        <div className="relative space-y-6 sm:space-y-8">
                            <div className="space-y-2">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.22em]">
                                    TL;DR
                                </p>
                                <p className="font-[family-name:var(--font-heading)] text-2xl leading-tight text-[var(--foreground)] sm:text-3xl">
                                    Engineer by day, digital explorer by night
                                </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                <div className="rounded-3xl bg-[color:var(--surface)] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                                        Focus
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                                        Blending high-level AI with
                                        hardware-level logic to see what happens
                                        when code meets the real world.
                                    </p>
                                </div>
                                <div className="rounded-3xl bg-[color:var(--surface)] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                                        Style
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                                        A mix of disciplined engineering,
                                        creative chaos, and a lot of &quot;What
                                        if I tried this?&quot;
                                    </p>
                                </div>
                                <div className="rounded-3xl bg-[color:var(--surface)] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                                        Side Quests
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                                        Exploring the intersection of
                                        engineering principles and creative
                                        expression. Currently deep in the
                                        &quot;learning&quot; phase of something
                                        new.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>
            </main>

            <footer
                id="connect"
                className="border-t border-[color:var(--border)] bg-[color:var(--surface)]"
            >
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                    <div className="space-y-2">
                        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                            Software Engineer & Curious Builder. Exploring the
                            intersection of edge AI, robust systems, and digital
                            art.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap sm:items-center">
                        <a
                            href="https://www.linkedin.com/in/yong-lun-tan/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-center text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/whyal"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-center text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)]"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
