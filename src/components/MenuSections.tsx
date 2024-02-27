import { toast } from "sonner";

interface MenuSectionsProps {
  data: object[];
}

export function MenuSections({ data }: MenuSectionsProps) {
  function unavailableOption() {
    toast.warning("Essa opção ainda não está disponível!");
    return;
  }

  return (
    <div className="space-y-3 p-3">
      {/* Sessão de mídias */}
      <div>
        <span className="text-sm font-semibold text-zinc-500">
          Mídias Sociais
        </span>
        {data.map(
          (link) =>
            link.section === "social" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400"
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
        <span className="text-sm font-semibold text-zinc-500">Outros</span>
        {data.map(
          (link) =>
            link.section === "others" && (
              <div key={link.section} className="text-zinc-700 font-medium">
                {link.medias.map((media) => (
                  <div
                    key={media.name}
                    className="flex items-center gap-2 p-2 rounded-md hover:shadow-md hover:bg-gray-400"
                    onClick={unavailableOption}
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
