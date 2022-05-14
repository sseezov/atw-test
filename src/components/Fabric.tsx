import React from "react";
import rightRobo from "./../assets/Designer Male 1.svg";
import leftRobo from "./../assets/Front Male 1.svg";
import "../styles/Fabric.scss";

const Fabric = () => {
  return (
    <div className="fabric">
      <div className="farbicLeft">
        <h2 className="fabricHeader">Фабрика по производству биороботов</h2>
        <p className="faricSubheader">класса монитор-кресло</p>
      </div>
      <div className="fabricRight">
        <div className="ellipseRobo"></div>
        <img className="leftRobo" src={leftRobo} alt="leftRobo" />
        <img className="rightRobo" src={rightRobo} alt="rightRobo" />
      </div>
    </div>
  );
};

export default Fabric;
