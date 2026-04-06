import PortfolioCard from "./portfolio-card";
import SiteHeader from "./site-header";

export default function Home() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <SiteHeader />

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
                                I like building stuffs that solve problems (and
                                occasionally break things).
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
                                href="#portfolio"
                                className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)] sm:w-auto"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="portfolio"
                    className="space-y-8 border-t border-[color:var(--border)] py-12 sm:space-y-10 sm:py-16"
                >
                    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm sm:tracking-[0.24em]">
                                Portfolio
                            </p>
                            <h2 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                                A growing collection of my work.
                            </h2>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                        <PortfolioCard
                            category="Machine Learning / Mobile Development"
                            status="In Progress"
                            title="Smartphone-Based Eye-Gaze Biometric Authentication"
                            summary="An exploratory pilot study involving 12 participants to determine if consumer-grade smartphones can reliably capture eye-gaze behavioural biomarkers for user authentication."
                        />
                        <PortfolioCard
                            category="Internet of Things / Mobile Development"
                            status="Completed"
                            title="Remote Kingpost Beam Angle Monitor"
                            summary="An IoT-based construction safety tool that streams MPU6050 beam-angle data to a Flutter app, helping workers verify alignment from a safer distance."
                        />
                    </div>
                </section>
            </main>

            <footer
                id="connect"
                className="border-t border-[color:var(--border)] bg-[color:var(--surface)]"
            >
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                    <div className="space-y-2">
                        <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                            Software Engineer & Curious Builder.
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
