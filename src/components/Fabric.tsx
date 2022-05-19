import React from "react";
import rightRobo from "./../assets/Designer Male 1.svg";
import leftRobo from "./../assets/Front Male 1.svg";
import "../styles/Fabric.scss";

const Fabric = () => {
  return (
    <div className="fabric">
      <div className="fabricBorder">
        <p className="first">01</p>
        <p className="scroll"> скролл</p>
        <p className="arrow">←</p>
      </div>
      <div className="farbicLeft">
        <h1 className="fabricHeader">Фабрика по производству биороботов</h1>
        <p className="fabricSubheader">класса «монитор-кресло»</p>
      </div>
      <div className="fabricRight">
        <img className="leftRobo" src={leftRobo} alt="leftRobo" />
        <div className="ellipseRobo"></div>
        <img className="rightRobo" src={rightRobo} alt="rightRobo" />
      </div>
    </div>
  );
};

export default Fabric;
