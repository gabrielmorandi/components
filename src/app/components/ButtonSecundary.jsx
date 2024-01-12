export default function ButtonSecondary({ text }) {
  return (
    <button className="flex px-4 py-2 font-medium transition-colors rounded-md text-md bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-900">
      {text}
    </button>
  )
}
