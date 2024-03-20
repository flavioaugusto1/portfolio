import Logo from "../../assets/logoFortics.jpeg";

export function MainProjects() {
  return (
    <div className="flex flex-col gap-20">
      <div className="space-y-10">
        <span className="text-zinc-800 text-xl font-semibold">
          Principais Projetos
        </span>
        <div className="bg-blue-950 p-6 rounded-md">
          <div className="flex flex-col-reverse items-center justify-between gap-8 p-12 rounded-md lg:flex-row-reverse">
            <img src={Logo} className="w-50 h-60 md:w-60" alt="" />
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
            <img src={Logo} className="w-50 h-60 md:w-60" alt="" />
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
            <img src={Logo} className="w-50 h-60 md:w-60" alt="" />
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
