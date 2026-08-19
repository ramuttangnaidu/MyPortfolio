"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Featured Projects
          </span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Things I&apos;ve <span className="gradient-text">built</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-400 mb-12 max-w-xl"
        >
          Production-grade AI applications and intelligent systems — from autonomous research agents to medical diagnosis platforms.
        </motion.p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative glass rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10`}
              id={`project-card-${i}`}
            >
              {/* Gradient header */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')}`}
                style={{
                  background: `linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                }}
              />
              
              {/* Top gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative p-6">
                {/* Icon + title row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-indigo-300 transition-colors"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${i}-demo-btn`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-xs font-semibold ${project.demo === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                    aria-disabled={project.demo === '#'}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-${i}-github-btn`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg btn-outline text-xs font-semibold ${project.github === '#' ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                    aria-disabled={project.github === '#'}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
