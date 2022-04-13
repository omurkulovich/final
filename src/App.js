import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <MovieContextProvider>
        <Routing />
      </MovieContextProvider>
    </>
  );
}

export default App;
