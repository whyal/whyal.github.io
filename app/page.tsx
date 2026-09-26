"use client";

import { useState } from "react";
import Image from "next/image";
import { CHARACTER_DATA } from "./data/character";

const RARITY_COLOR: Record<string, string> = {
    Legendary: "rarity-legendary",
    Epic: "rarity-epic",
    Rare: "rarity-rare",
    Awesome: "rarity-awesome",
    Artifact: "rarity-artifact",
};

const STATUS_COLOR: Record<string, string> = {
    Completed: "#16a34a",
    "In Progress": "#ca8a04",
};

export default function CharacterPage() {
    const [activeTab, setActiveTab] = useState<"projects" | "skills">(
        "projects",
    );
    const d = CHARACTER_DATA;

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start py-6 px-3 sm:px-6"
            style={{ background: "var(--rpg-page-bg)" }}
        >
            {/* ── Outer Window Frame ──────────────────────────────────── */}
            <div
                className="rpg-frame w-full max-w-4xl"
                style={{ borderRadius: 0 }}
            >
                {/* Window title bar */}
                <div
                    className="flex items-center justify-between px-3 py-1.5"
                    style={{
                        background:
                            "linear-gradient(180deg,#8a6010 0%,#5a3c08 100%)",
                        borderBottom: "2px solid #b07820",
                    }}
                >
                    <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{
                            color: "#fff8e8",
                            fontFamily: '"Cinzel", Palatino, serif',
                            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
                        }}
                    >
                        Character Info
                    </span>
                    {/* Classic fake window buttons */}
                    <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-sm border border-[#8a6010] bg-[#c8b89a] flex items-center justify-center text-[9px] text-[#2c1a0e] font-bold leading-none cursor-default select-none">
                            _
                        </div>
                        <div className="w-4 h-4 rounded-sm border border-[#8a6010] bg-[#c8b89a] flex items-center justify-center text-[9px] text-[#2c1a0e] font-bold leading-none cursor-default select-none">
                            □
                        </div>
                        <div className="w-4 h-4 rounded-sm border border-[#8a6010] bg-[#c04030] flex items-center justify-center text-[9px] text-white font-bold leading-none cursor-default select-none">
                            ✕
                        </div>
                    </div>
                </div>

                {/* ── Main body: 2-column layout ─────────────────────── */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-12"
                    style={{ background: "var(--rpg-panel-bg)" }}
                >
                    {/* LEFT: Portrait + Character Info */}
                    <aside
                        className="lg:col-span-4 p-4 flex flex-col gap-3"
                        style={{
                            borderRight: "2px inset #8a6010",
                            background: "var(--rpg-panel-bg)",
                        }}
                    >
                        {/* Portrait Box */}
                        <div className="rpg-inner-frame flex flex-col items-center justify-center py-6 px-4 gap-3 relative">
                            {/* Gold corner ornaments (CSS-only) */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 2,
                                    left: 2,
                                    width: 10,
                                    height: 10,
                                    borderTop: "2px solid var(--rpg-gold)",
                                    borderLeft: "2px solid var(--rpg-gold)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 2,
                                    right: 2,
                                    width: 10,
                                    height: 10,
                                    borderTop: "2px solid var(--rpg-gold)",
                                    borderRight: "2px solid var(--rpg-gold)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 2,
                                    left: 2,
                                    width: 10,
                                    height: 10,
                                    borderBottom: "2px solid var(--rpg-gold)",
                                    borderLeft: "2px solid var(--rpg-gold)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 2,
                                    right: 2,
                                    width: 10,
                                    height: 10,
                                    borderBottom: "2px solid var(--rpg-gold)",
                                    borderRight: "2px solid var(--rpg-gold)",
                                }}
                            />

                            {/* Avatar circle */}
                            <div
                                style={{
                                    width: 110,
                                    height: 110,
                                    borderRadius: "50%",
                                    border: "3px solid var(--rpg-gold-border)",
                                    boxShadow:
                                        "0 3px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
                                }}
                                className="relative overflow-hidden shrink-0"
                            >
                                <Image
                                    src="/yl-headshot.jpeg"
                                    alt={d.name}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>

                            {/* Name & title */}
                            <div className="text-center">
                                <div
                                    className="rpg-font-title text-xl font-extrabold"
                                    style={{ color: "var(--rpg-gold-dark)" }}
                                >
                                    {d.name}
                                </div>
                                <div
                                    className="text-xs mt-0.5"
                                    style={{ color: "var(--rpg-text-muted)" }}
                                >
                                    {d.title}
                                </div>
                            </div>
                        </div>

                        {/* Character info table */}
                        <div className="rpg-inner-frame text-xs">
                            {[
                                { label: "Class", value: d.class },
                                { label: "Major", value: d.major },
                                { label: "Guild", value: `<${d.guild}>` },
                                { label: "Server", value: d.server },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-baseline justify-between px-3 py-1.5"
                                    style={{
                                        borderBottom:
                                            "1px solid var(--rpg-stone)",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "var(--rpg-text-muted)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {label}
                                    </span>
                                    <span
                                        style={{
                                            color: "var(--rpg-text)",
                                            textAlign: "right",
                                            maxWidth: "60%",
                                        }}
                                    >
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* External links */}
                        <div className="flex flex-col gap-1.5 mt-1">
                            <a
                                href={d.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rpg-tab-btn text-center block py-1.5"
                                style={{
                                    fontFamily: "Tahoma, Verdana, sans-serif",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                GitHub Profile ↗
                            </a>
                            <a
                                href={d.linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rpg-tab-btn text-center block py-1.5"
                                style={{
                                    fontFamily: "Tahoma, Verdana, sans-serif",
                                    letterSpacing: "0.05em",
                                }}
                            >
                                LinkedIn Profile ↗
                            </a>
                        </div>
                    </aside>

                    {/* RIGHT: Tabs — Projects / Skills */}
                    <section
                        className="lg:col-span-8 flex flex-col"
                        style={{ background: "var(--rpg-panel-bg)" }}
                    >
                        {/* Tab strip */}
                        <div
                            className="flex items-end px-3 pt-2 gap-1"
                            style={{
                                borderBottom:
                                    "2px solid var(--rpg-gold-border)",
                                background: "var(--rpg-panel-dark)",
                            }}
                        >
                            {(["projects", "skills"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={
                                        activeTab === tab
                                            ? "rpg-tab-btn rpg-tab-btn-active"
                                            : "rpg-tab-btn"
                                    }
                                >
                                    {tab === "projects"
                                        ? `📜 Projects (${d.projects.length})`
                                        : "⚔️ Skills"}
                                </button>
                            ))}
                        </div>

                        {/* Tab body */}
                        <div
                            className="flex-1 p-4 overflow-y-auto"
                            style={{ maxHeight: 520 }}
                        >
                            {/* ── PROJECTS tab ─────────────────────────────── */}
                            {activeTab === "projects" && (
                                <div className="space-y-3">
                                    {d.projects.map((proj) => (
                                        <div
                                            key={proj.id}
                                            className="rpg-inner-frame rpg-item-row p-3 space-y-2"
                                        >
                                            {/* Header row */}
                                            <div className="flex items-start justify-between gap-2 flex-wrap">
                                                <span
                                                    className="text-sm font-bold rpg-font-title"
                                                    style={{
                                                        color: "var(--rpg-text)",
                                                        fontSize: 13,
                                                    }}
                                                >
                                                    {proj.name}
                                                </span>
                                                <div className="flex items-center gap-2 text-[11px] font-bold">
                                                    <span
                                                        className={
                                                            RARITY_COLOR[
                                                                proj.rarity
                                                            ]
                                                        }
                                                    >
                                                        [{proj.rarity}]
                                                    </span>
                                                    <span
                                                        className="px-1.5 py-0.5 rounded-sm font-semibold"
                                                        style={{
                                                            background:
                                                                "rgba(0,0,0,0.1)",
                                                            color:
                                                                STATUS_COLOR[
                                                                    proj.status
                                                                ] ??
                                                                "var(--rpg-text-muted)",
                                                            border: `1px solid ${STATUS_COLOR[proj.status] ?? "var(--rpg-stone)"}`,
                                                        }}
                                                    >
                                                        {proj.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p
                                                className="text-xs leading-relaxed"
                                                style={{
                                                    color: "var(--rpg-text-muted)",
                                                }}
                                            >
                                                {proj.description}
                                            </p>

                                            {/* Tag chips */}
                                            <div className="flex flex-wrap gap-1">
                                                {proj.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] px-2 py-0.5 rounded-sm font-mono"
                                                        style={{
                                                            background:
                                                                "rgba(0,0,0,0.12)",
                                                            border: "1px solid var(--rpg-stone)",
                                                            color: "var(--rpg-text)",
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* GitHub link */}
                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="rpg-tab-btn inline-block text-[11px] py-1 px-3 mt-1"
                                                style={{
                                                    fontFamily:
                                                        "Tahoma, sans-serif",
                                                }}
                                            >
                                                {proj.linkLabel}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* ── SKILLS tab ───────────────────────────────── */}
                            {activeTab === "skills" && (
                                <div className="space-y-4">
                                    {d.skills.map((group) => (
                                        <div
                                            key={group.category}
                                            className="rpg-inner-frame overflow-hidden"
                                        >
                                            {/* Category title bar */}
                                            <div className="rpg-section-bar flex items-center gap-1.5">
                                                <span>{group.icon}</span>
                                                <span>{group.category}</span>
                                            </div>
                                            {/* Skill chips */}
                                            <div className="p-2.5 flex flex-wrap gap-2">
                                                {group.items.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-xs font-semibold px-2.5 py-1"
                                                        style={{
                                                            background:
                                                                "linear-gradient(180deg,#c8b89a,#a89070)",
                                                            border: "1px solid var(--rpg-gold-border)",
                                                            color: "var(--rpg-text)",
                                                            boxShadow:
                                                                "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* ── Footer status bar ──────────────────────────────────── */}
                <div
                    className="flex items-center justify-between px-3 py-1 text-[11px]"
                    style={{
                        background: "linear-gradient(180deg,#a08060,#8a6840)",
                        borderTop: "2px solid var(--rpg-gold-dark)",
                        color: "#fff8e8",
                    }}
                >
                    <span style={{ textShadow: "0 1px 1px rgba(0,0,0,0.5)" }}>
                        Server: {d.server} &nbsp;
                    </span>
                    <span
                        style={{
                            textShadow: "0 1px 1px rgba(0,0,0,0.5)",
                            fontFamily: '"Cinzel", Palatino, serif',
                        }}
                    >
                        whyal © {new Date().getFullYear()}
                    </span>
                </div>
            </div>
        </div>
    );
}
