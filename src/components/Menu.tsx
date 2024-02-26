import * as Dialog from "@radix-ui/react-dialog";
import { Command, X, Search } from "lucide-react";
import { MenuSections } from "./MenuSections";

export function Menu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="flex items-center fixed bottom-5 right-5 shadow-md rounded-full w-12 h-12 py-2 px-2 bg-zinc-900 cursor-pointer hover:bg-zinc-800"
        asChild
      >
        <Command className="text-2xl text-zinc-100" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 data-[state=open]:backdrop-blur-sm data-[state=open]:animate-appears z-10" />
        <Dialog.Content className="w-3/4 h-80 fixed m-auto inset-0 bg-zinc-200 animate-appears z-20 rounded-md border border-zinc-300 shadow-md lg:w-[500px] lg:h-80">
          <div className="flex items-center justify-between gap-2 p-3">
            <div className="flex items-center flex-1 gap-2">
              <Search className="text-xl" />
              <input
                className="bg-zinc-200 w-full outline-none"
                placeholder="Digite para pesquisar"
              />
            </div>
            <Dialog.Close>
              <X className="text-xl" />
            </Dialog.Close>
          </div>

          <div className="h-px bg-zinc-300 w-full" />

          <div className="overflow-y-auto h-64 scrollbar scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <MenuSections />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
