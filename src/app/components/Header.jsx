import SwithTheme from "./SwithTheme"

export default function header() {
  return (
    <header className="sticky top-0 z-50 grid w-full py-5 bg-white drop-shadow-sm place-items-center dark:bg-zinc-950 dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.05)] ">
      <div className="flex justify-between w-11/12 place-items-center max-w-[1160px]">
        <h1 className="text-2xl font-bold leading-none">
          GM - C<span>omponents</span>
        </h1>
        <SwithTheme />
      </div>
    </header>
  )
}
