"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: "var(--font-outfit)" }}>
              Ram.dev
            </span>
          </div>

          {/* Credit */}
          <motion.p
            className="text-gray-600 text-sm flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            {" "}by{" "}
            <span className="text-indigo-400 font-medium">{personalInfo.shortName}</span>
            {" "}· Next.js 15 + Tailwind CSS
          </motion.p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white text-sm transition-colors"
              id="footer-github-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white text-sm transition-colors"
              id="footer-linkedin-link"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-white text-sm transition-colors"
              id="footer-email-link"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-700 text-xs">
          © {new Date().getFullYear()} Nakka Ram Uttang Naidu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
