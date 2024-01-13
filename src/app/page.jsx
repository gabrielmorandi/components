import Header from "./components/Header"
import ComponentSection from "./components/ComponentSection"
import Button from "./components/Button"
import ButtonOutline from "./components/ButtonOutline"
import ButtonGhost from "./components/ButtonGhost"
import ButtonBlend from "./components/ButtonBlend"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-12 pb-10 mt-4 place-items-center sm:mt-6">
        <ComponentSection componentName={"Button"}>
          <Button text={"Button"} />
        </ComponentSection>
        <ComponentSection componentName={"ButtonOutline"}>
          <ButtonOutline text={"Outline"} />
        </ComponentSection>
        <ComponentSection componentName={"ButtonGhost"}>
          <ButtonGhost text={"Ghost"} />
        </ComponentSection>
        <ComponentSection componentName={"ButtonBlend"}>
          <ButtonBlend text={"ButtonBlend"} />
        </ComponentSection>
      </main>
    </>
  )
}
