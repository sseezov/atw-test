import React from "react";
import "../styles/Production.scss";
import hand from "../assets/IconHand.svg";
import chip from "../assets/IconChip.svg";
import soul from "../assets/soul.svg";
import robo from "../assets/Designer Male 1.svg";

const Production = () => {
  return (
    <div className="production">
      <div className="productionBorder">
        <p className="fifth">05</p>
      </div>
      <div>
        <h3 className="productionHeader">Производство</h3>
        <div className="productionCols">
          <div className="productionItem">
            <div className="productionRadio">
              <h6 className="productionTypeRobo">Тип биоробота:</h6>
              <div className="productionRadioTypes">
                <div>
                  <label className="radioType">
                    <input
                      checked
                      className="realRadio"
                      type="radio"
                      name="front"
                      id="radioFront"
                    />
                    <span className="customRadio"></span>
                    FrontEnd
                  </label>
                </div>
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="front"
                      id="radioDesign"
                    />
                    <span className="customRadio"></span>
                    Design
                  </label>
                </div>
              </div>

              <h6>Cтабилизатор:</h6>
              <div className="productionRadioTypes">
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="gender"
                      id="radioMale"
                      checked
                    />
                    <span className="customRadio"></span>
                    Male
                  </label>
                </div>
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="gender"
                      id="radioFemale"
                    />
                    <span className="customRadio"></span>
                    Female
                  </label>
                </div>
              </div>
              <button className="productionButton">
                Произвести за 10 монет
              </button>
            </div>
          </div>
          <div className="productionItem">
            <div className="productionStock">
              <div className="firstRow">
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
              </div>
              <div className="secondRow">
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
                <img src={hand} alt="hand" />
              </div>
              <div className="thirdRow">
                <img src={hand} alt="hand" />
              </div>
            </div>

            <div>
              <p>$note</p>
            </div>
          </div>

          <div className="productionItem">
            <div className="productionRobo">
              <img src={robo} alt="robo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
