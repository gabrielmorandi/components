export default function Button({ text }) {
  return (
    <button className="flex px-4 py-2 font-medium leading-5 text-white transition-colors rounded-md text-md outline-offset-2 outline-zinc-900 dark:outline-white dark:text-zinc-950 bg-zinc-900 dark:bg-white hover:bg-zinc-700 focus:bg-zinc-700 dark:hover:bg-zinc-200 dark:focus:bg-zinc-200">
      {text}
    </button>
  )
}
