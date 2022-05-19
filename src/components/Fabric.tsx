import React from "react";
import "../styles/Fabric.scss";
import { leftRobo, rightRobo } from "../components/AppStorage";

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
        <div className="leftRobo">{leftRobo}</div>
        <div className="ellipseRobo"></div>
        <div className="rightRobo">{rightRobo}</div>
      </div>
    </div>
  );
};

export default Fabric;
