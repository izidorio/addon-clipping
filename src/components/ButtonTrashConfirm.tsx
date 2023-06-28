import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface ConfirmButtonProps {
  onAction: () => void;
}

export function ButtonTrashConfirm({ onAction }: ConfirmButtonProps) {
  const [showButtonAction, setShowButtonAction] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtonAction(true);
    }, 1000 * 5); // 5 seconds
    return () => {
      clearTimeout(timeout);
    };
  }, [showButtonAction]);

  return (
    <>
      {showButtonAction && (
        <Trash
          size={20}
          onClick={() => setShowButtonAction(false)}
          className="dark:text-zinc-300 cursor-pointer hover:brightness-150"
        />
      )}
      {!showButtonAction && (
        <Trash
          onClick={() => onAction()}
          size={20}
          className="text-red-500 cursor-pointer hover:brightness-150"
        />
      )}
    </>
  );
}
