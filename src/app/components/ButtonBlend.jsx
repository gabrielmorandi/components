"use client"
import { useRef, useEffect } from "react"

export default function ButtonBlend({ text }) {
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
      // Adding a mousemove event listener to the button
      currentButtonRef.addEventListener("mousemove", mouseMoveEvent)
    }

    return () => {
      if (currentButtonRef) {
        // Removing the event listener when the component unmounts
        currentButtonRef.removeEventListener("mousemove", mouseMoveEvent)
      }
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`relative px-6 py-2 border-2 rounded-full box-border after:box-border overflow-hidden bg-zinc-900 border-zinc-900 [&>span]:hover:text-zinc-900 after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-full after:bg-white after:scale-0 hover:after:scale-[6] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)] `}
      style={{
        transition: "transform 0.35s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      <span className="relative z-10 font-medium text-white transition-colors">
        {text}
      </span>
    </button>
  )
}
