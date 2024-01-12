import SwithTheme from "./SwithTheme"

export default function header() {
  return (
    <header className="fixed top-0 grid w-full pt-5 place-items-center">
      <div className="flex flex-row-reverse w-11/12 place-items-center max-w-[1160px]">
        <SwithTheme />
      </div>
    </header>
  )
}
