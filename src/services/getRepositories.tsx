import { toast } from "sonner";
import { repositories } from "./repositores";

export interface RepositoriesProps {
  node_id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

export async function getRepositories(): Promise<RepositoriesProps[]> {
  try {
    const { data } = await repositories.get(
      "/flavioaugusto1/repos?sort=pushed&per_page=6",
      {},
    );

    const formatListRepositories = data.map((repo: RepositoriesProps) => {
      return {
        node_id: repo.node_id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
      };
    });

    return formatListRepositories;
  } catch (error) {
    toast.error("Não foi possível carregar os projetos");
    return [];
  }
}
