import React from "react";
import "../styles/Market.scss";

const Storage = () => {
  return (
    <div className="market">
      <div className="marketBorder">
        <p className="third">03</p>
      </div>
      <div>
        <h3 className="marketHeader">Рынок комплектующих</h3>
        <div className="marketCols">
          <div className="marketItem">
            <h3>Биорука</h3>
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
          <div className="marketItem">
            <h3>Микрочип</h3>
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
          <div className="marketItem">
            <h3>Душа</h3>
            <p>Стоимость: $монет</p>
            <button>Установить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
