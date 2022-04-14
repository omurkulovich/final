import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";
import "antd/dist/antd.css";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <>
      <MovieContextProvider>
        <CartContextProvider>
          <Routing />
        </CartContextProvider>
      </MovieContextProvider>
    </>
  );
}

export default App;
