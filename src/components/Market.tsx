import React, { useContext } from "react";
import "./../styles/Market.scss";
import biodhand from "../assets/biohand.svg";
import microchip from "../assets/microchip.svg";
import soul from "../assets/soul.svg";
import { AppContext } from "../AppContext";

const Market = () => {
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
            <img src={biodhand} alt="биорука" />
            <h3>Биорука</h3>
            <p>Стоимость: 7 монет</p>
            <button disabled={money < 7} onClick={getHand}>
              Установить
            </button>
          </div>
          <div className="marketItem">
            <img src={microchip} alt="микрочип" />
            <h3>Микрочип</h3>
            <p>Стоимость: 5 монет</p>
            <button disabled={money < 5} onClick={getChip}>
              Установить
            </button>
          </div>
          <div className="marketItem">
            <img src={soul} alt="душа" />
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
