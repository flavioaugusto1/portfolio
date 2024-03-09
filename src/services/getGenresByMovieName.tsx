import { toast } from "sonner";
import { movies } from "./movies";

interface MovieGenresProps {
  data: {
    genres: GenreProps[];
    production_countries: [
      {
        iso_3166_1: string;
      },
    ];
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

    const originMovie = data.production_countries.map((movie) => {
      return movie.iso_3166_1;
    });

    const listDetailsMovie = [...data.genres, { origin: originMovie[0] }];

    return listDetailsMovie;
  } catch (error) {
    toast.error("Não foi possível carregar os filmes");
    return [];
  }
}
