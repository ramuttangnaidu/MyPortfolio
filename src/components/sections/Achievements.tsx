"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Achievements
          </span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Milestones & <span className="gradient-text">Recognition</span>
        </motion.h2>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass rounded-2xl p-6 border ${achievement.borderColor} hover:shadow-xl transition-all duration-300 group`}
              id={`achievement-card-${i}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.color} border ${achievement.borderColor} text-white/80`}
                  >
                    {achievement.badge}
                  </span>
                </div>

                {/* Text */}
                <h3
                  className="text-white font-bold text-xl mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {achievement.title}
                </h3>
                <p className="text-indigo-400 text-sm font-medium mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
