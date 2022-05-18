import "./App.scss";
import Header from "./components/Header";
import Fabric from "./components/Fabric";
import Market from "./components/Market";
import Storage from "./components/Storage";
import Production from "./components/Production";
import Purse from "./components/Purse";
import { AppContext } from "./AppContext";
import { useState } from "react";
import Modal2 from "./components/Modal2";
import Modal1 from "./components/Modal1";

function App() {
  const [money, setMoney] = useState(0);
  let [hands, setHands] = useState(0);
  let [chips, setChips] = useState(0);
  let [souls, setSouls] = useState(0);
  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);

  return (
    <AppContext.Provider
      value={{
        money,
        setMoney,
        hands,
        setHands,
        chips,
        setChips,
        souls,
        setSouls,
        modalActive2,
        setModalActive2,
        modalActive1,
        setModalActive1,
      }}
    >
      <div className="App">
        <div className="container">
          <main>
            <Header />
            <Fabric />
            <Purse />
            <Market />
            <Storage />
            <Production />
          </main>
        </div>
        <Modal1 />
        <Modal2 />
      </div>
    </AppContext.Provider>
  );
}

export default App;
