export default function Button({ text }) {
  return (
    <button className="flex px-4 py-2 text-md font-medium text-white dark:text-zinc-950 transition-colors rounded-md leading-[24px] bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200">
      {text}
    </button>
  )
}
