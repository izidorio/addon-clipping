import { Calendar, GearSix, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSettings } from "../store";
import manifest from "../manifest.json";
import { ButtonAdd } from "./ButtonAdd";

const formSchema = z.object({
  bitlyToken: z.string().nonempty("o token é obrigatório"),
  emoji_header: z.string(),
  emoji_link: z.string(),
  emoji_resume: z.string(),
});

type formType = z.infer<typeof formSchema>;

export function Header() {
  const [isShow, setIsShow] = useState(false);
  const [load, update] = useSettings((s) => [s.load, s.update]);

  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    methods.reset(load());
  }, [load, methods]);

  async function handleOnSubmit(payload: formType) {
    update(payload);
  }

  return (
    <header className="flex flex-col w-full relative">
      <div className="flex w-full px-4 py-2 justify-between relative">
        <h1 className="flex flex-col font-medium dark:text-zinc-100">
          Clipping
          <small className="font-light text-[0.5rem]">versão {manifest.version}</small>
        </h1>
        <GearSix
          size={24}
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
          <FormProvider {...methods}>
            <form
              className="dark:bg-zinc-800 px-8 pt-6 pb-8 mb-4 w-full"
              onSubmit={methods.handleSubmit(handleOnSubmit)}
            >
              <Input label="Bitly Token" name="bitlyToken" type="password" />
              <Input label="Cabeçalho" name="emoji_header" />
              <div className="flex gap-4 mb-4">
                <Input label="Emoji link" name="emoji_link" />
                <Input label="Emoji Resumo" name="emoji_resume" />
              </div>

              <Button width="full" type="submit">
                Salvar
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="flex w-full gap-4 px-4 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              <Calendar size={24} />
            </label>
          </div>
          <div className="flex-1">
            <input
              className="appearance-none border dark:border-zinc-400 rounded w-full py-2 px-3 text-gray-700 dark:text-zinc-100 dark:bg-zinc-800 leading-tight focus:outline-none data-[error=true]:border-red-500"
              id="inline-full-name"
              type="date"
              value=""
            />
          </div>
        </div>
        <ButtonAdd />
      </div>
    </header>
  );
}
