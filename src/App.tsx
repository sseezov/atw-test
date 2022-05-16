import "./App.scss";
import Header from "./components/Header";
import Fabric from "./components/Fabric";
import Market from "./components/Market";
import Storage from "./components/Storage";
import Production from "./components/Production";
import Purse from "./components/Purse";
import { AppContext } from "./AppContext";
import { useState } from "react";

function App() {
  const [money, setMoney] = useState(0);

  return (
    <AppContext.Provider value={{ money, setMoney }}>
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
    </AppContext.Provider>
  );
}

export default App;
