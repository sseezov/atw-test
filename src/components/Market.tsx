import React from "react";
import "./../styles/Market.scss";
import biodhand from "../assets/biohand.svg";
import microchip from "../assets/microchip.svg";
import soul from "../assets/soul.svg";

const Market = () => {
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
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
          <div className="marketItem">
            <img src={microchip} alt="микрочип" />
            <h3>Микрочип</h3>
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
          <div className="marketItem">
            <img src={soul} alt="душа" />
            <h3>Душа</h3>
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
