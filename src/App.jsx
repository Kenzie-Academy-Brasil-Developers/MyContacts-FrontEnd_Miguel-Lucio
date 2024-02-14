import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer autoClose={3 * 1000} />
    </>
  );
}

export default App;
