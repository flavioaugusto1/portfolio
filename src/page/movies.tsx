import { useEffect, useState } from "react";
import { MovieItem } from "../components/MovieItem";
import { getMovies, MovieProps } from "../services/getMovies";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate(-1);
  }

  useEffect(() => {
    getMovies().then((response) => setMovies(response));
  }, []);

  return (
    <div className="max-w-screen-xl m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-zinc-800 text-3xl">
          Filmes que ando assistindo
        </span>

        <Button onClick={handleBackNavigate} name="Voltar" />
      </div>

      <div className="grid grid-cols-4 gap-20">
        {movies &&
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
              rate={movie.rating}
            />
          ))}
      </div>
    </div>
  );
}
