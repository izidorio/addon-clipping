


import { X } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import { Clipping } from "../types";
import { useClipping } from "../store";
import { toast } from "../utils";

const editFormSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
});

type EditFormType = z.infer<typeof editFormSchema>;

interface EditClippingFormProps {
  clipping: Clipping;
  onClose: () => void;
}

export function EditClippingForm({ clipping, onClose }: EditClippingFormProps) {
  const editClipping = useClipping((s) => s.edit);

  const methods = useForm<EditFormType>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      title: clipping.title,
      description: clipping.description || "",
    },
  });

  function handleOnSubmit(payload: EditFormType) {
    editClipping(clipping.id, {
      title: payload.title,
      description: payload.description,
    });
    onClose();
    toast.success("Clipping editado com sucesso!");
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 w-96 max-w-[90vw]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold dark:text-zinc-100">Editar Clipping</h2>
          <X
            size={24}
            weight="bold"
            className="dark:text-zinc-100 cursor-pointer"
            onClick={onClose}
          />
        </div>
        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <Input label="Título" name="title" />
            <Textarea label="Descrição" name="description" rows={4} />
            
            <div className="flex gap-2 mt-4">
              <Button type="button" onClick={onClose} className="flex-1 bg-gray-500 hover:bg-gray-700">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                Salvar
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}