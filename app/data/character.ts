export const CHARACTER_DATA = {
    name: "Yong Lun",
    title: "Software Engineer",
    guild: "Singapore Institute of Technology",
    class: "Software Engineer",
    major: "Computer Engineering",
    server: "Singapore",
    alignment: "Good",
    location: "Singapore 🗺️",
    githubUrl: "https://github.com/whyal",
    linkedinUrl: "https://www.linkedin.com/in/yong-lun-tan/",

    /* ── Skills ─────────────────────────────────────────────── */
    skills: [
        {
            category: "Languages",
            icon: "📜",
            items: ["Java", "Python", "TypeScript", "JavaScript"],
        },
        {
            category: "Frontend",
            icon: "🖼️",
            items: ["Next.js", "React", "Tailwind CSS"],
        },
        {
            category: "Backend",
            icon: "⚙️",
            items: ["Spring Boot", "Node.js", "REST APIs", "Docker"],
        },
        {
            category: "AI & Machine Learning",
            icon: "🔮",
            items: [
                "RAG",
                "LLM Orchestration",
                "Vector Embeddings",
                "Scikit-learn",
            ],
        },
        {
            category: "Developer Tooling",
            icon: "🛠️",
            items: ["Git", "GitHub Actions", "Linux", "CI/CD"],
        },
    ],

    /* ── Projects ───────────────────────────────────────────── */
    projects: [
        {
            id: "travel-planner",
            name: "Smart Travel Itinerary Planner",
            rarity: "Legendary" as const,
            status: "Completed",
            description:
                "An AI assistant that crafts customised travel itineraries using Retrieval-Augmented Generation (RAG) and intelligent activity recommendations.",
            tags: ["RAG / AI", "Next.js", "Vector DB", "LLM"],
            link: "https://github.com/whyal/smart-travel-itinerary-planner",
            linkLabel: "View on GitHub ↗",
        },
        {
            id: "eye-gaze-auth",
            name: "Smartphone Eye-Gaze Biometrics",
            rarity: "Epic" as const,
            status: "In Progress",
            description:
                "An exploratory pilot study involving 12 participants investigating whether consumer smartphones can capture eye-gaze behavioural biomarkers for user authentication.",
            tags: ["Machine Learning", "Mobile Dev", "Biometrics", "Python"],
            link: "https://github.com/whyal/eye_gaze_biometric",
            linkLabel: "View on GitHub ↗",
        },
    ],
};
