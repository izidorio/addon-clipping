import { GearSix } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="flex w-full px-4 py-2 justify-between">
      <h1 className="font-medium dark:text-zinc-100">Clipping</h1>
      <GearSix size={32} className="dark:text-zinc-100" />
    </header>
  );
}
