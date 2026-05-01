/**
 * Main landing page for aimecesairem.github.io
 * © 2026 Aime Cesaire Mugishawayo — Apache-2.0
 */

import { motion } from "framer-motion"
import cesaireImage from "../cesaire.jpg"
import useTheme from "./hooks/useTheme"

const backstory = [
  {
    period: "Childhood",
    title: "The 30-Minute Walk",
    description:
      "Every day after school, I walked 30 minutes to the nearest cybercafe, clutching 100 Rwandan francs — just enough for 10 minutes at a computer. Those minutes felt like hours. That walk planted something.",
  },
  {
    period: "Early Teens",
    title: "The Fixer",
    description:
      "I became the neighborhood's go-to person for computer problems. Fixing hardware and troubleshooting software taught me that computers weren't magic boxes — they were puzzles waiting to be understood.",
  },
  {
    period: "High School",
    title: "The Hardest First Step",
    description:
      "I discovered programming through C++. Learning memory management, pointers, and low-level concepts early built a foundation that made everything else feel grounded. Like learning to drive on a manual transmission.",
  },
  {
    period: "High School",
    title: "Building and Leading",
    description:
      "I co-founded the IT club. We built websites and shipped a canteen management app that served our school. Those projects proved that code could solve real problems for real people.",
  },
  {
    period: "College",
    title: "Amherst",
    description:
      "At Amherst College, I pursued Computer Science and Mathematics, interning with Amherst IT to work on systems that served the entire campus. The journey from that cybercafe was just beginning.",
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const App = () => {
  const { theme, toggle } = useTheme()

  return (
    <div className="landing-shell">
      <button
        className="theme-toggle landing-theme-toggle"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span className="theme-toggle__icon" aria-hidden="true" />
      </button>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="landing-main"
      >
        {/* Hero */}
        <header className="landing-hero">
          <motion.div variants={item} className="landing-hero__photo-wrap">
            <img
              src={cesaireImage}
              alt="Aime Cesaire Mugishawayo"
              className="landing-hero__photo"
            />
          </motion.div>
          <motion.div variants={item} className="landing-hero__text">
            <p className="landing-kicker">Based in Philadelphia, PA</p>
            <h1 className="landing-name">
              Aime<br />
              Cesaire
            </h1>
            <p className="landing-tagline">
              Systems Builder. Security Explorer. AI Tinkerer.
            </p>
            <p className="landing-bio">
              Building intelligent systems, secure infrastructure, and resilient code.
            </p>
          </motion.div>
        </header>

        {/* CTAs */}
        <motion.div variants={item} className="landing-actions">
          <a href="/portfolio" className="landing-cta landing-cta--primary">
            Portfolio
          </a>
          <a
            href="/portfolio/other/Aime_Cesaire_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-cta landing-cta--secondary"
          >
            Resume
          </a>
          <a
            href="https://timeundertensors.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-cta landing-cta--ghost"
          >
            Writing on Substack &#8594;
          </a>
        </motion.div>

        {/* Social */}
        <motion.div variants={item} className="landing-social">
          <a
            href="https://github.com/AimeCesaireM"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-social__link"
          >
            GitHub
          </a>
          <span className="landing-social__sep" aria-hidden="true">&middot;</span>
          <a
            href="https://www.linkedin.com/in/aime-cesaire-mugishawayo/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-social__link"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Origin story */}
        <motion.section variants={item} className="backstory" aria-label="Origin story">
          <p className="backstory__eyebrow">Origin</p>
          <div className="backstory__timeline">
            {backstory.map((entry) => (
              <article key={entry.title} className="backstory__entry">
                <div className="backstory__period">{entry.period}</div>
                <div className="backstory__content">
                  <h3 className="backstory__title">{entry.title}</h3>
                  <p className="backstory__desc">{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </motion.div>

      <footer className="landing-footer">
        <p>&#169; 2026 Aime Cesaire Mugishawayo</p>
        <div className="landing-footer__links">
          <a href="/portfolio">Portfolio</a>
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
