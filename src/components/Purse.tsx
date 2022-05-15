import React from "react";
import "../styles/Purse.scss";
import check from "../assets/Vector 22.svg";

const Purse = () => {
  return (
    <div className="purse">
      <div className="purseBorder">
        <p className="second">02</p>
      </div>
      <div className="purseLeft">
        <h2 className="purseHeader">Кошелек криптовалют</h2>
        <div className="purseMoney">00000000000000000000000000000000000000</div>
        <p className="purseMoneySubheader">45 biorobo монет</p>
        <div className="purseGetMoneyBlock">
          <p className="purseGetMoneyButton" id="add_one_coin">
            Нацыганить
          </p>
          <input
            type="checkbox"
            className="purseGetMoneyCheckbox"
            id="five_coins"
            name="five_coins"
            value="yes"
          />
          <label className="purseGetMoneyLabel" htmlFor="five_coins">
            Цыганить по 5 монет
          </label>
        </div>
      </div>
    </div>
  );
};

export default Purse;
