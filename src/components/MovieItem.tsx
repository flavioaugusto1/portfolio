export function MovieItem() {
  return (
    <div className="flex gap-4">
      <img className="h-80 w-60" src="https://github.com/flavioaugusto1.png" />
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Title Movie</h1>
        <span className="text-xl font-semibold">Nota: 10/10</span>
        <p className="text-xl font-semibold text-slate-800">
          Desrição:{" "}
          <span className="font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ipsam inventore voluptates quia, qui sequi impedit maiores animi
            molestiae exercitationem autem, molestias velit hic minima rem
            provident enim? Aliquid, voluptatem.
          </span>
        </p>
      </div>
    </div>
  );
}
