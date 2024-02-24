import * as Dialog from "@radix-ui/react-dialog";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";
// import { ComponentProps } from "react";

// type MenuProps = ComponentProps<"div">;

export function Menu() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <DotsThreeOutlineVertical />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
