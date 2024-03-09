import { useEffect, useState } from "react";
import TMDB from "../assets/tmdb.svg";
import {
  getGenresByMovieName,
  GenreProps,
} from "../services/getGenresByMovieName";
import { Heart } from "lucide-react";

interface MovieItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  rate: number;
}

export function MovieItem({
  id,
  title,
  description,
  image,
  rate,
}: MovieItemProps) {
  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {
    getGenresByMovieName(id).then((response) => setGenres(response));
  }, []);

  return (
    <div className="flex flex-col gap-3 rounded-md">
      <img
        className="h-96 w-64 rounded-md"
        src={`https://image.tmdb.org/t/p/w500${image}`}
      />

      <div>
        <span className="text-md text-gray-500">{genres[0].origin}, </span>
        <span className="text-md text-gray-500">2016</span>
      </div>

      <span className="font-bold text-2xl">Top gun</span>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-20 h-4" src={TMDB} alt="" />
          <span>10/10</span>
        </div>

        <div className="flex items-center gap-3">
          <img
            className="w-6 h-6 rounded-full object-cover"
            src="https://github.com/flavioaugusto1.png"
            alt=""
          />
          <span>10/10</span>
        </div>
      </div>

      <div className="flex gap-3">
        {genres.map((genre) => (
          <span key={genre.id} className="text-md text-gray-500">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}
