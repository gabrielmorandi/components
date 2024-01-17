import Link from "next/link"
export default function Hero() {
  return (
    <section className="flex flex-col w-11/12 place-items-center max-w-[1160px]">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-3xl font-black tracking-tighter">Wellcome</h2>
          <div className="flex flex-col w-full gap-1">
            <p className="text-lg">
              Enclosed, you will discover a range of components developed using
              Jsx and TailwindCSS. You are welcome to simply duplicate the
              component file and utilize it according to your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-3xl font-black tracking-tighter">Contribute</h2>
          <div className="flex flex-col w-full gap-1">
            <p className="text-lg">
              Should you require any new components or have specific requests,
              feel free to open an issue at{" "}
              <Link
                href={"https://github.com/gabrielmorandi/components/issues"}
                className="relative p-1 rounded-sm bg-transparent hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-900 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors dark:after:bg-white dark:hover:text-zinc-950 dark:focus:text-zinc-950 focus:text-white outline-offset-2"
              >
                here.
              </Link>{" "}
              Your contributions and suggestions are highly valued.
            </p>
            <p className="text-lg">
              For further details and to explore the repository, visit{" "}
              <Link
                href={"https://github.com/gabrielmorandi/components"}
                className="relative inline-block w-max p-1 rounded-sm bg-transparent hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-900 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors dark:after:bg-white dark:hover:text-zinc-950 dark:focus:text-zinc-950 focus:text-white outline-offset-2"
              >
                Github repository.
              </Link>
            </p>
            <p className="text-lg">
              Created by{" "}
              <Link
                href={"https://github.com/gabrielmorandi/components"}
                className="inline-block relative p-1 rounded-sm bg-transparent hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-900 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors dark:after:bg-white dark:hover:text-zinc-950 dark:focus:text-zinc-950 focus:text-white outline-offset-2"
              >
                Gabriel Morandi.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
