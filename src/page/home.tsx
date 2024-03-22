import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Stack } from "../components/Stack";
import { api } from "../services/api";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { Introduction } from "./sections/Introduction";
import { MainProjects } from "./sections/MainProjects";
import { UpdatedProjects } from "./sections/UpdatedProjects";

export function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      const sendEmail = await api.post("xkndbwdz", {
        name,
        email,
        message,
      });

      toast.success("E-mail enviado com sucesso!");
      setName("");
      setEmail("");
      setMessage("");

      return sendEmail;
    } catch (error) {
      toast.error("Não foi possível enviar seu e-mail.");
    }
  }

  return (
    <div className="flex flex-col gap-16 max-w-screen-md m-auto pt-8 pb-24 px-4 animate-appears font-inter">
      <Menu />
      <Introduction />
      <MainProjects />
      <UpdatedProjects />

      <div className="space-y-6">
        <span className="text-zinc-800 text-xl font-semibold">Tecnologias</span>
        <Stack />
      </div>

      <div className="flex flex-col space-y-6">
        <span className="text-zinc-700 text-xl font-semibold">
          Entre em contato
        </span>
        <span className="text-zinc-500 text-justify">
          Caso tenha gostado do que viu nos meus trabalhos, fique a vontade para
          enviar um e-mail, seja ele como um feedback para meus projetos ou caso
          tenha tido interesse no meu trabalho. Ficarei super feliz em receber
          sua mensagem.
        </span>

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
          <Button type="submit" name="Enviar" />
        </form>
      </div>
    </div>
  );
}
