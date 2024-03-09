import { toast } from "sonner";
import { movies } from "./movies";

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  rating: number;
  vote_average: number;
  release_date: string;
}

export interface ListProps {
  results: MovieProps[];
}

export async function getMovies() {
  try {
    const { data } = await movies.get<ListProps>(
      "/account/659f2419c34f0ff95c9fa9f4f7b54a4a/rated/movies?language=pt-BR&sort_by=created_at.desc",
    );

    const catchDetailsMovie = data.results.map((movie: MovieProps) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        rating: movie.rating,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
      };
    });

    return catchDetailsMovie;
  } catch (error) {
    toast.error("Não foi possível carregar os filmes");
    return [];
  }
}
