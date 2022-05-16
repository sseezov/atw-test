import React, { useContext } from "react";
import "../styles/Production.scss";
import hand from "../assets/hand.svg";
import chipA from "../assets/chip.svg";
import chipD from "../assets/chipDisabled.svg";
import chipM from "../assets/chipMounted.svg";
import soulA from "../assets/soulAvailable.svg";
import soulD from "../assets/soulDisabled.svg";
import soulM from "../assets/soulMounted.svg";
import robo from "../assets/Designer Male 1.svg";
import { AppContext } from "../AppContext";

const Production = () => {
  let { money, setMoney, hands, setHands, chips, setChips, souls, setSouls } =
    useContext(AppContext);

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
                    <span className="customRadio" />
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
                    <span className="customRadio" />
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
                    <span className="customRadio" />
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
                    <span className="customRadio" />
                    Female
                  </label>
                </div>
              </div>
              <button className="productionButton" disabled={money < 10}>
                Произвести за 10 монет
              </button>
            </div>
          </div>
          <div className="productionItem">
            <div className="productionStock">
              <div className="firstRow">
                <button disabled className="testButton">
                  <img src={hand} alt="hand" />
                </button>
                <button>
                  <img src={hand} alt="hand" />
                </button>
                <button>
                  <img src={hand} alt="hand" />
                </button>
                <button>
                  <img src={hand} alt="hand" />
                </button>
              </div>
              <div className="secondRow">
                <button>
                  <img src={chipM} alt="chip" />
                </button>

                <button>
                  <img src={chipD} alt="chip" />
                </button>
                <button>
                  <img src={chipD} alt="chip" />
                </button>
                <button>
                  <img src={chipD} alt="chip" />
                </button>
              </div>
              <div className="thirdRow">
                <button>
                  <img src={soulD} alt="soul" />
                </button>
              </div>
            </div>

            <div className="productionNote">
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
