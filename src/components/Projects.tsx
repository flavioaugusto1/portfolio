import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Github, Star } from "lucide-react";

interface ProjectsProps {
  title: string;
  description: string;
  github: string;
  stargazers_count: number;
  pushed_at: string;
}

export function Projects({
  title,
  description,
  github,
  stargazers_count,
  pushed_at,
}: ProjectsProps) {
  return (
    <div className="rounded-lg border border-zinc-300 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 mb-8 text-sm">
          <span className="text-zinc-500 font-medium">
            {formatDistanceToNow(pushed_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <Star size={20} className="text-zinc-500" />
          <span className="font-semibold text-zinc-500 cursor-default">
            {stargazers_count}
          </span>
        </div>
        <a href={github} target="_blank">
          <Github
            size={30}
            className="transition-colors text-zinc-600 rounded-lg p-1 bg-zinc-300 hover:text-zinc-400"
          />
        </a>
      </div>
      <h2 className="font-semibold text-lg mb-2">{title}</h2>

      <p className="text-zinc-500">{description}</p>
    </div>
  );
}
