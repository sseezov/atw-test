import React, { useContext, useState } from "react";
import "../styles/Purse.scss";
import { AppContext } from "./../AppContext";
import { coin } from "./AppStorage";

const Purse = () => {
  const { modalActive1, setModalActive1 } = useContext(AppContext);
  let { money, setMoney } = useContext(AppContext);

  const renderCoins = (coin: any) => {
    let wallet = [];
    for (let i = 0; i < money; i++) {
      wallet.push(coin);
    }
    let c = wallet.map((item, z) => {
      return (
        <div key={z} style={{ zIndex: 100 - z }}>
          {item}
        </div>
      );
    });
    return c;
  };

  const [five, setFive] = useState(false);
  const getMoney = () => {
    if (money < 100 && !five) {
      setMoney((money += 1));
    } else if (money <= 95 && five) {
      setMoney((money += 5));
    } else {
      setMoney((money = 100));
      setModalActive1(true);
    }
  };
  function numWord(value: number, words: [string, string, string]) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  return (
    <div className="purse">
      <div className="purseBorder">
        <p className="second">02</p>
      </div>
      <div className="purseLeft">
        <h2 className="purseHeader">Кошелёк криптовалют</h2>
        <div className="purseMoney">{renderCoins(coin)}</div>

        <p className="purseMoneySubheader">
          {numWord(money, [
            `${money} biorobo монета`,
            `${money} biorobo монеты`,
            `${money} biorobo монет`,
          ])}
        </p>
        <div className="purseGetMoneyBlock">
          <p className="purseGetMoneyButton" onClick={getMoney}>
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
