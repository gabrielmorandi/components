"use client"
import { useRef, useEffect } from "react"

export default function ButtonBlendOld({ text }) {
  const buttonRef = useRef(null)
  // This function updates the --x and --y custom properties based on mouse position
  function mouseMoveEvent(e) {
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect()
      // Adjusting the position to center the pseudo-element
      const x = e.clientX - left - 20 // 20px is half the width of the pseudo-element -> (after)
      const y = e.clientY - top - 20 // 20px is half the height of the pseudo-element -> (after)
      buttonRef.current.style.setProperty("--x", `${x}px`)
      buttonRef.current.style.setProperty("--y", `${y}px`)
    }
  }

  useEffect(() => {
    const currentButtonRef = buttonRef.current
    if (currentButtonRef) {
      currentButtonRef.addEventListener("mousemove", mouseMoveEvent)
    }
    return () => {
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("mousemove", mouseMoveEvent)
      }
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className="relative px-6 py-2 bg-transparent rounded-full active:after:scale-[7.5] focus:after:scale-[7.5] [&>p]:focus:text-white dark:[&>p]:focus:text-zinc-950 overflow-hidden [&>p]:hover:text-white dark:[&>p]:hover:text-zinc-950 after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-full after:bg-zinc-900 after:scale-0 hover:after:scale-[6] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)] dark:after:bg-white"
    >
      <span className="absolute inset-0 w-full h-full bg-transparent border-2 rounded-full border-zinc-900 dark:border-white" />
      <p className="relative z-10 font-medium transition-colors text-zinc-900 dark:text-white">
        {text}
      </p>
    </button>
  )
}
