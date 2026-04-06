type PortfolioCardProps = {
    category: string;
    status: string;
    title: string;
    summary: string;
};

function getStatusClasses(status: string) {
    if (status === "Completed") {
        return "bg-emerald-500/14 text-emerald-700 dark:text-emerald-300";
    }

    if (status === "In Progress") {
        return "bg-amber-400/18 text-amber-800 dark:text-amber-300";
    }

    return "bg-[color:var(--accent-soft)] text-[var(--accent)]";
}

export default function PortfolioCard({
    category,
    status,
    title,
    summary,
}: PortfolioCardProps) {
    return (
        <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--accent)] sm:p-6">
            <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                    <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${getStatusClasses(status)}`}
                    >
                        {status}
                    </span>
                </div>
                <div className="space-y-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl leading-tight text-[var(--foreground)]">
                        {title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {summary}
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-[color:var(--border)] pt-4 text-sm font-semibold text-[var(--muted)]">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                    {category}
                </span>
            </div>
        </article>
    );
}
