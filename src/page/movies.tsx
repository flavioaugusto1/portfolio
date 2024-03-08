import { MovieItem } from "../components/MovieItem";

export function Movies() {
  return (
    <div className="max-w-screen-md m-auto pt-8 pb-24 space-y-16 px-4 animate-appears">
      <span className="font-semibold text-zinc-800 text-3xl">
        Filmes que ando assistindo
      </span>

        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
    </div>
  );
}
