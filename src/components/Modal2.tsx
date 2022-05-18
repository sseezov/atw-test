import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/Modals.scss";

const Modal2 = () => {
  let { modalActive2, setModalActive2, setRoboMounted } =
    useContext(AppContext);
  const handleClosure = () => {
    setRoboMounted(false);
    setModalActive2(false);
  };

  return (
    <div className={modalActive2 ? "modal2Active" : "modal2Disabled"}>
      <div className="modalContent">
        <div onClick={handleClosure} className="modal2Button" />
        <h2>Биоробот произведён</h2>
        <p>Поздравляем!</p>
        <p>Вы произвели биоробота</p>
      </div>
    </div>
  );
};

export default Modal2;
