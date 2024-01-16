export const data = {
  Button: {
    code: `export default function Button({ text }) {
  return (
    <button className="flex px-4 py-2 font-medium leading-5 text-white transition-colors rounded-md text-md outline-offset-2 outline-zinc-900 dark:outline-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200">
      {text}
    </button>
  )
}`,
  },
  ButtonOutline: {
    code: `export default function ButtonOutline({ text }) {
  return (
    <button className="flex px-4 py-2.5 text-sm font-medium leading-none transition-colors bg-transparent border rounded-md shadow-sm text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800 dark:border-zinc-800">
      {text}
    </button>
  )
}`,
  },
  ButtonGhost: {
    code: `export default function ButtonGhost({ text }) {
  return (
    <button className="flex px-4 py-2.5 font-medium leading-none transition-colors bg-transparent rounded-md text-md text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800">
      {text}
    </button>
  )
}`,
  },
  ButtonBlend: {
    code: `"use client"
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
      buttonRef.current.style.setProperty("--x", \`\${x}px\`)
      buttonRef.current.style.setProperty("--y", \`\${y}px\`)
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
`,
  },
  NavTabs: {
    code: `"use client"
import { useState, useRef, useEffect } from "react"

export default function NavTabs({ tabs }) {
  // example: <NavTabs tabs={["Code", "Design", "Website"]} />
  const [activeTab, setActiveTab] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const tabsRef = useRef([])

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab]
    if (currentTab) {
      const rect = currentTab.getBoundingClientRect()
      setIndicatorStyle({
        left: rect.left - currentTab.offsetParent.getBoundingClientRect().left,
        width: rect.width,
        height: rect.height,
      })
    }
  }, [activeTab, tabsRef])

  return (
    <div className="relative flex gap-2 p-1 rounded-sm bg-zinc-100 dark:bg-zinc-800">
      <span
        className="absolute z-10 transition-all bg-white rounded-sm shadow-sm bottom-1 dark:bg-zinc-950"
        style={indicatorStyle}
      />
      {tabs.map((tabName, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          className="z-50 flex px-3 py-2 text-sm leading-none transition-colors bg-transparent rounded-sm hover:text-zinc-400 disabled:hover:text-zinc-900 dark:disabled:hover:text-white"
          onClick={() => setActiveTab(index)}
          disabled={index === activeTab ? true : false}
        >
          {tabName}
        </button>
      ))}
    </div>
  )
}`,
  },
}
