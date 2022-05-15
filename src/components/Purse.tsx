import React from "react";
import "../styles/Purse.scss";

const Purse = () => {
  return (
    <div className="purse">
      <div className="purseBorder">
        <p className="second">02</p>
      </div>
      <div className="purseLeft">
        <h2 className="purseHeader">Кошелёк криптовалют</h2>
        <div className="purseMoney">00000000000000000000000000000000000000</div>
        <p className="purseMoneySubheader">$ biorobo монет</p>
        <div className="purseGetMoneyBlock">
          <p className="purseGetMoneyButton" id="add_one_coin">
            Нацыганить
          </p>
          <input
            type="checkbox"
            className="purseGetMoneyCheckbox"
            id="five_coins"
            name="five_coins"
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
