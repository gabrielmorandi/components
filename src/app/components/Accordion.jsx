"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const Accordion = ({ items }) => {
  // Example
  // <Accordion
  //   items={[
  //     { title: "Item 1", description: "Descrição do item 1" },
  //     { title: "Item 2", description: "Descrição do item 2" },
  //   ]}
  // />

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-zinc-950 max-w-96">
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
              color="#09090b"
              className={`transform transition-transform duration-300 ${
                index === openIndex ? "rotate-180" : null
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              index === openIndex ? "max-h-96" : "max-h-0"
            } `}
          >
            <p
              className={`py-2 text-zinc-950 duration-300 ease-in transition-opacity ${
                index === openIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
