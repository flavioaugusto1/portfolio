import FoodExplorer from "../../assets/food-explorer.png";
import RocketNotes from "../../assets/rocket-notes.png"

export function MainProjects() {
  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-10">
        <span className="text-zinc-800 text-xl font-semibold">
          Principais Projetos
        </span>

        <div className="bg-sky-500 p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row-reverse">
            <div className="rounded-md overflow-hidden">
              <img src={FoodExplorer} className="w-full h-full" alt="" />
            </div>
            <div>
              <h1 className="mb-3 text-lg font-semibold text-white">
                Food Explorer
              </h1>
              <span className="text-blue-100 flex-1">
                O{" "}
                <a
                  href="https://food-expl0rer.netlify.app/"
                  target="_blank"
                  className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30 dark:decoration-sky-900/20 dark:hover:decoration-sky-900/40 dark:focus:ring-sky-900/20"
                >
                  food-explorer.com
                </a>{" "}
                foi desenvolvida para atender a pessoas que precisam salvar suas
                anotações de forma fácil e intuitiva.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-orange-500 p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row-reverse">
            <div className="rounded-md overflow-hidden">
              <img src={RocketNotes} className="w-full h-full" alt="" />
            </div>
            <div>
              <h1 className="mb-3 text-lg font-semibold text-white">
                Rocket Notes
              </h1>
              <span className="text-blue-100 flex-1">
                O{" "}
                <a
                  href="https://roocketnotes.netlify.app/"
                  target="_blank"
                  className="focusable rounded-sm font-medium underline decoration-orange-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-orange-100/50 focus:ring-orange-100/30"
                >
                  rocket-notes.com
                </a>{" "}
                foi desenvolvida para atender a pessoas que precisam salvar suas
                anotações de forma fácil e intuitiva.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-sky-500 p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row-reverse">
            <div className="rounded-md overflow-hidden">
              <img src={FoodExplorer} className="w-full h-full" alt="" />
            </div>
            <div>
              <h1 className="mb-3 text-lg font-semibold text-white">
                Food Explorer
              </h1>
              <span className="text-blue-100 flex-1">
                O{" "}
                <a
                  href="https://food-expl0rer.netlify.app/"
                  target="_blank"
                  className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30 dark:decoration-sky-900/20 dark:hover:decoration-sky-900/40 dark:focus:ring-sky-900/20"
                >
                  food-explorer.com
                </a>{" "}
                foi desenvolvida para atender a pessoas que precisam salvar suas
                anotações de forma fácil e intuitiva.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
