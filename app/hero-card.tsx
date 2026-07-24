"use client";

import { useState } from "react";

export default function HeroCard() {
  const [activeTab, setActiveTab] = useState<"about" | "stack" | "activity">(
    "about",
  );

  return (
    <div className="relative group w-full max-w-lg lg:max-w-none mx-auto">
      {/* Ambient Background Glow matching accent colors */}
      <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-[var(--accent)] via-teal-400 to-[var(--muted)] opacity-20 blur-xl transition duration-700 group-hover:opacity-35" />

      {/* Main Visual Card Container */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md">
        {/* Header Window Bar */}
        <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-400/90 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-400/90 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/90 inline-block" />
          </div>

          {/* Navigation Tabs - Distinct Purpose Per Tab */}
          <div className="flex items-center gap-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`rounded-md px-2.5 py-1 transition ${
                activeTab === "about"
                  ? "bg-[color:var(--surface)] text-[var(--accent)] font-semibold shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              about.ts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("stack")}
              className={`rounded-md px-2.5 py-1 transition ${
                activeTab === "stack"
                  ? "bg-[color:var(--surface)] text-[var(--accent)] font-semibold shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              tech-stack.json
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("activity")}
              className={`rounded-md px-2.5 py-1 transition ${
                activeTab === "activity"
                  ? "bg-[color:var(--surface)] text-[var(--accent)] font-semibold shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              activity.log
            </button>
          </div>
        </div>

        {/* Card Main Body */}
        <div className="p-5 font-mono text-xs sm:text-sm min-h-[250px] flex flex-col justify-between leading-relaxed">
          {/* TAB 1: Purpose -> Developer Background & Philosophy */}
          {activeTab === "about" && (
            <div className="space-y-2 text-[var(--foreground)]">
              <div>
                <span className="text-[var(--accent)] font-semibold">
                  const
                </span>{" "}
                <span className="font-bold text-[var(--foreground)]">
                  developer
                </span>{" "}
                = &#123;
              </div>
              <div className="pl-4">
                <span className="text-[var(--muted)]">location:</span>{" "}
                <span className="text-[var(--accent)]">
                  &quot;Singapore&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-[var(--muted)]">philosophy:</span>{" "}
                <span className="text-[var(--accent)]">
                  &quot;Turn complex technical ideas into reliable
                  software.&quot;
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-[var(--muted)]">learningNow:</span>{" "}
                <span className="text-[var(--accent)]">
                  &quot;Vector Indexing &amp; Mobile Biometrics&quot;
                </span>
                ,
              </div>
              <div>&#125;;</div>
            </div>
          )}

          {/* TAB 2: Purpose -> Detailed Categorized Tech Stack */}
          {activeTab === "stack" && (
            <div className="space-y-3 font-sans">
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Tooling &amp; Technologies
              </div>
              <div className="space-y-2 text-xs">
                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-2.5">
                  <span className="font-semibold text-[var(--foreground)] block mb-1">
                    Languages &amp; Core
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-[var(--accent)] font-mono">
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      Java
                    </span>
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      JavaScript
                    </span>
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      Python
                    </span>
                  </div>
                </div>
                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-2.5">
                  <span className="font-semibold text-[var(--foreground)] block mb-1">
                    Frameworks &amp; AI
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-[var(--accent)] font-mono">
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      Next.js
                    </span>
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      Spring Boot
                    </span>
                    <span className="rounded bg-[color:var(--accent-soft)] px-2 py-0.5">
                      RAG
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Purpose -> Recent Activity & Project Timeline */}
          {activeTab === "activity" && (
            <div className="space-y-2.5 text-[var(--foreground)] font-mono text-xs">
              <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[var(--muted)]">
                Current Timeline
              </div>
              <div className="space-y-2 border-l-2 border-[color:var(--accent)] pl-3">
                <div>
                  <span className="text-[var(--accent)] font-bold">
                    [Research]
                  </span>{" "}
                  Pilot study on 12-participant smartphone eye-gaze biometrics.
                </div>
                <div>
                  <span className="text-[var(--accent)] font-bold">
                    [Building]
                  </span>{" "}
                  AI-driven smart travel itinerary planner.
                </div>
                <div>
                  <span className="text-[var(--accent)] font-bold">
                    [Status]
                  </span>{" "}
                  Open to engineering roles &amp; technical collaborations.
                </div>
              </div>
            </div>
          )}

          {/* Bottom Attribution Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[color:var(--border)] pt-3 font-sans text-xs text-[var(--muted)]">
            <span className="text-[var(--accent)] font-medium">@whyal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
