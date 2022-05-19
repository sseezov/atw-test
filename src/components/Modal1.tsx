import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { coin } from "./AppStorage";

const Modal1 = () => {
  const { modalActive1, setModalActive1 } = useContext(AppContext);
  return (
    <div className={modalActive1 ? "modal1Active" : "modal1Disabled"}>
      <div className="modalContent">
        <div
          onClick={() => {
            setModalActive1(false);
          }}
          className="modal1Button"
        />
        <div className="modal1Header">
          <div className="modalCoin">{coin}</div>
          <h2>Количество монет ограничено</h2>
        </div>

        <p>Вы не можете нацыганить более 100 монет biorobo</p>
      </div>
    </div>
  );
};

export default Modal1;
