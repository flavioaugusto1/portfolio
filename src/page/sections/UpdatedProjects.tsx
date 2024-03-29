import { useEffect, useState } from "react";
import {
  RepositoriesProps,
  getRepositories,
} from "../../services/getRepositories";
import { Projects } from "../../components/Projects";

export function UpdatedProjects() {
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);

  useEffect(() => {
    getRepositories().then((data) => setRepositories(data));
  }, []);

  return (
    <section className="space-y-6">
      <h2
        className="text-zinc-800 text-xl font-semibold"
        title="Aqui você encontrará de forma automatizada os últimos projetos que fiz alterações."
      >
        Últimos projetos atualizados
      </h2>
      <p className="text-zinc-500 leading-loose">
        Aqui você encontrará meu últimos projetos atualizados no{" "}
        <a
          href="https://github.com/flavioaugusto1?tab=repositories"
          target="_blank"
          className="underline decoration-zinc-600 transition-colors decoration-2 underline-offset-2 hover:decoration-zinc-400"
        >
          Github
        </a>
      </p>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {repositories.map((project) => (
          <Projects
            key={project.node_id}
            title={project.name}
            description={project.description}
            github={project.html_url}
            stargazers_count={project.stargazers_count}
            pushed_at={project.pushed_at}
          />
        ))}
      </div>
    </section>
  );
}
