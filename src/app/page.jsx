import Header from "./components/Header"
import Button from "./components/Button"
import ComponentSection from "./components/ComponentSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-12 pb-10 mt-14 place-items-center">
        <ComponentSection componentName={"Button"}>
          <Button text={"Button"} />
        </ComponentSection>
      </main>
    </>
  )
}
