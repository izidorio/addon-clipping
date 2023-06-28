import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListClipping } from "./components/ListClipping";

function App() {
  return (
    <div className="flex flex-col items-center gap-4 w-96 dark:bg-zinc-800">
      <Header />
      <ListClipping />
      <Footer />
    </div>
  );
}

export default App;
