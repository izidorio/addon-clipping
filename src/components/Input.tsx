interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 dark:text-zinc-100 text-xs mb-1" htmlFor="token">
        {label}
      </label>
      <input
        className="appearance-none border dark:border-zinc-400 rounded w-full py-2 px-3 text-gray-700 dark:text-zinc-100 dark:bg-zinc-800 leading-tight focus:outline-none"
        name={name}
        {...rest}
      />
    </div>
  );
}
