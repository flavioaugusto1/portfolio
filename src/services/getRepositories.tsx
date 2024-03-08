import { toast } from "sonner";
import { formatFirstLetterToUpperCase } from "../utils/formatNameRepositorie";
import { repositories } from "./repositores";

export interface RepositoriesProps {
  node_id: string;
  name: string;
  description: string;
  html_url: string;
}

export async function getRepositories(): Promise<RepositoriesProps[]> {
  try {
    const { data } = await repositories.get(
      "/flavioaugusto1/repos?sort=pushed&per_page=5",
      {},
    );

    const formatListRepositories = data.map((repo: RepositoriesProps) => {
      const formatedNameRepositorie = formatFirstLetterToUpperCase(repo.name);

      return {
        node_id: repo.node_id,
        name: formatedNameRepositorie,
        description: repo.description,
        html_url: repo.html_url,
      };
    });

    return formatListRepositories;
  } catch (error) {
    toast.error("Não foi possível carregar os projetos");
    return [];
  }
}
