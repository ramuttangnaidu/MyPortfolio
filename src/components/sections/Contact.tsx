"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const contactLinks = [
  {
    id: "contact-email-btn",
    label: "Send an Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail className="w-5 h-5" />,
    color: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-500/10 border-indigo-500/30 hover:border-indigo-500/60",
  },
  {
    id: "contact-github-btn",
    label: "GitHub Profile",
    value: "github.com/ramuttang05",
    href: personalInfo.github,
    icon: <FaGithub className="w-5 h-5" />,
    color: "from-gray-500 to-gray-700",
    bg: "bg-white/5 border-white/10 hover:border-white/25",
  },
  {
    id: "contact-linkedin-btn",
    label: "LinkedIn",
    value: "linkedin.com/in/ram-uttang",
    href: personalInfo.linkedin,
    icon: <FaLinkedin className="w-5 h-5" />,
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/60",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-indigo-500 to-violet-500" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Let&apos;s <span className="gradient-text">connect</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg mb-4 leading-relaxed"
        >
          I&apos;m open to full-time roles, collaborations, and interesting AI projects.
          Whether you have an opportunity or just want to chat about AI — I&apos;m always happy to talk.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-12"
        >
          <MapPin className="w-4 h-4" />
          Hyderabad, Telangana, India
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              id={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`group flex flex-col items-center gap-3 p-6 glass rounded-2xl border ${link.bg} transition-all duration-300 hover:shadow-xl`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {link.icon}
              </div>
              <div className="text-center">
                <div className="text-white text-sm font-semibold">{link.label}</div>
                <div className="text-gray-500 text-xs mt-0.5 truncate max-w-[140px]">
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            id="contact-main-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl btn-primary font-semibold text-base shadow-xl shadow-indigo-500/20"
          >
            <Send className="w-4 h-4" />
            Say Hello 👋
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-gray-600 text-sm"
        >
          Available for full-time roles from{" "}
          <span className="text-indigo-400 font-medium">mid-2026</span>
        </motion.p>
      </div>
    </section>
  );
}
