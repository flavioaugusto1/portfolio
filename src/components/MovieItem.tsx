import { useEffect, useState } from "react";
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
    getGenresByMovieName(id).then((response) => console.log(response));
  }, []);

  return (
    <div className="flex gap-4 rounded-md">
      <img
        className="h-48 w-60 rounded-md"
        src={`https://image.tmdb.org/t/p/w500${image}`}
      />
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-xl">
          Nota: <span className="font-semibold">{rate}</span>/10
        </span>
        <p className="text-lg font-semibold text-justify">
          Desrição: <span className="font-normal">{description}</span>
        </p>
      </div>
    </div>
  );
}
