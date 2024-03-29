interface MediaItems {
  name: string;
  link: string;
  icon: JSX.Element;
}

interface DataItems {
  section: string;
  medias: MediaItems[];
}

interface MenuSectionsProps {
  data: DataItems[];
}

export function MenuSections({ data }: MenuSectionsProps) {
  return (
    <div className="space-y-3 p-3">
      {/* Sessão de experiences */}
      <div>
        {data.map(
          (link) =>
            link.section === "experiences" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                <span className="text-sm font-semibold text-zinc-500">
                  Experiências
                </span>

                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400 cursor-pointer"
                  >
                    <div>{media.icon}</div>
                    <a className="w-full" href={media.link}>
                      {media.name}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>

      {/* Sessão de mídias */}
      <div>
        {data.map(
          (link) =>
            link.section === "social" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                <span className="text-sm font-semibold text-zinc-500">
                  Mídias Sociais
                </span>
                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400 cursor-pointer"
                  >
                    <div>{media.icon}</div>
                    <a className="w-full" href={media.link} target="_blank">
                      {media.name}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>

      {/* Sessão de outros */}
      <div>
        {data.map(
          (link) =>
            link.section === "others" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                <span className="text-sm font-semibold text-zinc-500">
                  Outros
                </span>

                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400 cursor-pointer"
                  >
                    <div>{media.icon}</div>
                    <a className="w-full" href={media.link}>
                      {media.name}
                    </a>
                  </div>
                ))}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
