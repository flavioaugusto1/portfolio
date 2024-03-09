import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function Button({ name, ...props }: ButtonProps) {
  return (
    <button
      className="py-2 px-2 bg-zinc-900 rounded-md text-gray-300 font-semibold hover:bg-zinc-700 transition-all"
      {...props}
    >
      {name}
    </button>
  );
}
