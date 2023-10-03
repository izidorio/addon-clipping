import { Calendar, GearSix, Info, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSettings } from "../store";
import manifest from "../manifest.json";
import { ButtonAdd } from "./ButtonAdd";
import ReactInputMask from "react-input-mask";
import { toast } from "../utils";

const formSchema = z.object({
  // bitlyToken: z.string().nonempty("o token é obrigatório"),
  emoji_header: z.string(),
  emoji_link: z.string(),
  emoji_resume: z.string(),
});

type formType = z.infer<typeof formSchema>;

export function Header() {
  const [isShow, setIsShow] = useState(false);
  const [load, update, updateDateCLipping] = useSettings((s) => [
    s.load,
    s.update,
    s.updateDateClipping,
  ]);

  const methods = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    methods.reset(load());
  }, [load, methods]);

  async function handleOnSubmit(payload: formType) {
    update(payload);
    setIsShow(false);
    toast.success("Preferências salvas com sucesso!");
  }

  function handleUpdateDateClipping(e: React.ChangeEvent<HTMLInputElement>) {
    updateDateCLipping(e.currentTarget.value);
  }

  return (
    <header className="flex flex-col w-full relative">
      <div className="flex w-full px-4 justify-between items-center relative">
        <h1 className="flex flex-col font-lg mb-2 font-medium dark:text-zinc-100">
          <a
            href="https://github.com/izidorio/addon-clipping#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center cursor-pointer"
          >
            Clipping
            <Info size={16} />
          </a>
          <small className="font-light text-[0.5rem] dark:text-zinc-300">
            versão {manifest.version}
          </small>
        </h1>
        <GearSix
          size={24}
          className="dark:text-zinc-100 cursor-pointer"
          onClick={() => setIsShow(true)}
        />
        <div
          data-show={isShow}
          className="absolute top-0 left-0 right-0 hidden data-[show=true]:flex bg-white shadow dark:bg-zinc-800 z-10"
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
              {/* <Input label="Bitly Token" name="bitlyToken" type="password" /> */}
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
      <div className="flex w-full gap-4 px-4 ">
        <div className="flex items-center text-gray-700 dark:text-zinc-100 border dark:border-zinc-500 rounded px-2">
          <Calendar size={24} className="dark:text-zinc-500" />
          <div className="w-[5.5rem]">
            <ReactInputMask
              id="inline-full-name"
              mask="99/99/9999"
              placeholder="99/99/9999"
              className="appearance-none text-xs border-0 w-full px-2 py-2 dark:bg-zinc-800 leading-tight focus:outline-none"
              defaultValue={new Date().toLocaleDateString("pt-BR")}
              onChange={handleUpdateDateClipping}
            />
          </div>
        </div>
        <ButtonAdd />
      </div>
    </header>
  );
}
