import { useEffect, useState } from "react";
import TMDB from "../assets/tmdb.svg";
import {
  getGenresByMovieName,
  GenreProps,
} from "../services/getGenresByMovieName";

interface MovieItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  rate: number;
  vote_average: number;
  release_date: string;
}

export function MovieItem({
  id,
  title,
  image,
  rate,
  vote_average,
  release_date,
}: MovieItemProps) {
  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {
    getGenresByMovieName(id).then((response) => setGenres(response));
  }, []);

  const origin = genres.map((genre) => {
    return genre.origin;
  });

  const yearRealeaseDate = release_date.split("-")[0];

  return (
    <div className="max-w-64 flex flex-col gap-3 rounded-md sm:m-auto max-[640px]:m-auto">
      <img
        className="h-96 w-full rounded-md"
        src={`https://image.tmdb.org/t/p/w500${image}`}
      />

      <div>
        <span className="text-md text-gray-500">{origin[0]}, </span>
        <span className="text-md text-gray-500">{yearRealeaseDate}</span>
      </div>

      <span className="font-bold text-lg whitespace-nowrap">{title}</span>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-20 h-4" src={TMDB} alt="" />
          <span title="Nota geral do TMDB">{vote_average.toFixed(1)}/10</span>
        </div>

        <div className="flex items-center gap-3">
          <img
            className="w-6 h-6 rounded-full object-cover"
            src="https://github.com/flavioaugusto1.png"
            alt=""
          />
          <span title="Minha nota">{rate}/10</span>
        </div>
      </div>

      <div className="flex gap-3">
        {genres.map((genre) => (
          <span key={genre.id} className="text-sm text-gray-500">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}
