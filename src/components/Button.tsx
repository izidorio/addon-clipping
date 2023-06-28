import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "auto" | "full";
}
export function Button({ children, width, ...rest }: ButtonProps) {
  return (
    <button
      data-width={width}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline data-[width=full]:w-full"
      {...rest}
    >
      {children}
    </button>
  );
}