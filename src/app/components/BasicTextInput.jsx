export default function BasicTextInput() {
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
}
