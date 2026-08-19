"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Certifications
          </span>
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Industry <span className="gradient-text">credentials</span>
        </motion.h2>

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative glass rounded-2xl p-6 border ${cert.borderColor} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              id={`cert-card-${i}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${cert.color} border ${cert.borderColor} text-white/80`}>
                      {cert.year}
                    </span>
                    {cert.badge && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Cert name */}
                <h3
                  className="text-white font-bold text-base mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cert.name}
                </h3>
                <p className="text-indigo-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 mt-4 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
