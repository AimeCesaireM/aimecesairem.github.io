import { useEffect, useRef, useState } from "react"

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark"
  const saved = localStorage.getItem("theme")
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme)
  const mounted = useRef(false)

  useEffect(() => {
    const root = document.documentElement
    if (mounted.current) {
      root.classList.add("theme-transitioning")
      const timer = setTimeout(() => root.classList.remove("theme-transitioning"), 320)
      return () => clearTimeout(timer)
    }
    root.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    mounted.current = true
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return { theme, toggle }
}

export default useTheme
