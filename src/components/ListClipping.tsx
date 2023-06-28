import { useEffect } from "react";
import { useClipping } from "../store";
import { Clipping } from "./Clipping";

export function ListClipping() {
  const [clipping, load] = useClipping((s) => [s.clipping, s.load]);
  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="flex flex-col divide-y divide-solid divide-zinc-700 gap-2 max-h-56 w-full overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-900 bg-zinc-900">
      {clipping?.map((clipping) => (
        <Clipping key={clipping.id} clipping={clipping} />
      ))}
    </div>
  );
}
