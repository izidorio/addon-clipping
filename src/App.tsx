import { Header } from "./components/Header";
import { ButtonAdd } from "./components/ButtonAdd";

function App() {
  return (
    <div className="flex flex-col items-center gap-4 w-96 dark:bg-zinc-800">
      <Header />

      <ButtonAdd />
    </div>
  );
}

export default App;
