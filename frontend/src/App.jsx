import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewHome from "./pages/NewHome";

function App() {
  return (
    <div >
      <Navbar />
      {/* <Home /> */}
      <NewHome/>
    </div>
  );
}

export default App;
