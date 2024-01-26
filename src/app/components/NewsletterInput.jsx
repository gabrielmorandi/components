export default function NewsletterInput() {
  return (
    <label
      htmlFor="newsletter"
      className="flex items-center justify-between p-2 border rounded-full border-zinc-400 dark:border-zinc-600"
    >
      <input
        type="text"
        name="newsletter"
        id="newsletter"
        placeholder="exemple@email.com"
        className="flex w-full py-2 pl-1 pr-4 bg-transparent placeholder:text-zinc-400 dark:placeholder-zinc-600"
      />
      <button className="flex px-4 py-2 font-medium text-white transition-colors rounded-full bg-zinc-900 outline-offset-2 dark:bg-white dark:text-zinc-950 hover:bg-zinc-700 focus:bg-zinc-700 dark:hover:bg-zinc-200 dark:focus:bg-zinc-200">
        Subscribe
      </button>
    </label>
  )
}
