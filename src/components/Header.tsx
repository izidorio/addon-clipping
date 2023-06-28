import { GearSix, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export function Header() {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className="flex w-full px-4 py-2 justify-between relative">
      <h1 className="font-medium dark:text-zinc-100">Clipping</h1>
      <GearSix
        size={32}
        className="dark:text-zinc-100 cursor-pointer"
        onClick={() => setIsShow(true)}
      />
      <div
        data-show={isShow}
        className="absolute top-0 left-0 right-0 hidden data-[show=true]:flex"
      >
        <X
          size={24}
          weight="bold"
          className="absolute top-2 right-4 dark:text-zinc-100 cursor-pointer"
          onClick={() => setIsShow(false)}
        />
        <form className="dark:bg-zinc-800 px-8 pt-6 pb-8 mb-4 w-full">
          <Input label="Bitly Token" name="token" type="password" />
          <Input label="Cabeçalho" name="header" />
          <div className="flex gap-4 mb-4">
            <Input label="Emoji link" name="emoji_link" />
            <Input label="Emoji Resumo" name="emoji_resume" />
          </div>

          <Button width="full" type="submit">
            Salvar
          </Button>
        </form>
      </div>
    </header>
  );
}
