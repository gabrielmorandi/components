import Header from "./components/Header"
import ComponentSection from "./components/ComponentSection"
import Button from "./components/Button"
import ButtonOutline from "./components/ButtonOutline"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-12 pb-10 mt-14 place-items-center">
        <ComponentSection componentName={"Button"}>
          <Button text={"Button"} />
        </ComponentSection>
        <ComponentSection componentName={"ButtonOutline"}>
          <ButtonOutline text={"Outline"} />
        </ComponentSection>
      </main>
    </>
  )
}
