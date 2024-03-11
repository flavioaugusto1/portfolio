import { useEffect, useState } from "react";
import { ShowItem } from "../components/ShowItem";
import { getShows, ShowsProps } from "../services/getShows";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Animes() {
  const [shows, setShows] = useState<ShowsProps[]>([]);
  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate("/");
  }

  useEffect(() => {
    getShows("tv").then((response) => setShows(response));
  }, []);


  return (
    <div className="max-w-screen-xl m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-zinc-800 text-2xl">
          Útilmos Animes/Series assistidos
        </span>

        <Button onClick={handleBackNavigate} name="Voltar" />
      </div>

      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {shows &&
          shows.map((movie) => (
            <ShowItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
              rate={movie.rating}
              vote_average={movie.vote_average}
              first_air_date={movie.first_air_date}
              show="tv"
            />
          ))}
      </div>
    </div>
  );
}
