import { ReloadIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "auto" | "full";
  isLoading?: boolean;
}
export function Button({ children, width, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      data-width={width}
      disabled={isLoading}
      className="flex h-10 justify-center items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline data-[width=full]:w-full disabled:cursor-not-allowed disabled:bg-zinc-400"
      {...rest}
    >
      {isLoading && <ReloadIcon className="h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
}
