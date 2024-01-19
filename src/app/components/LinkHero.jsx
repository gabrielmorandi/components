import Link from "next/link"
export default function LinkHero({ text, href }) {
  return (
    <Link
      href={href}
      className="relative p-1 rounded-sm bg-transparent hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-900 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors dark:after:bg-white dark:hover:text-zinc-950 dark:focus:text-zinc-950 focus:text-white outline-offset-2"
    >
      {text}
    </Link>
  )
}
