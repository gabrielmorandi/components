export default function NewsletterInput() {
  return (
    <label
      htmlFor="newsletter"
      className="flex items-center justify-between p-2 border rounded-full border-zinc-400 dark:border-zinc-600 dark:bg-zinc-800"
    >
      <input
        type="text"
        name="newsletter"
        id="newsletter"
        placeholder="exemple@email.com"
        className="flex px-4 py-2 bg-transparent placeholder:text-zinc-400 dark:placeholder-zinc-600"
      />
      <button className="flex px-4 py-2 font-medium text-white rounded-full bg-zinc-900 outline-offset-2 dark:bg-zinc-950">
        Subscribe
      </button>
    </label>
  )
}
