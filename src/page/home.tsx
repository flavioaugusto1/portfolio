export function Home() {
  return (
    <div className="max-w-screen-md m-auto pt-24 space-y-16">
      <div className="flex gap-1 items-center">
        <img
          src="https://github.com/flavioaugusto1.png"
          className="h-14 w-14 rounded-full  "
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-zinc-800">
            Flávio Augusto
          </span>
          <span className="text-base font-light">Front-End Developer</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-zinc-800">Sobre mim</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea
          enim commodi repellat suscipit dicta consequuntur, autem perspiciatis
          veniam assumenda voluptatem. Aut dolores quaerat molestiae dolorem
          accusantium. Quis, cupiditate dolorum?
        </span>
      </div>
      <div className="space-y-6">
       
      </div>
    </div>
  );
}
