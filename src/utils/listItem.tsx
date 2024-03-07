import {
  Linkedin,
  Github,
  Instagram,
  Laptop,
  Shell,
  Clapperboard,
  Gamepad2,
} from "lucide-react";

interface ItemProps {
  section: string;
  medias: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
}

export const itemSearch: ItemProps[] = [
  {
    section: "experiences",
    medias: [
      {
        name: "Trabalho",
        link: "/jobs",
        icon: <Laptop className="w-4 h-4" />,
      },
      {
        name: "Estudo",
        link: "/studies",
        icon: <Shell className="w-4 h-4" />,
      },
    ],
  },
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
      {
        name: "Steam",
        link: "https://steamcommunity.com/id/fvnzera/",
        icon: <Gamepad2 className="w-4 h-4" />,
      },
    ],
  },
  {
    section: "others",
    medias: [
      {
        name: "Setup",
        link: "/setup",
        icon: <Laptop className="w-4 h-4" />,
      },
      {
        name: "Animes",
        link: "/animes",
        icon: <Shell className="w-4 h-4" />,
      },
      {
        name: "Filmes",
        link: "#",
        icon: <Clapperboard className="w-4 h-4" />,
      },
    ],
  },
];
