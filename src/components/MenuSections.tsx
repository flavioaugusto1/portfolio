import { useState } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Laptop,
  Shell,
  Clapperboard,
} from "lucide-react";
import { toast } from "sonner";

export function MenuSections() {
  const [links, setLinks] = useState([
    {
      section: "social",
      medias: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/flavio-augusto1/",
          icon: <Linkedin className="w-4 h-4" />,
        },
        {
          name: "Github",
          link: "https://github.com/flavioaugusto1",
          icon: <Github className="w-4 h-4" />,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/flavio.sdn/",
          icon: <Instagram className="w-4 h-4" />,
        },
      ],
    },
    {
      section: "others",
      medias: [
        {
          name: "Setup",
          link: "#",
          icon: <Laptop className="w-4 h-4" />,
        },
        {
          name: "Animes",
          link: "#",
          icon: <Shell className="w-4 h-4" />,
        },
        {
          name: "Filmes",
          link: "#",
          icon: <Clapperboard className="w-4 h-4" />,
        },
      ],
    },
  ]);

  function unavailableOption() {
    toast.warning("Essa opção ainda não está disponível!");
    return;
  }

  return (
    <div className="space-y-3 p-3">
      <div>
        <span className="text-sm font-semibold text-zinc-500">
          Mídias Sociais
        </span>
        {links.map(
          (link) =>
            link.section === "social" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400"
                  >
                    <div>{media.icon}</div>
                    <a className="w-full" href={media.link} target="_blank">
                      {media.name}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>

      <div>
        <span className="text-sm font-semibold text-zinc-500">Outros</span>
        {links.map(
          (link) =>
            link.section === "others" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400"
                  >
                    <div>{media.icon}</div>
                    <a
                      onClick={unavailableOption}
                      className="w-full"
                      href={media.link}
                    >
                      {media.name}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
