import HeroCard from "./hero-card";
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
        <section className="grid flex-1 items-center gap-10 py-8 sm:gap-12 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="space-y-6 sm:space-y-8">
            {/* Distinct Identity & Location Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="uppercase tracking-[0.18em] text-[var(--muted)] text-[11px] sm:text-xs">
                Software Engineer &amp; Builder
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm">
                Hello, I&apos;m
              </p>
              <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Yong Lun
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">
                I like building stuffs that solve problems (and occasionally
                break things).
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#connect"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(15,118,110,0.25)] sm:w-auto"
              >
                <span>Let&apos;s Connect</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[var(--accent)] hover:translate-y-[-1px] sm:w-auto"
              >
                <span>View Portfolio</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* High-Level Highlights Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--muted)]">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[var(--foreground)] text-sm">
                  2+
                </span>
                <span>Featured Projects</span>
              </div>
              <span className="text-[color:var(--border)]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[var(--foreground)] text-sm">
                  Focus:
                </span>
                <span>Software Development &amp; AI Systems </span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <HeroCard />
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
              category="RAG / AI"
              status="In Progress"
              title="Smart Travel Itinerary Planner"
              summary="An AI assistant that helps users plan their travel itinerary by providing recommendations for activities."
            />
            <PortfolioCard
              category="Machine Learning / Mobile Development"
              status="In Progress"
              title="Smartphone-Based Eye-Gaze Biometric Authentication"
              summary="An exploratory pilot study involving 12 participants to determine if consumer-grade smartphones can reliably capture eye-gaze behavioural biomarkers for user authentication."
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
