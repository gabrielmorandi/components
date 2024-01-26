export default function ButtonOutline({ text }) {
  return (
    <button className="flex px-4 py-2.5 text-sm font-medium leading-none transition-colors bg-transparent border rounded-md shadow-sm text-zinc-900 hover:bg-zinc-100 focus:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:border-zinc-800">
      {text}
    </button>
  )
}
