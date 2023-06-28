import { Coffee, Copy, Eraser, HeartStraight, X } from "@phosphor-icons/react";
import { Button } from "./Button";
import pixImage from "../../public/icons/pix.png";
import { useState } from "react";
import { useClipping, useSettings } from "../store";
import copy from "copy-text-to-clipboard";

export function Footer() {
  const [isShow, setIsShow] = useState(false);
  const [emoji_header, emoji_link, emoji_resume] = useSettings((s) => [
    s.emoji_header,
    s.emoji_link,
    s.emoji_resume,
  ]);
  const clipping = useClipping((s) => s.clipping);

  function handleCopyToClipboard() {
    let text = `${emoji_header}\n`;

    for (const item of clipping) {
      text += `${emoji_link} ${item.link}\n`;
      text += `${emoji_resume} *${item.title}* ${item.description}\n`;
    }

    copy(text);
  }

  return (
    <div className="flex flex-col w-full px-4 gap-2 relative">
      <div className="font-light text-xs dark:text-zinc-400">
        {clipping.length} notícia{clipping.length > 1 && "s"}
      </div>
      <div className="flex gap-2">
        <Button>
          <Eraser size={24} weight="bold" />
        </Button>
        <Button
          onClick={handleCopyToClipboard}
          width="full"
          disabled={clipping?.length > 0 ? false : true}
        >
          <Copy size={24} />
          Copiar para área de transferência
        </Button>
      </div>
      <div
        className="group flex w-full cursor-pointer text-[0.5rem] justify-center items-center gap-1 font-light text-xs dark:text-zinc-500 pb-2 dark:hover:text-zinc-300"
        onClick={() => setIsShow(true)}
      >
        se você gostou considere me pagar um{" "}
        <Coffee
          size={16}
          weight="bold"
          className="text-amber-800 group-hover:-rotate-45 group-hover:scale-110"
        />
      </div>
      <div
        data-show={isShow}
        className="hidden flex-col justify-center items-center absolute top-0 left-0 right-0 dark:bg-zinc-800 gap-1 py-2 dark:text-zinc-300 data-[show=true]:flex"
      >
        <X
          size={24}
          weight="bold"
          className="absolute top-0 right-4 hover:brightness-125 cursor-pointer"
          onClick={() => setIsShow(false)}
        />
        pix
        <img src={pixImage} alt="qr code do pix" className="bg-white w-20 h-20 mb-4" />
        <div className="flex justify-center items-center gap-1 font-light text-xs">
          Made with <HeartStraight size={12} weight="bold" className="text-red-500" /> by bento.dev
        </div>
      </div>
    </div>
  );
}
