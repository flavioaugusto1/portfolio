import { Project } from "../components/Project";
import { Stack } from "../components/Stack";

export function Home() {
  return (
    <div className="max-w-screen-md m-auto pt-24 space-y-16 px-4">
      <div className="flex gap-1 items-center">
        <img
          src="https://github.com/flavioaugusto1.png"
          className="h-14 w-14 rounded-full  "
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-zinc-800">
            Flávio Augusto
          </span>
          <span className="text-base font-normal">Front-End Developer</span>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <span className="font-semibold text-zinc-800">Sobre mim</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea
          enim commodi repellat suscipit dicta consequuntur, autem perspiciatis
          veniam assumenda voluptatem. Aut dolores quaerat molestiae dolorem
          accusantium. Quis, cupiditate dolorum?
        </span>
      </div>
      
      <div className="space-y-6">
        <span className="text-zinc-800 font-semibold">Projetos</span>
        <Project
          title="Food Explorer"
          description="Plataforma para realizar pedidos Plataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidosPlataforma para realizar pedidos"
          github="https://github.com/flavioaugusto1/frontend-food-explorer"
          deploy="https://food-expl0rer.netlify.app/"
        />

        <Project
          title="Food Explorer"
          description="Plataforma para realizar pedidos"
          github="https://github.com/flavioaugusto1/frontend-food-explorer"
          deploy="https://food-expl0rer.netlify.app/"
        />

        <Project
          title="Food Explorer"
          description="Plataforma para realizar pedidos"
          github="https://github.com/flavioaugusto1/frontend-food-explorer"
          deploy="https://food-expl0rer.netlify.app/"
        />
      </div>
      
      <div className="space-y-6">
        <span className="text-zinc-800 font-semibold">Tecnologias</span>
        <Stack />
      </div>
    </div>
  );
}
