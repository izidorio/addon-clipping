import { useFormContext } from "react-hook-form";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export function Textarea({ label, name, ...rest }: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div className="mb-2">
      <label className="block text-gray-700 dark:text-zinc-100 text-xs mb-1" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        {...register(name)}
        data-error={!!error}
        className="appearance-none border dark:border-zinc-400 rounded w-full py-2 px-3 text-gray-700 dark:text-zinc-100 dark:bg-zinc-800 leading-tight focus:outline-none data-[error=true]:border-red-500 resize-none"
        rows={3}
        {...rest}
      />
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
