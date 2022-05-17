import React, { useContext, useState } from "react";
import "../styles/Production.scss";
import handD from "../assets/handDisabled.svg";
import chipD from "../assets/chipDisabled.svg";
import soulD from "../assets/soulDisabled.svg";
import robo from "../assets/Designer Male 1.svg";
import { stockImg } from "./ImgStorage";
import { AppContext } from "../AppContext";

const Production = () => {
  let { money, setMoney, hands, setHands, chips, setChips, souls, setSouls } =
    useContext(AppContext);

  let [hand1, setHand1] = useState(false);
  let [hand2, setHand2] = useState(false);
  let [hand3, setHand3] = useState(false);
  let [hand4, setHand4] = useState(false);
  let [chip1, setChip1] = useState(false);
  let [chip2, setChip2] = useState(false);
  let [chip3, setChip3] = useState(false);
  let [chip4, setChip4] = useState(false);
  let [soul1, setSoul1] = useState(false);

  let handleStock = (
    group: number,
    setGroup: (arg0: number) => void,
    item: boolean,
    setItem: (arg0: boolean) => void
  ) => {
    if (group > 0 && !item) {
      setItem(!item);
      setGroup((group -= 1));
    } else if (item) {
      setItem(!item);
      setGroup((group += 1));
    }
  };

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
                <img
                  onClick={() => {
                    handleStock(hands, setHands, hand1, setHand1);
                  }}
                  src={hands < 1 && !hand1 ? handD : stockImg.hands[+hand1]}
                  alt="hand"
                />

                <img
                  onClick={() => {
                    handleStock(hands, setHands, hand2, setHand2);
                  }}
                  src={hands < 1 && !hand2 ? handD : stockImg.hands[+hand2]}
                  alt="hand"
                />
                <img
                  onClick={() => {
                    handleStock(hands, setHands, hand3, setHand3);
                  }}
                  src={hands < 1 && !hand3 ? handD : stockImg.hands[+hand3]}
                  alt="hand"
                />
                <img
                  onClick={() => {
                    handleStock(hands, setHands, hand4, setHand4);
                  }}
                  src={hands < 1 && !hand4 ? handD : stockImg.hands[+hand4]}
                  alt="hand"
                />
              </div>
              <div className="secondRow">
                <img
                  onClick={() => {
                    handleStock(chips, setChips, chip1, setChip1);
                  }}
                  src={chips < 1 && !chip1 ? chipD : stockImg.chips[+chip1]}
                  alt="chip"
                />

                <img
                  onClick={() => {
                    handleStock(chips, setChips, chip2, setChip2);
                  }}
                  src={chips < 1 && !chip2 ? chipD : stockImg.chips[+chip2]}
                  alt="chip"
                />
                <img
                  onClick={() => {
                    handleStock(chips, setChips, chip3, setChip3);
                  }}
                  src={chips < 1 && !chip3 ? chipD : stockImg.chips[+chip3]}
                  alt="chip"
                />
                <img
                  onClick={() => {
                    handleStock(chips, setChips, chip4, setChip4);
                  }}
                  src={chips < 1 && !chip4 ? chipD : stockImg.chips[+chip4]}
                  alt="chip"
                />
              </div>
              <div className="thirdRow">
                <img
                  onClick={() => {
                    handleStock(souls, setSouls, soul1, setSoul1);
                  }}
                  src={souls < 1 && !soul1 ? soulD : stockImg.souls[+soul1]}
                  alt="soul"
                />
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
