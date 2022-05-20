import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import "../styles/Storage.scss";

const Storage: React.FC = () => {
  let {
    money,
    setMoney,
    hands,
    setHands,
    chips,
    setChips,
    souls,
    setSouls,
    setModalActive1,
  } = useContext(AppContext);

  useEffect(() => {
    if (money > 100) {
      setMoney(100);
      setModalActive1(true);
    }
  }, [money, setMoney, setModalActive1]);

  const sellHand = () => {
    setMoney((money += 5));
    setHands((hands -= 1));
  };
  const sellChip = () => {
    setMoney((money += 3));
    setChips((chips -= 1));
  };
  const sellSoul = () => {
    setMoney((money += 15));
    setSouls((souls -= 1));
  };

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
            <h5>{hands} шт</h5>
            <button
              className="storageButton"
              disabled={hands < 1}
              onClick={sellHand}
            >
              Продать
            </button>
          </div>
          <div className="storageItem">
            <h3>Микрочип</h3>
            <p>Стоимость: 3 монеты</p>
            <h5>{chips} шт</h5>
            <button
              className="storageButton"
              disabled={chips < 1}
              onClick={sellChip}
            >
              Продать
            </button>
          </div>
          <div className="storageItem">
            <h3>Душа</h3>
            <p>Стоимость: 15 монет</p>
            <h5>{souls} шт</h5>
            <button
              className="storageButton"
              disabled={souls < 1}
              onClick={sellSoul}
            >
              Продать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
