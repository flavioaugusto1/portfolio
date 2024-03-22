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
      <p>
        Aqui você encontrará meu últimos projetos atualizados no{" "}
        <a href="#">Github</a>
      </p>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {repositories.map((project) => (
          <Projects
            key={project.node_id}
            title={project.name}
            description={project.description}
            github={project.html_url}
          />
        ))}
      </div>
    </section>
  );
}
