import { useEffect, useState } from "react";
import { ShowItem } from "../components/ShowItem";
import { getShows, ShowsProps } from "../services/getShows";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Movies() {
  const [movies, setMovies] = useState<ShowsProps[]>([]);
  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate("/");
  }

  useEffect(() => {
    getShows("movies").then((response) => setMovies(response));
  }, []);

  return (
    <div className="max-w-screen-xl m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-zinc-800 text-2xl">
          Útilmos filmes assistidos
        </span>

        <Button onClick={handleBackNavigate} name="Voltar" />
      </div>

      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies &&
          movies.map((movie) => (
            <ShowItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
              rate={movie.rating}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              show="movie"
            />
          ))}
      </div>
    </div>
  );
}
