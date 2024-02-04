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
  CardBlog: {
    code: `import Image from "next/image"
import Link from "next/link"

export default function BlogCard({
  imgUrl,
  category,
  date,
  title,
  description,
  userName,
  userImgUrl,
}) {
  // example: <BlogCard imgUrl={"/blogimage.jpg"} category={"Component"} date={"Published 16 Jan 2024"} title={"HTML&CSS foundations"} description={ "These languages are the backbone of every website, defining structure, content, and presentation." } userName={"Gabriel Morandi"} userImgUrl={"/userpic.png"}/>
  return (
    <Link
      href={"/"}
      className="flex flex-col p-6 bg-white border border-zinc-900 shadow-[8px_8px_0_#18181b] rounded-[20px] gap-6 max-w-[384px] [&>div>.title]:hover:text-zinc-400 [&>div>.title]:focus:text-zinc-400 dark:shadow-[8px_8px_0_#18181b] dark:border-zinc-900 dark:bg-zinc-950"
    >
      <Image
        src={imgUrl}
        width={279}
        height={200}
        alt="BlogImage"
        className="w-full rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <h3 className="flex px-3 py-1 font-bold rounded-[4px] bg-zinc-200 w-max dark:bg-zinc-900">
          {category}
        </h3>
        <h4 className="text-sm font-medium">{date}</h4>
        <h2 className="text-xl font-extrabold transition-colors title">
          {title}
        </h2>
        <p className="text-sm font-medium break-words text-zinc-400 dark:text-zinc-500">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image src={userImgUrl} width={32} height={32} alt="UserPic" />
        <h2 className="text-sm font-extrabold">{userName}</h2>
      </div>
    </Link>
  )
}`,
  },
  LinkHero: {
    code: `import Link from "next/link"
export default function LinkHero({ text, href }) {
  // example: <LinkHero text="Link" href={"/"} />
  return (
    <Link
      href={href}
      className="relative p-1 rounded-sm bg-transparent hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-900 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors dark:after:bg-white dark:hover:text-zinc-950 dark:focus:text-zinc-950 focus:text-white outline-offset-2"
    >
      {text}
    </Link>
  )
}
`,
  },
  BasicTextInput: {
    code: `export default function BasicTextInput() {
  return (
    <div className="flex max-w-60">
      <input
        type="text"
        name="input"
        id="input"
        className="flex w-full px-4 py-2 border rounded-sm border-zinc-400 placeholder:text-zinc-400 dark:border-zinc-600 dark:placeholder-zinc-600 dark:bg-zinc-800"
        placeholder="Your text here."
      />
    </div>
  )
}`,
  },
  NewsletterInput: {
    code: `export default function NewsletterInput() {
  return (
    <label
      htmlFor="newsletter"
      className="flex items-center justify-between p-2 border rounded-full border-zinc-400 dark:border-zinc-600"
    >
      <input
        type="text"
        name="newsletter"
        id="newsletter"
        placeholder="exemple@email.com"
        className="flex w-full py-2 pl-1 pr-4 bg-transparent placeholder:text-zinc-400 dark:placeholder-zinc-600"
      />
      <button className="flex px-4 py-2 font-medium text-white transition-colors rounded-full bg-zinc-900 outline-offset-2 dark:bg-white dark:text-zinc-950 hover:bg-zinc-700 focus:bg-zinc-700 dark:hover:bg-zinc-200 dark:focus:bg-zinc-200">
        Subscribe
      </button>
    </label>
  )
}`,
  },
  Accordion: {
    code: `"use client"
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Accordion({ items }) {
  // Example
  // <Accordion
  //   items={[
  //     { title: "Item 1", description: "Descrição do item 1" },
  //     { title: "Item 2", description: "Descrição do item 2" },
  //   ]}
  // />

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-zinc-950 dark:divide-white max-w-96">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="flex items-center justify-between w-full py-4"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            <h2 className="text-lg font-semibold text-zinc-950">
              {item.title}
            </h2>
            <ChevronDown
              className={\`transform transition-transform duration-300 \${
                index === openIndex ? "rotate-180" : null
              }\`}
            />
          </button>
          <div
            className={\`overflow-hidden transition-all duration-300 \${
              index === openIndex ? "max-h-96" : "max-h-0"
            }\`}
          >
            <p
              className={\`py-2 text-zinc-950 duration-300 ease-in transition-opacity \${
                index === openIndex ? "opacity-100" : "opacity-0"
              }\`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
`,
  },
}
