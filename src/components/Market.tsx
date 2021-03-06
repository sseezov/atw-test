import React, { useContext } from "react";
import "./../styles/Market.scss";
import { AppContext } from "../AppContext";
import { market } from "./AppStorage";

const Market: React.FC = () => {
  let { money, setMoney, hands, setHands, chips, setChips, souls, setSouls } =
    useContext(AppContext);
  const getHand = () => {
    setHands((hands += 1));
    setMoney((money -= 7));
  };
  const getChip = () => {
    setMoney((money -= 5));
    setChips((chips += 1));
  };
  const getSoul = () => {
    setMoney((money -= 25));
    setSouls((souls += 1));
  };

  return (
    <div className="market">
      <div className="marketBorder">
        <p className="third">03</p>
      </div>
      <div>
        <h3 className="marketHeader">Рынок комплектующих</h3>
        <div className="marketCols">
          <div className="marketItem">
            <div>{market.biohand}</div>
            <h3>Биорука</h3>
            <p>Стоимость: 7 монет</p>
            <button disabled={money < 7} onClick={getHand}>
              Установить
            </button>
          </div>
          <div className="marketItem">
            <div>{market.chip}</div>
            <h3>Микрочип</h3>
            <p>Стоимость: 5 монет</p>
            <button disabled={money < 5} onClick={getChip}>
              Установить
            </button>
          </div>
          <div className="marketItem">
            <div>{market.soul}</div>
            <h3>Душа</h3>
            <p>Стоимость: 25 монет</p>
            <button disabled={money < 25} onClick={getSoul}>
              Установить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
