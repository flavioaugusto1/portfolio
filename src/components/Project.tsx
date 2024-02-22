import { Browser, GithubLogo } from "@phosphor-icons/react";

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  deploy: string;
}

export function Project({ title, description, github, deploy }: ProjectProps) {
  return (
    <div className="flex flex-col space-y-1">
        <div className="flex justify-between">
          <span className="text-zinc-700 font-semibold">{title}</span>
          <div className="space-x-2">
            <button className="p-1 bg-zinc-300 rounded-md hover:bg-zinc-400">
              <a href={github} target="_blank">
                <GithubLogo className="h-4 w-4" />
              </a>
            </button>
            <button className="p-1 bg-zinc-300 rounded-md hover:bg-zinc-400">
              <a href={deploy} target="_blank">
                <Browser />
              </a>
            </button>
          </div>
        </div>
        <span className="text-zinc-600">{description}</span>
    </div>
  );
}
