export const data = {
  Button: {
    code: `export default function Button({ text }) {
  return (
    <button className="flex px-4 py-2 text-md font-medium text-white dark:text-zinc-950 transition-colors rounded-md leading-[24px] bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200">
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
}
