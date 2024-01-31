import Header from "./components/Header"
import Hero from "./components/Hero"
import ComponentSection from "./components/ComponentSection"
import Button from "./components/Button"
import ButtonOutline from "./components/ButtonOutline"
import ButtonGhost from "./components/ButtonGhost"
import ButtonBlend from "./components/ButtonBlend"
import NavTabs from "./components/NavTabs"
import BlogCard from "./components/CardBlog"
import LinkHero from "./components/LinkHero"
import LinkArrowUpRight from "./components/LinkArrowUpRight"
import BasicTextInput from "./components/BasicTextInput"
import NewsletterInput from "./components/NewsletterInput"
import Accordion from "./components/Accordion"

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid w-full gap-12 pb-10 mt-4 place-items-center sm:mt-6">
        <Hero />
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
        <ComponentSection componentName={"NavTabs"}>
          <NavTabs tabs={["Code", "Design", "Website"]} />
        </ComponentSection>
        <ComponentSection componentName={"CardBlog"}>
          <BlogCard
            imgUrl={"/blogimage.jpg"}
            category={"Component"}
            date={"Published 16 Jan 2024"}
            title={"HTML&CSS foundations"}
            description={
              "These languages are the backbone of every website, defining structure, content, and presentation."
            }
            userName={"Gabriel Morandi"}
            userImgUrl={"/userpic.png"}
          />
        </ComponentSection>
        <ComponentSection componentName="LinkHero">
          <LinkHero text="Link" href={"/"} />
        </ComponentSection>
        <ComponentSection componentName="LinkArrowUpRight">
          <LinkArrowUpRight text="Your Link" href={"/"} />
        </ComponentSection>
        <ComponentSection componentName="BasicTextInput">
          <BasicTextInput />
        </ComponentSection>
        <ComponentSection componentName="NewsletterInput">
          <NewsletterInput />
        </ComponentSection>
        <ComponentSection componentName="Accordion">
          <Accordion
            items={[
              {
                title: "Item 1",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                title: "Item 2",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                title: "Item 3",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
            ]}
          />
        </ComponentSection>
      </main>
    </>
  )
}
