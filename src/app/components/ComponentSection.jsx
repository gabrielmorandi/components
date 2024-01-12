"use client"

import { useState, useEffect } from "react"
import { data } from "../data/data"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import { Copy, Check } from "lucide-react"
import { Icon } from "./Icon"

export default function ComponentSection({ children, componentName }) {
  const [activeTab, setActiveTab] = useState("preview")
  const [icon, setIcon] = useState("Copy")
  const componentCode = componentName && data[componentName]?.code

  useEffect(() => {
    if (activeTab === "code") {
      Prism.highlightAll()
    }
  }, [activeTab])

  const copyToClipboard = async () => {
    if (componentCode) {
      try {
        await navigator.clipboard.writeText(componentCode)
        setIcon("Check")
        setTimeout(() => setIcon("Copy"), 3000)
      } catch (err) {
        console.error("Falha ao copiar: ", err)
      }
    }
  }

  return (
    <section className="flex flex-col w-11/12 place-items-center max-w-[1160px]">
      <div className="flex flex-col w-full gap-4">
        <h2 className="text-3xl font-black tracking-tighter">
          {componentName}
        </h2>
        <div className="flex items-center border-b border-b-zinc-200 dark:border-b-zinc-800">
          <button
            onClick={() => setActiveTab("preview")}
            className={
              activeTab === "preview"
                ? "inline-flex items-center justify-start px-4 font-semibold bg-transparent border-b-2 rounded-none -mb-[1px] border-zinc-950 h-9 text-zinc-950 dark:text-white dark:border-b-white"
                : "inline-flex items-center justify-start px-4 font-semibold bg-transparent border-b-2 border-transparent -mb-[1px] rounded-none text-zinc-500 dark:text-zinc-400"
            }
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={
              activeTab === "code"
                ? "inline-flex items-center justify-start px-4 font-semibold bg-transparent border-b-2 rounded-none -mb-[1px] border-zinc-950 h-9 text-zinc-950 dark:text-white dark:border-b-white"
                : "inline-flex items-center justify-start px-4 font-semibold bg-transparent border-b-2 border-transparent -mb-[1px] rounded-none text-zinc-500 dark:text-zinc-400"
            }
          >
            Code
          </button>
        </div>
        {activeTab === "preview" ? (
          <div className="flex items-center justify-center border rounded-lg min-h-80 max-h-80 dark:border-zinc-800">
            {children}
          </div>
        ) : (
          <div className="relative flex">
            <pre className="relative w-full overflow-auto border rounded-lg language-javascript max-h-80 min-h-80 border-zinc-200 dark:border-zinc-800 bg-zinc-950 dark:bg-zinc-900">
              <code className="absolute w-full">{componentCode}</code>
            </pre>
            <div
              className="absolute p-2 transition-colors rounded-lg cursor-pointer top-4 right-4 hover:bg-zinc-700"
              onClick={copyToClipboard}
            >
              {icon === "Check" ? (
                <Icon name={"Check"} size={16} color={"#fafafa"} />
              ) : (
                <Icon name={"Copy"} size={16} color={"#fafafa"} />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
