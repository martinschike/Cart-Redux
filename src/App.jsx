import "./App.css";
import CartContainer from "./components/Cart/CartContainer";
import Nav from "./components/Nav/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <CartContainer />
      <ToastContainer />
    </div>
  );
};

export default App;
