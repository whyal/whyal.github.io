export const PROFILE = {
    name: "Yong Lun",
    title: "Software Engineer",
    location: "Singapore",
    education: "Computer Engineering, Singapore Institute of Technology",
    about: "I build full-stack applications and AI-powered systems, with a focus on retrieval-augmented generation, LLM orchestration and applied machine learning.",
    githubUrl: "https://github.com/whyal",
    linkedinUrl: "https://www.linkedin.com/in/yong-lun-tan/",

    skills: [
        { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript"] },
        { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
        { category: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "Docker"] },
        { category: "AI & ML", items: ["RAG", "LLM Orchestration", "Vector Embeddings", "Scikit-learn"] },
        { category: "Tooling", items: ["Git", "GitHub Actions", "Linux", "CI/CD"] },
    ],

    projects: [
        {
            id: "travel-planner",
            name: "Smart Travel Itinerary Planner",
            status: "Completed",
            description:
                "An AI assistant that crafts customised travel itineraries using Retrieval-Augmented Generation (RAG) and intelligent activity recommendations.",
            tags: ["RAG", "Next.js", "Vector DB", "LLM"],
            link: "https://github.com/whyal/smart-travel-itinerary-planner",
        },
        {
            id: "eye-gaze-auth",
            name: "Smartphone Eye-Gaze Biometrics",
            status: "In Progress",
            description:
                "An exploratory pilot study with 12 participants investigating whether consumer smartphones can capture eye-gaze behavioural biomarkers for user authentication.",
            tags: ["Machine Learning", "Mobile", "Biometrics", "Python"],
            link: "https://github.com/whyal/eye_gaze_biometric",
        },
    ],
};
