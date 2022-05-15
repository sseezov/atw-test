import React from "react";
import "../styles/Storage.scss";

const Storage = () => {
  return (
    <div className="storage">
      <div className="storageBorder">
        <p className="fourth">04</p>
      </div>
      <div>
        <h3 className="storageHeader">Склад</h3>
        <div className="storageCols">
          <div className="storageItem">
            <h3>Биорука</h3>
            <p>Стоимость: 5 монет</p>
            <h5>$ шт</h5>
            <button className="storageButton">Продать</button>
          </div>
          <div className="storageItem">
            <h3>Микрочип</h3>
            <p>Стоимость: 3 монет</p>
            <h5>$ шт</h5>
            <button className="storageButton">Продать</button>
          </div>
          <div className="storageItem">
            <h3>Душа</h3>
            <p>Стоимость: 15 монет</p>
            <h5>$ шт</h5>
            <button className="storageButton">Продать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
