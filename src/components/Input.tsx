import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div className="mb-2">
      <label className="block text-gray-700 dark:text-zinc-100 text-xs mb-1" htmlFor="token">
        {label}
      </label>
      <input
        id={label}
        {...register(name)}
        data-error={!!error}
        className="appearance-none border dark:border-zinc-400 rounded w-full py-2 px-3 text-gray-700 dark:text-zinc-100 dark:bg-zinc-800 leading-tight focus:outline-none data-[error=true]:border-red-500"
        {...rest}
      />
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
