import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListClipping } from "./components/ListClipping";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col items-center gap-4 w-96 bg-zinc-50 dark:bg-zinc-800">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <Header />
      <ListClipping />
      <Footer />
    </div>
  );
}

export default App;
