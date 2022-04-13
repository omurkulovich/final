import "./App.css";
import MovieContextProvider from "./context/contextsMovie";
import Routing from "./Routing";

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
