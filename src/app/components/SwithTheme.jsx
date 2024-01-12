"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function SwithTheme() {
  const { theme, setTheme } = useTheme()
  const [isThemeLoaded, setIsThemeLoaded] = useState(false)

  useEffect(() => {
    if (theme) {
      setIsThemeLoaded(true)
    }
  }, [theme])

  if (!isThemeLoaded) {
    return null
  }

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <label className="relative flex h-5 w-9">
        <input
          type="checkbox"
          name="theme"
          id="theme"
          checked={theme === "dark"}
          onChange={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="w-0 h-0 opacity-0 "
        />
        <span
          className={`absolute inset-0 border-2 border-transparent w-9 h-5 duration-300 cursor-pointer rounded-3xl dark:bg-zinc-800 bg-zinc-200 transition-transform before:content-[''] before:absolute before:h-4 before:w-4 before:shadow-lg before:left-0 before:bottom-0 before:transition-transform dark:before:bg-zinc-950 before:bg-white before:rounded-full before:duration-200 ${
            theme == "dark" ? "before:translate-x-4" : null
          }`}
        />
      </label>
    </div>
  )
}
