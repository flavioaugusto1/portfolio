import { Project } from "../components/Project";
import { Stack } from "../components/Stack";

export function Home() {
  const projects = [
    {
      id: 1,
      title: "Food Explorer",
      description:
        "Esta plataforma foi desenvolvida para atender aos requisitos específicos de um sistema de cadastro de pratos, proporcionando uma experiência completa tanto para administradores quanto para usuários comuns.",
      github: "https://github.com/flavioaugusto1/frontend-food-explorer",
      deploy: "https://food-expl0rer.netlify.app/",
    },
    {
      id: 2,
      title: "Rocket Notes",
      description:
        "Esta plataforma foi desenvolvida para atender a pessoas que precisam salvar suas anotações de forma fácil e intuitiva.",
      github: "https://github.com/flavioaugusto1/frontend-rocketnotes ",
      deploy: "https://roocketnotes.netlify.app",
    },
    {
      id: 3,
      title: "Rocket Movies",
      description:
        "O projeto consiste em que desenvolver uma API para consumo no FrontEnd onde o usuário consiga criar uma conta, realizar login, cadastrar notas sobre os filmes, editar nota, excluir nota e também editar o seu perfil.",
      github: "https://github.com/flavioaugusto1/frontend-rocketmovies",
      deploy: "https://roocket-movies.netlify.app",
    },
    {
      id: 4,
      title: "Note Speech",
      description:
        "Projeto de anotações que tem como diferencial fazer anotações através da voz consumindo a API do navegador.",
      github: "https://github.com/flavioaugusto1/notes",
      deploy: "https://notes-speech.netlify.app",
    },
  ];

  return (
    <div className="max-w-screen-md m-auto pt-24 pb-24 space-y-16 px-4">
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

      <div className="flex flex-col space-y-2">
        <span className="font-semibold text-zinc-800 text-xl">Sobre mim</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea
          enim commodi repellat suscipit dicta consequuntur, autem perspiciatis
          veniam assumenda voluptatem. Aut dolores quaerat molestiae dolorem
          accusantium. Quis, cupiditate dolorum?
        </span>
      </div>

      <div className="space-y-8">
        <span className="text-zinc-800 text-xl font-semibold">Projetos</span>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </div>

      <div className="space-y-6">
        <span className="text-zinc-800 text-xl font-semibold">Tecnologias</span>
        <Stack />
      </div>

      <div className="flex flex-col space-y-6">
        <span className="text-zinc-700 text-xl font-semibold">
          Entre em contato
        </span>
        <span className="text-zinc-600">
          Caso tenha gostado do que viu nos meus trabalhos, fique a vontade para
          enviar um e-mail, ficarei super feliz em responder a sua mensagem
        </span>

        <ul className="flex items-center gap-4 text-gray-500 list-none underline font-medium">
          <li>
            <a
              className="hover:text-gray-700 transition-all"
              target="_blank"
              href="https://github.com/flavioaugusto1"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-700 transition-all"
              target="_blank"
              href="https://www.linkedin.com/in/flavio-augusto1/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-700 transition-all"
              target="_blank"
              href="https://www.instagram.com/flavio.sdn/"
            >
              Instagram
            </a>
          </li>
        </ul>

        <form
          className="flex flex-1 gap-4 flex-col"
          action="mailto:f.augustosdn@gmail.com"
          method="post"
        >
          <div className="grid grid-cols-2 gap-2">
            <label htmlFor="firstName" className="sr-only">
              Nome
            </label>
            <input
              id="firstName"
              className="py-2 px-2 bg-gray-300 rounded-md"
              type="text"
              placeholder="Nome"
            />
            <label htmlFor="surName" className="sr-only">
              Nome
            </label>
            <input
              id="surName"
              className="py-2 px-2 bg-gray-300 rounded-md"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <textarea
            className="py-2 px-2 bg-gray-300 rounded-md resize-none h-36"
            placeholder="Escreva uma mensagem"
          />
          <button
            className="py-2 px-2 bg-zinc-900 rounded-md text-gray-300 font-semibold hover:bg-zinc-700 transition-all"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
