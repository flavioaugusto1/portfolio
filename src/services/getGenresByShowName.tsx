import { toast } from "sonner";
import { movies } from "./movies";

interface MovieGenresProps {
  data: {
    genres: GenreProps[];
    production_countries: OriginCountryMovieProps[];
  };
}

interface OriginCountryMovieProps {
  iso_3166_1: string;
}

export interface GenreProps {
  id: number;
  name: string;
  origin: string;
}

export async function getGenresByShowName(movieId: number) {
  try {
    const { data }: MovieGenresProps = await movies.get(
      `/movie/${movieId}?language=pt-Br`,
    );

    const originMovie = data.production_countries.map((movie) => {
      return movie.iso_3166_1;
    });

    const genresWithOrigin = data.genres.map((genre) => {
      return { ...genre, origin: originMovie[0] };
    });

    return genresWithOrigin;
  } catch (error) {
    toast.error("Não foi possível carregar os filmes");
    return [];
  }
}
