"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
  { key: "languages", label: "Languages", emoji: "💻" },
  { key: "aiml", label: "AI / ML", emoji: "🤖" },
  { key: "backend", label: "Backend", emoji: "⚡" },
  { key: "frontend", label: "Frontend", emoji: "🎨" },
  { key: "databases", label: "Databases", emoji: "🗃️" },
  { key: "tools", label: "Tools", emoji: "🛠️" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

const allSkillsList = [
  { category: "Languages", items: skills.languages },
  { category: "AI / ML", items: skills.aiml },
  { category: "Backend", items: skills.backend },
  { category: "Frontend", items: skills.frontend },
  { category: "Databases", items: skills.databases },
  { category: "Tools", items: skills.tools },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");

  const filteredSkills =
    activeCategory === "all"
      ? allSkillsList
      : allSkillsList.filter((s) =>
          categories.find(
            (c) => c.key === activeCategory && c.label === s.category
          )
        );

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Technical Skills
          </span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          My <span className="gradient-text">tech stack</span>
        </motion.h2>

        {/* Category filter pills */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            id="skill-filter-all"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                : "glass border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/30"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`skill-filter-${cat.key}`}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">
                  {categories.find((c) => c.label === group.category)?.emoji}
                </span>
                <h3
                  className="text-white font-semibold"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {group.category}
                </h3>
                <span className="ml-auto text-xs text-gray-600">
                  {group.items.length} skills
                </span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="skill-chip px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-default"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
