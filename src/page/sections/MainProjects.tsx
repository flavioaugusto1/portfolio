import Logo from "../../assets/logoFortics.jpeg";

export function MainProjects() {
  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-10">
        <span className="text-zinc-800 text-xl font-semibold">
          Principais Projetos
        </span>
        <div className="bg-blue-950 p-2 rounded-md">
          <div className="flex flex-col-reverse items-center gap-8 p-5 rounded-md lg:flex-row-reverse">
            <div className="w-full relative justify-center rounded-md overflow-hidden">
              <div className="w-full absolute bg-white backdrop-blur-lg backdrop-saturate-200 h-10 flex items-center gap-4">
                <div className="flex gap-1 mx-2">
                  <div className="rounded-full h-3 w-3 bg-slate-600"></div>
                  <div className="rounded-full h-3 w-3 bg-slate-600"></div>
                  <div className="rounded-full h-3 w-3 bg-slate-600"></div>
                </div>
                <span className="bg-slate-500 p-1 rounded-md">
                  food-explorer.com
                </span>
              </div>
              <img src={Logo} className="w-96 h-80" alt="" />
            </div>
            <div>
              <span className="text-zinc-600 text-justify">
                O <a href="">Food-explorer</a> foi desenvolvida para atender a
                pessoas que precisam salvar suas anotações de forma fácil e
                intuitiva.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 p-6 rounded-md">
          <div className="flex flex-col-reverse items-center justify-between gap-8 p-12 rounded-md lg:flex-row-reverse">
            <div className="w-full relative justify-center">
              <div className="max-w-60 absolute bg-slate-400 w-full h-4"></div>
              <img src={Logo} className="w-60 h-60" alt="" />
            </div>
            <div>
              <span className="text-zinc-600 text-justify">
                O <a href="">Rocket Notes</a> foi desenvolvida para atender a
                pessoas que precisam salvar suas anotações de forma fácil e
                intuitiva.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 p-6 rounded-md">
          <div className="flex flex-col-reverse items-center justify-between gap-8 p-12 rounded-md lg:flex-row-reverse">
            <div className="w-full relative justify-center">
              <div className="max-w-60 absolute bg-slate-400 w-full h-4"></div>
              <img src={Logo} className="w-60 h-60" alt="" />
            </div>
            <div>
              <span className="text-zinc-600 text-justify">
                O <a href="">Rocket Notes</a> foi desenvolvida para atender a
                pessoas que precisam salvar suas anotações de forma fácil e
                intuitiva.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
