import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";
import { Loading } from "./components/Loading";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer autoClose={3 * 1000} />
    </>
  );
}

export default App;
