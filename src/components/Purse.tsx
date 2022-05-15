import React from "react";
import "../styles/Purse.scss";

const Purse = () => {
  return (
    <div className="purse">
      <div className="purseBorder">
        <p className="second">02</p>
      </div>
      <div className="purseLeft">
        <h2 className="purseHeader">Кошелек криптовалют</h2>
        <div className="purseMoney">здесь монетки</div>
        <p className="purseMoneySubheader">45 biorobo монет</p>
        <div className="purseGetMoneyBlock">
          <p className="purseGetMoneyButton">Нацыганить</p>
          <input type="checkbox" className="purseGetMoneyCheckbox" />
          <label className="purseGetMoneyLabel">Цыганить по 5 монет</label>
        </div>
      </div>
    </div>
  );
};

export default Purse;
