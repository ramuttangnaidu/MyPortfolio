// Central data store for the portfolio
// Update links here once you have the real URLs

export const personalInfo = {
  name: "Nakka Ram Uttang Naidu",
  shortName: "Ram Uttang",
  role: "Backend AI Engineer Intern @ FlyRank AI",
  tagline: "Building intelligent systems that think, reason, and scale.",
  bio: "I'm a final-year B.Tech AI & ML student at ACE Engineering College, Hyderabad, with a passion for building production-grade AI systems. From designing RAG pipelines and autonomous AI agents to crafting robust FastAPI backends, I bridge the gap between cutting-edge research and real-world software engineering. GATE DA AIR 2604 qualifier with 9.08 CGPA.",
  email: "ramuttang05@gmail.com",
  github: "https://github.com/ramuttangnaidu", // UPDATE with real URL
  linkedin: "https://www.linkedin.com/in/ram-uttang-naidu-nakka-676369291/", // UPDATE with real URL
  college: "ACE Engineering College, Hyderabad",
  degree: "B.Tech in AI & ML",
  cgpa: "9.08",
  gateRank: "AIR 2604",
  gateExam: "GATE DA 2024",
};

export const skills = {
  languages: [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "🟨" },
    { name: "SQL", icon: "🗃️" },
    { name: "C/C++", icon: "⚙️" },
    { name: "TypeScript", icon: "🔷" },
  ],
  frontend: [
    { name: "ReactJS", icon: "⚛️" },
    { name: "HTML5", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Next.js", icon: "▲" },
  ],
  backend: [
    { name: "FastAPI", icon: "⚡" },
    { name: "Node.js", icon: "🟩" },
    { name: "Express.js", icon: "🚂" },
  ],
  aiml: [
    { name: "Gemini API", icon: "🔮" },
    { name: "RAG", icon: "📚" },
    { name: "AI Agents", icon: "🤖" },
    { name: "NLP", icon: "💬" },
    { name: "Prompt Engineering", icon: "✨" },
    { name: "LangChain", icon: "🔗" },
  ],
  databases: [
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
  ],
  tools: [
    { name: "Git", icon: "📌" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📮" },
    { name: "Vercel", icon: "▲" },
  ],
};

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github: string;
  demo: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Autonomous AI Research & Insight Agent",
    description:
      "An end-to-end autonomous research agent that reads, synthesizes, and generates structured insights from multiple sources using RAG and AI orchestration.",
    longDescription:
      "Built an autonomous multi-step AI research agent capable of querying live web sources, extracting key information using RAG pipelines, and synthesizing coherent research reports. Powered by Gemini API with LangChain orchestration.",
    techStack: ["Python", "FastAPI", "Gemini API", "RAG", "LangChain", "MongoDB"],
    github: "https://github.com/ramuttangnaidu/Research-Agent", // UPDATE
    demo: "https://insight-forge-ai-45.lovable.app/", // UPDATE
    gradient: "from-indigo-500/20 to-violet-500/20",
    icon: "🤖",
  },
  {
    title: "MedAI – AI Disease Diagnosis System",
    description:
      "A medical AI platform that takes patient symptoms and history to provide differential diagnoses and treatment recommendations using LLMs.",
    longDescription:
      "Developed a full-stack medical AI assistant that processes symptom inputs and patient history to generate differential diagnoses with confidence scores. Includes a conversational interface with safety guardrails.",
    techStack: ["Python", "FastAPI", "Gemini API", "ReactJS", "MongoDB", "Tailwind"],
    github: "https://github.com/ramuttangnaidu/MedAI", // UPDATE
    demo: "https://doc-ai-web.lovable.app/", // UPDATE
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "🏥",
  },
  {
    title: "AI SOP Generator",
    description:
      "SummerSaaS Hackathon project — an AI-powered tool that generates standard operating procedures from natural language descriptions.",
    longDescription:
      "Built during the SummerSaaS Hackathon. An AI tool that converts rough workflow descriptions into structured, formatted SOPs with sections, steps, and compliance notes. Uses prompt engineering with Gemini API.",
    techStack: ["Python", "FastAPI", "Gemini API", "Node.js", "ReactJS", "Vercel"],
    github: "https://github.com/ramuttangnaidu/ProcessPilotAI", // UPDATE
    demo: "https://process-pilot-ai.vercel.app/", // UPDATE
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: "📋",
  },
  {
    title: "AI Job Assistant",
    description:
      "An intelligent job-search assistant that matches resumes to job descriptions, generates tailored cover letters, and tracks application status.",
    longDescription:
      "A full-featured AI job assistant that parses resumes and job descriptions, computes match scores, generates personalized cover letters, and provides a dashboard to track applications. Built with FastAPI backend and React frontend.",
    techStack: ["Python", "FastAPI", "Gemini API", "NLP", "ReactJS", "MongoDB"],
    github: "https://github.com/ramuttangnaidu/career-compass-ai", // UPDATE
    demo: "https://career-compazz.lovable.app/", // UPDATE
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "💼",
  },
];

export const achievements = [
  {
    title: "GATE DA AIR 2604",
    subtitle: "Data Science & AI — 2024",
    description:
      "Qualified Graduate Aptitude Test in Engineering (Data Science & AI) with All India Rank 2604, demonstrating strong fundamentals in mathematics, statistics, and AI/ML.",
    icon: "🏆",
    badge: "GATE DA 2024",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    title: "Top 20% of Class",
    subtitle: "ACE Engineering College",
    description:
      "Consistently ranked in the top 20% of the class with a CGPA of 9.08 throughout the B.Tech program.",
    icon: "🎓",
    badge: "CGPA 9.08",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
  },
  {
    title: "NPTEL Top 5%",
    subtitle: "SWAYAM NPTEL",
    description:
      "Achieved top 5% distinction in multiple NPTEL online courses on AI, Machine Learning, and Data Science.",
    icon: "🥇",
    badge: "Elite Performer",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    title: "SummerSaaS Hackathon",
    subtitle: "Hackathon Participant",
    description:
      "Participated and built the AI SOP Generator at the SummerSaaS Hackathon, delivering a working product within 48 hours.",
    icon: "⚡",
    badge: "Hackathon",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    description: "Foundational cloud concepts, AWS services, and cloud architecture best practices.",
    icon: "☁️",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    year: "2024",
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    issuer: "Cisco",
    description: "Networking fundamentals, routing & switching, and network security principles.",
    icon: "🌐",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    year: "2024",
    badge: "×2",
  },
  {
    name: "Google AI-ML Virtual Internship",
    issuer: "Google / AICTE",
    description:
      "Hands-on virtual internship focused on machine learning fundamentals and Google Cloud AI tools.",
    icon: "🔮",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    year: "2023",
  },
];

export const internship = {
  company: "FlyRank AI",
  role: "Backend AI Engineer Intern",
  period: "2025 – Present",
  description:
    "Building production-grade backend systems for an AI-powered SEO and content platform.",
  highlights: [
    "Built LeadCapture — an embeddable widget platform with CORS handling, geo enrichment, and honeypot spam filtering",
    "Implemented JWT authentication and Zod validation across all API endpoints",
    "Added rate limiting middleware to protect public APIs",
    "Wrote 7 passing Vitest integration tests covering core widget functionality",
    "Technologies: Node.js, Express.js, MongoDB, JWT, Zod, Vitest",
  ],
};
