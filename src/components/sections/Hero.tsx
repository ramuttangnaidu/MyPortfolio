"use client";

import { motion } from "framer-motion";
import { ChevronDown, Briefcase, Zap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Dark base + grid ── */}
      <div className="absolute inset-0 bg-[#030712]">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Ambient glow blobs ── */}
      <div
        className="blob absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.9) 0%, transparent 70%)" }}
      />
      <div
        className="blob blob-delay-2 absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.9) 0%, transparent 70%)" }}
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── LEFT: Text content ── */}
        <div className="flex flex-col items-start order-2 lg:order-1">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Available for full-time roles from 2026
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span className="text-white">{personalInfo.shortName}</span>
            <br />
            <span className="shimmer-text">Naidu</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-5"
          >
            <Briefcase className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <p className="text-base sm:text-lg text-indigo-300 font-medium">
              {personalInfo.role}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-8 mb-8"
          >
            {[
              { label: "CGPA", value: "9.08", icon: "🎓" },
              { label: "GATE DA", value: "AIR 2604", icon: "🏆" },
              { label: "Projects", value: "4+", icon: "🚀" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-xl sm:text-2xl font-bold gradient-text"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.icon} {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              id="hero-view-work-btn"
              onClick={() => handleScroll("projects")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary font-semibold text-sm shadow-lg shadow-indigo-500/20"
            >
              <Zap className="w-4 h-4" />
              View My Work
            </button>

            <a
              id="hero-github-btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline font-semibold text-sm"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>

            <a
              id="hero-linkedin-btn"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline font-semibold text-sm"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Prominent photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-60 blur-xl"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a855f7, #6366f1)",
                animation: "spin-slow 8s linear infinite",
              }}
            />

            {/* Spinning gradient border */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #a855f7, #ec4899, #6366f1)",
                animation: "spin-slow 6s linear infinite",
              }}
            />

            {/* Photo container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#030712]">
              <Image
                src="/ram.jpeg"
                alt="Nakka Ram Uttang Naidu"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-top"
              />
              {/* Subtle inner gradient — bottom fade only */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(3,7,18,0.35) 100%)",
                }}
              />
            </div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-3 -left-6 glass border border-indigo-500/40 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <div className="text-xs text-gray-400">GATE DA</div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                🏆 AIR 2604
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute -top-3 -right-6 glass border border-violet-500/40 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <div className="text-xs text-gray-400">CGPA</div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                🎓 9.08
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScroll("about")}
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-indigo-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
