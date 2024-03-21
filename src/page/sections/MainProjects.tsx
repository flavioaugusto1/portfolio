import FoodExplorer from "../../assets/food-explorer.png";
import RocketNotes from "../../assets/rocket-notes.png"
import RocketMovies from "../../assets/rocket-movies.png"

export function MainProjects() {
  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-10">
        <span className="text-zinc-800 text-xl font-semibold">
          Principais Projetos
        </span>

        <div className="bg-blueexplorer p-2 rounded-md">
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
                  className="focusable rounded-sm font-medium underline decoration-sky-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-sky-100/50 focus:ring-sky-100/30"
                >
                  food-explorer.com
                </a>{" "}
                foi desenvolvida para atender a pessoas que precisam salvar suas
                anotações de forma fácil e intuitiva.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-orangenotes p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row">
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

        <div className="bg-pinkmovies p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row-reverse">
            <div className="rounded-md overflow-hidden">
              <img src={RocketMovies} className="w-full h-full" alt="" />
            </div>
            <div>
              <h1 className="mb-3 text-lg font-semibold text-white">
                Rocket Movies
              </h1>
              <span className="text-blue-100 flex-1">
                O{" "}
                <a
                  href="https://roocket-movies.netlify.app/"
                  target="_blank"
                  className="focusable rounded-sm font-medium underline decoration-pink-100/30 decoration-2 underline-offset-2 transition duration-100 hover:decoration-pink-100/50 focus:ring-pink-100/30"
                >
                  rocket-movies.com
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
