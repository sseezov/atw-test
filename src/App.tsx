import "./App.scss";
import Header from "./components/Header";
import Fabric from "./components/Fabric";
import Market from "./components/Market";
import Storage from "./components/Storage";
import Production from "./components/Production";
import Purse from "./components/Purse";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Fabric />
        <Purse />
        <Market />
        <Storage />
        <Production />
      </div>
    </div>
  );
}

export default App;
