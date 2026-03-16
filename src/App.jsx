/**
 * Main landing page for username.github.io
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import cesaireImage from "../cesaire.jpg"

const backstoryTimeline = [
  {
    period: "Childhood",
    title: "The 30-Minute Walk",
    description:
      "Every day after school, I'd walk 30 minutes to the nearest cybercafe, clutching 100 Rwandan francs-just enough for 10 precious minutes at a computer. Those minutes felt like hours as I explored a world beyond my own, sparking a curiosity that would shape my future.",
    icon: "🚶",
  },
  {
    period: "Early Teens",
    title: "The Fixer",
    description:
      "As my fascination grew, I became the neighborhood's go-to person for computer problems. Fixing hardware, troubleshooting software, and helping others navigate technology taught me that computers weren't just tools-they were puzzles waiting to be solved.",
    icon: "🔧",
  },
  {
    period: "High School",
    title: "The Hardest First Step",
    description:
      "I discovered programming through C++-arguably the toughest language to start with, but I wouldn't have it any other way. Learning memory management, pointers, and low-level concepts early built a foundation that made everything else feel easier. It was like learning to drive in a manual transmission car.",
    icon: "💻",
  },
  {
    period: "High School",
    title: "Building & Leading",
    description:
      "In high school, I dove deep into mathematics and computer science. I co-founded the IT club, where we built websites and developed a canteen management app that actually served our school. Those projects taught me that code could solve real problems and impact real people.",
    icon: "🏗️",
  },
  {
    period: "College",
    title: "Amherst & Beyond",
    description:
      "At Amherst College, I pursued Computer Science and Mathematics, interning with Amherst IT where I worked on systems that served the entire campus. I graduated with distinction, but more importantly, I learned that the journey from that cybercafe walk to building enterprise systems was just the beginning.",
    icon: "🎓",
  },
]

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="landing-shell min-h-screen flex items-center justify-center px-4">
      {/* Animated background gradient that follows mouse */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.img
          variants={itemVariants}
          src={cesaireImage}
          alt="Aime Cesaire Mugishawayo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto mb-6 ring-4 ring-white/70 shadow-xl"
        />
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Aime Cesaire
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl mb-4"
          style={{ color: "var(--color-text-light)" }}
        >
          Systems Builder • Security Explorer • AI Tinkerer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-light)" }}
        >
          Building intelligent systems, secure infrastructure, and resilient code
        </motion.p>

        <motion.section variants={itemVariants} className="backstory-timeline" aria-label="Backstory timeline">
          {backstoryTimeline.map((item) => (
            <article key={`${item.period}-${item.title}`} className="backstory-item">
              <div className="backstory-item__header">
                <span className="backstory-item__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="backstory-item__period">{item.period}</p>
              </div>
              <h3 className="backstory-item__title">{item.title}</h3>
              <p className="backstory-item__description">{item.description}</p>
            </article>
          ))}
        </motion.section>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            href="/portfolio"
            className="px-8 py-4 rounded-xl font-semibold text-lg relative overflow-hidden group"
            style={{
              background: "var(--color-accent)",
              color: "white",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">View Portfolio</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, var(--color-accent-light), var(--color-accent))",
              }}
            />
          </motion.a>

          <motion.a
            href="/portfolio/other/Aime_Cesaire_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-lg"
            style={{
              border: "2px solid var(--color-accent)",
              color: "var(--color-accent)",
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--color-accent)",
              color: "white",
              boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Resume
          </motion.a>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href="https://timeundertensors.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-6 text-sm md:text-base"
          style={{ color: "var(--color-text-light)" }}
          whileHover={{ color: "var(--color-accent)" }}
        >
          Writing on Substack
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-12"
        >
          <motion.a
            href="https://github.com/AimeCesaireM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            style={{ color: "var(--color-text-light)" }}
            whileHover={{ scale: 1.2, color: "var(--color-accent)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/aime-cesaire-mugishawayo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            style={{ color: "var(--color-text-light)" }}
            whileHover={{ scale: 1.2, color: "var(--color-accent)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
      <footer className="landing-footer">
        <p>© 2026 Aime Cesaire Mugishawayo</p>
        <div className="landing-footer__links">
          <a href="https://timeundertensors.substack.com" target="_blank" rel="noopener noreferrer">
            Substack
          </a>
          <a href="/portfolio/other/Aime_Cesaire_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
