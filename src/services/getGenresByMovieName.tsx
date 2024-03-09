import { toast } from "sonner";
import { movies } from "./movies";

interface MovieGenresProps {
  data: {
    genres: GenreProps[];
  };
}

export interface GenreProps {
  id: number;
  name: string;
}

export async function getGenresByMovieName(movieId: number) {
  try {
    const { data }: MovieGenresProps = await movies.get(
      `/movie/${movieId}?language=pt-Br`,
    );

    return data.genres;
  } catch (error) {
    toast.error("Não foi possível carregar os filmes");
    return [];
  }
}