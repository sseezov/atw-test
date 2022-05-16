import React, { useContext, useState } from "react";
import "../styles/Purse.scss";
import { AppContext } from "./../AppContext";

const Purse = () => {
  let { money, setMoney } = useContext(AppContext);
  const [five, setFive] = useState(false);
  const getMoney = () => {
    if (money < 100 && !five) {
      setMoney(money++);
    } else if (money <= 95 && five) {
      setMoney((money += 5));
    } else {
      setMoney((money = 100));
      console.log("больше нельзя");
    }
  };

  return (
    <div className="purse">
      <div className="purseBorder">
        <p className="second">02</p>
      </div>
      <div className="purseLeft">
        <h2 className="purseHeader">Кошелёк криптовалют</h2>
        <div className="purseMoney">00000000000000000000000000000000000000</div>
        <p className="purseMoneySubheader">{money} biorobo монет</p>
        <div className="purseGetMoneyBlock">
          <p className="purseGetMoneyButton" id="addOneCoin" onClick={getMoney}>
            Нацыганить
          </p>
          <input
            type="checkbox"
            className="purseGetMoneyCheckbox"
            id="fiveCoins"
            name="fiveCoins"
            onChange={() => {
              setFive(!five);
            }}
          />
          <label className="purseGetMoneyLabel" htmlFor="fiveCoins">
            Цыганить по 5 монет
          </label>
        </div>
      </div>
    </div>
  );
};

export default Purse;
