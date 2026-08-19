"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, Briefcase } from "lucide-react";
import { personalInfo, internship } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const badges = [
  {
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    label: "CGPA",
    value: personalInfo.cgpa,
    sub: personalInfo.college,
    color: "border-indigo-500/30 bg-indigo-500/10",
    glow: "hover:shadow-indigo-500/20",
  },
  {
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    label: personalInfo.gateExam,
    value: personalInfo.gateRank,
    sub: "Data Science & AI",
    color: "border-yellow-500/30 bg-yellow-500/10",
    glow: "hover:shadow-yellow-500/20",
  },
  {
    icon: <Building2 className="w-5 h-5 text-violet-400" />,
    label: "College",
    value: "ACE Engineering",
    sub: "Hyderabad, Telangana",
    color: "border-violet-500/30 bg-violet-500/10",
    glow: "hover:shadow-violet-500/20",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
    label: "Current Role",
    value: "Backend AI Intern",
    sub: "FlyRank AI",
    color: "border-emerald-500/30 bg-emerald-500/10",
    glow: "hover:shadow-emerald-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      {/* Section background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Passionate about building{" "}
          <span className="gradient-text">intelligent systems</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* FlyRank internship card */}
            <div className="glass rounded-2xl p-5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-lg">
                  🚀
                </div>
                <div>
                  <h3 className="text-white font-semibold">{internship.role}</h3>
                  <p className="text-indigo-400 text-sm">
                    {internship.company} · {internship.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {internship.highlights.slice(0, 3).map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Badges grid */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className={`glass-hover glass rounded-2xl p-5 border ${badge.color} hover:shadow-lg ${badge.glow} cursor-default`}
              >
                <div className="mb-3">{badge.icon}</div>
                <div
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {badge.value}
                </div>
                <div className="text-xs text-gray-400">{badge.label}</div>
                <div className="text-xs text-gray-600 mt-1 truncate">{badge.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
