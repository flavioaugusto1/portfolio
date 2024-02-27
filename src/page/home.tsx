import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Project } from "../components/Project";
import { Stack } from "../components/Stack";
import { api } from "../services/api";
import { Menu } from "../components/Menu";

export function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  function handleFirstName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  async function handleSubmitEmailContact(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast.error(
        "Você esqueceu um ou mais campos em branco, por gentileza preencha para enviar sua mensagem.",
      );
      return;
    }

    try {
      const sendEmail = await api.post("/xkndbwdz", {
        name,
        email,
        message,
      });

      toast.success("E-mail enviado com sucesso!");
      setName("");
      setEmail("");
      setMessage("");

      return sendEmail
    } catch (error) {
      toast.error("Não foi possível enviar seu e-mail.");
    }
  }

  return (
    <div className="max-w-screen-md m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <Menu />

      <div className="flex gap-1 items-center">
        <img
          src="https://github.com/flavioaugusto1.png"
          className="h-14 w-14 rounded-full"
          alt="Foto mostrando mais o perfil do rosto de um homem que está utilzando camisa preta, uma barba media e fazendo uma cara um pouco mais seria "
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
          Olá, meu nome é Flávio Augusto, tenho 26 anos e atualmente resido em
          Santa Catarina. Sou um profissional dedicado e apaixonado por
          tecnologia, desempenhando atualmente a função de Técnico de Suporte
          Pleno. Tenho como objetivo direcionar minha carreira para a área de
          Desenvolvimento Front-End, atraído pela sua dinâmica, inovação e
          desafios constantes.
        </span>
      </div>

      <div className="flex flex-col gap-8">
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

        <a
          className="text-center p-2 m-auto w-32 bg-zinc-900 rounded-md text-gray-300 font-semibold hover:bg-zinc-700 transition-all"
          href="https://github.com/flavioaugusto1?tab=repositories"
          target="_blank"
        >
          Mais projetos
        </a>
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
          enviar um e-mail, seja ele como um feedback para meus projetos ou caso
          tenha tido interesse no meu trabalho. Ficarei super feliz em receber
          sua mensagem.
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
          onSubmit={handleSubmitEmailContact}
          className="flex flex-1 gap-4 flex-col"
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
              onChange={handleFirstName}
              value={name}
            />
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              className="py-2 px-2 bg-gray-300 rounded-md"
              onChange={handleEmail}
              type="email"
              placeholder="E-mail"
              value={email}
            />
          </div>
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <textarea
            className="py-2 px-2 bg-gray-300 rounded-md resize-none h-36"
            placeholder="Escreva uma mensagem"
            onChange={handleMessage}
            value={message}
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
