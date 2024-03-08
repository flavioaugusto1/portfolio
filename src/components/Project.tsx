import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  deploy?: string;
}

export function Project({ title, description, github, deploy }: ProjectProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-zinc-700 text-lg font-semibold">{title}</span>
        <div className="flex gap-2">
          <a
            className="p-1 bg-zinc-300 rounded-md hover:bg-zinc-400 transition-all"
            href={github}
            target="_blank"
            aria-label="Direciona para o github"
          >
            <Github className="h-5 w-5" />
          </a>

          {deploy && (
            <a
              className="p-1 bg-zinc-300 rounded-md hover:bg-zinc-400 transition-all"
              href={deploy}
              target="_blank"
              aria-label="Direciona para o projeto em produção"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <span className="text-zinc-600">{description}</span>
    </div>
  );
}
