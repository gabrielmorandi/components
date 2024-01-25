import LinkHero from "./LinkHero"
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
              <LinkHero
                text={"here."}
                href={"https://github.com/gabrielmorandi/components/issues"}
              />{" "}
              Your contributions and suggestions are highly valued.
            </p>
            <p className="text-lg">
              For further details and to explore the repository, visit{" "}
              <LinkHero
                text={"Github repository."}
                href={"https://github.com/gabrielmorandi/components"}
              />
            </p>
            <p className="text-lg">
              Created by{" "}
              <LinkHero
                text={"Gabriel Morandi."}
                href={"https://github.com/gabrielmorandi/components"}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
