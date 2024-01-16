"use client"

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
}
