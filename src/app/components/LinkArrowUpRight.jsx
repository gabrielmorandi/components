import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
export default function LinkArrowUpRight({ text, href }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-6 py-2 pr-2 font-semibold leading-7 border rounded-full pl-7 border-zinc-900 bg-gradient-to-r from-[#94DE86] from-10% to-[#C3FEFA] to-90% [&>*]:hover:p-1.5 dark:border-zinc-800"
    >
      {text}
      <ArrowUpRight
        width={43}
        height={43}
        color="#18181b"
        className="rounded-full flex p-[10px] border border-zinc-900 bg-white transition-all dark:border-zinc-800"
      />
    </Link>
  )
}
