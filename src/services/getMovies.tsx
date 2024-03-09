import { toast } from "sonner";
import { movies } from "./movies";

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  rating: number;
}

export interface ListProps {
  results: MovieProps[];
}

export async function getMovies() {
  try {
    const { data } = await movies.get<ListProps>(
      "/account/659f2419c34f0ff95c9fa9f4f7b54a4a/rated/movies?language=pt-BR",
    );

    const catchDetailsMovie = data.results.map((movie: MovieProps) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        rating: movie.rating,
      };
    });

    return catchDetailsMovie;
  } catch (error) {
    toast.error("Não foi possível carregar os filmes");
    return [];
  }
}
