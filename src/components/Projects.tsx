interface ProjectsProps {
  title: string;
  description: string;
  github: string;
}

import { Github } from "lucide-react"

export function Projects({ title, description, github }: ProjectsProps) {
  return(
    <div className="rounded-lg border border-zinc-300 p-6">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={github}>
        <Github className="transition-colors text-zinc-600 hover:text-zinc-400" />
      </a>
    </div>
  )
}