import "./App.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "./pages/Login.css";

function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
