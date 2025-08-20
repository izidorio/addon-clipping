import { ArrowSquareOut, PencilSimple } from "@phosphor-icons/react";
import { Clipping as IClipping } from "../types";
import { helper } from "../utils";
import { ButtonTrashConfirm } from "./ButtonTrashConfirm";
import { useRef, useState } from "react";
import { useClipping } from "../store";
import { EditClippingForm } from "./EditClippingForm";

interface ClippingProps {
  clipping: IClipping;
}

export function Clipping({ clipping }: ClippingProps) {
  const deleteClipping = useClipping((s) => s.delete);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    deleteClipping(clipping.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCloseEdit() {
    setIsEditing(false);
  }

  return (
    <>
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
          <div className="flex flex-col justify-center gap-1">
            <button
              onClick={handleEdit}
              className="p-1 text-gray-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
              title="Editar clipping"
            >
              <PencilSimple size={16} />
            </button>
            <ButtonTrashConfirm onAction={handleDelete} />
          </div>
        </div>
      </div>
      
      {isEditing && (
        <EditClippingForm 
          clipping={clipping} 
          onClose={handleCloseEdit} 
        />
      )}
    </>
  );
}
