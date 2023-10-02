import { ArrowSquareOut } from "@phosphor-icons/react";
import { Clipping as IClipping } from "../types";
import { helper } from "../utils";
import { ButtonTrashConfirm } from "./ButtonTrashConfirm";
import { useRef } from "react";
import { useClipping } from "../store";

interface ClippingProps {
  clipping: IClipping;
}
export function Clipping({ clipping }: ClippingProps) {
  const deleteClipping = useClipping((s) => s.delete);
  const refDiv = useRef<HTMLDivElement | null>(null);
  function handleDelete() {
    deleteClipping(clipping.id);
    // refDiv.current?.remove();
  }

  return (
    <div ref={refDiv} className="flex flex-col px-4 py-1">
      <div className="flex gap-1 justify-between">
        <div className="flex flex-col">
          <a
            href={clipping.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-light text-xs dark:text-zinc-100 hover:dark:text-zinc-300"
          >
            <ArrowSquareOut size={16} />
            {helper.cropper({ text: clipping.link, size: 56 })}
          </a>

          <p className="font-bold text-xs dark:text-zinc-100">
            {helper.cropper({ text: clipping.title, size: 50, position: "center" })}
          </p>
          <p className="font-light text-xs dark:text-zinc-100">
            {helper.cropper({ text: clipping.description || "", size: 100 })}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <ButtonTrashConfirm onAction={handleDelete} />
        </div>
      </div>
    </div>
  );
}
