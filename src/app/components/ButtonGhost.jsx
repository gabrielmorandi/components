export default function ButtonGhost({ text }) {
  return (
    <button className="flex px-4 py-2.5 font-medium leading-none transition-colors bg-transparent rounded-md text-md text-zinc-900 dark:text-white hover:bg-zinc-100 focus:bg-zinc-100 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800">
      {text}
    </button>
  )
}
