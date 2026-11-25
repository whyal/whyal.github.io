import Image from "next/image";
import { PROFILE } from "./data/profile";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-8">
            <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] sm:pt-1">
                {title}
            </h2>
            <div>{children}</div>
        </section>
    );
}

export default function Home() {
    const p = PROFILE;
    const link = "underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-[var(--fg)]";

    return (
        <main className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-20 sm:py-28">
            <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <Image
                    src="/yl-headshot.jpg"
                    alt={p.name}
                    width={96}
                    height={96}
                    className="size-24 rounded-full object-cover"
                    priority
                />
                <div className="space-y-1">
                    <h1 className="text-3xl font-semibold tracking-tight">{p.name}</h1>
                    <p className="text-[var(--muted)]">
                        {p.title} · {p.location}
                    </p>
                    <nav className="flex gap-4 pt-2 text-sm">
                        <a href={p.githubUrl} target="_blank" rel="noreferrer" className={link}>
                            GitHub
                        </a>
                        <a href={p.linkedinUrl} target="_blank" rel="noreferrer" className={link}>
                            LinkedIn
                        </a>
                    </nav>
                </div>
            </header>

            <Section title="About">
                <p className="leading-relaxed">{p.about}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{p.education}</p>
            </Section>

            <Section title="Projects">
                <ul className="space-y-4">
                    {p.projects.map((proj) => (
                        <li key={proj.id}>
                            <a
                                href={proj.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--muted)]"
                            >
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="font-medium">
                                        {proj.name}
                                        <span className="ml-1 inline-block text-[var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            ↗
                                        </span>
                                    </h3>
                                    <span className="text-xs text-[var(--muted)]">{proj.status}</span>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                                    {proj.description}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {proj.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </a>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Skills">
                <dl className="space-y-3 text-sm">
                    {p.skills.map((g) => (
                        <div key={g.category} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
                            <dt className="text-[var(--muted)]">{g.category}</dt>
                            <dd>{g.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </Section>

            <footer className="border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} {p.name}
            </footer>
        </main>
    );
}
