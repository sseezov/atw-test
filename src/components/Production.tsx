import React, { useContext, useEffect, useState } from "react";
import "../styles/Production.scss";
import {
  chipD,
  handD,
  soulD,
  stockImg,
  Parts,
  robotsReady,
  robotsUnready,
} from "./AppStorage";
import { AppContext } from "../AppContext";

const Production: React.FC = () => {
  let {
    money,
    hands,
    setHands,
    chips,
    setChips,
    souls,
    setSouls,
    setModalActive2,
  } = useContext(AppContext);
  let [hand1, setHand1] = useState<boolean>(false);
  let [hand2, setHand2] = useState<boolean>(false);
  let [hand3, setHand3] = useState<boolean>(false);
  let [hand4, setHand4] = useState<boolean>(false);
  let [chip1, setChip1] = useState<boolean>(false);
  let [chip2, setChip2] = useState<boolean>(false);
  let [chip3, setChip3] = useState<boolean>(false);
  let [chip4, setChip4] = useState<boolean>(false);
  let [soul1, setSoul1] = useState<boolean>(false);
  let [handsNeeded, setHandsNeeded] = useState<number>(4);
  let [chipsNeeded, setChipsNeeded] = useState<number>(4);
  let [soulsNeeded, setSoulsNeeded] = useState<number>(1);
  let [moneyNeeded, setMoneyNeeded] = useState<boolean>(false);
  let [productionReady, setProductionReady] = useState<boolean>(false);
  let [genderMale, setGenderMale] = useState<boolean>(true);
  let [jobFront, setJobFront] = useState<boolean>(true);
  let [roboMounted, setRoboMounted] = useState<boolean>(false);

  //функция ниже хэндлит производство роботов после первого выпуска
  const produceRobo = () => {
    setRoboMounted(true);
    setModalActive2(true);
    setTimeout(() => {
      setHand1(false);
      setHand2(false);
      setHand3(false);
      setHand4(false);
      setChip1(false);
      setChip2(false);
      setChip3(false);
      setChip4(false);
      setSoul1(false);
      setHandsNeeded(4);
      setChipsNeeded(4);
      setSoulsNeeded(1);
      setProductionReady(false);
      setRoboMounted(false);
    }, 1000);
  };

  //Ниже представлена исходная строка и следом функция, которая выводит сообщение о недостающих запчастях
  const string = [
    "Не хватает ",
    Parts.hands[handsNeeded],
    Parts.chips[chipsNeeded],
    Parts.souls[soulsNeeded],
    Parts.money[+moneyNeeded],
  ];

  const showNotification = () => {
    let result = string.filter((word) => {
      return word;
    });
    if (result.length > 2) {
      result.splice(result.length - 1, 0, " и ");
    }
    if (result.length === 5) {
      result.splice(result.length - 3, 0, ", ");
    } else if (result.length === 6) {
      result.splice(result.length - 4, 0, ", ");
      result.splice(result.length - 3, 0, ", ");
    }
    return result.join("");
  };

  useEffect(() => {
    if (money < 10) {
      setMoneyNeeded(true);
    } else if (money >= 10) {
      setMoneyNeeded(false);
    }
  }, [money]);

  useEffect(() => {
    if (
      handsNeeded === 0 &&
      chipsNeeded === 0 &&
      soulsNeeded === 0 &&
      money >= 10
    ) {
      setProductionReady(true);
    } else if (
      handsNeeded !== 0 ||
      chipsNeeded !== 0 ||
      soulsNeeded !== 0 ||
      money < 10
    )
      setProductionReady(false);
  }, [handsNeeded, chipsNeeded, soulsNeeded, money]);

  //Здесь ниже представлена функция высшего порядка, которая принимает другие функции и управляется с ними. В частности, принимает запчасти и считает их, смотря по вмонтированным или размонтированным механизмам

  let handleStock = (
    group: number,
    setGroup: (arg0: number) => void,
    item: boolean,
    setItem: (arg0: boolean) => void,
    part: number,
    setPart: (arg0: number) => void
  ) => {
    if (group > 0 && !item) {
      setPart((part -= 1));
      setItem(!item);
      setGroup((group -= 1));
    } else if (item) {
      setPart((part += 1));
      setItem(!item);
      setGroup((group += 1));
    }
  };

  return (
    <div className="production" id="production">
      <div className="productionBorder">
        <p className="fifth">05</p>
      </div>
      <div className="productionBlock">
        <h3 className="productionHeader">Производство</h3>
        <div className="productionCols">
          {/* Первый блок слева: радиокнопки */}
          <div className="productionItem">
            <div className="productionRadio">
              <h6 className="productionTypeRobo">Тип биоробота:</h6>
              <div className="productionRadioTypes">
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="front"
                      value="Front"
                    />
                    {/* сначала я сделал радиокнопки с помощью псевдоэлементов, но потом перешел на этот способ, потому что они не всегда адекватно реагировали */}
                    <span
                      className={jobFront ? "radioActive" : "radioDisabled"}
                      onClick={() => setJobFront(true)}
                    />
                    FrontEnd
                  </label>
                </div>
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="front"
                      value="Design"
                    />
                    <span
                      className={jobFront ? "radioDisabled" : "radioActive"}
                      onClick={() => setJobFront(false)}
                    />
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
                      value="Male"
                    />
                    <span
                      className={genderMale ? "radioActive" : "radioDisabled"}
                      onClick={() => setGenderMale(true)}
                    />
                    Male
                  </label>
                </div>
                <div>
                  <label className="radioType">
                    <input
                      className="realRadio"
                      type="radio"
                      name="gender"
                      value="Female"
                      id="radioFemale"
                    />
                    <span
                      className={genderMale ? "radioDisabled" : "radioActive"}
                      onClick={() => setGenderMale(false)}
                    />
                    Female
                  </label>
                </div>
              </div>
              <button
                className="productionButton"
                disabled={!productionReady}
                onClick={produceRobo}
              >
                Произвести за 10 монет
              </button>
            </div>
          </div>

          {/* Средний блок с запчастями */}
          <div className="productionItem">
            <div className="productionStock">
              <div className="firstRow">
                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      hands,
                      setHands,
                      hand1,
                      setHand1,
                      handsNeeded,
                      setHandsNeeded
                    );
                  }}
                >
                  {hands < 1 && !hand1 ? handD : stockImg.hands[+hand1]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      hands,
                      setHands,
                      hand2,
                      setHand2,
                      handsNeeded,
                      setHandsNeeded
                    );
                  }}
                >
                  {hands < 1 && !hand2 ? handD : stockImg.hands[+hand2]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      hands,
                      setHands,
                      hand3,
                      setHand3,
                      handsNeeded,
                      setHandsNeeded
                    );
                  }}
                >
                  {hands < 1 && !hand3 ? handD : stockImg.hands[+hand3]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      hands,
                      setHands,
                      hand4,
                      setHand4,
                      handsNeeded,
                      setHandsNeeded
                    );
                  }}
                >
                  {hands < 1 && !hand4 ? handD : stockImg.hands[+hand4]}
                </div>
              </div>
              <div className="secondRow">
                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      chips,
                      setChips,
                      chip1,
                      setChip1,
                      chipsNeeded,
                      setChipsNeeded
                    );
                  }}
                >
                  {chips < 1 && !chip1 ? chipD : stockImg.chips[+chip1]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      chips,
                      setChips,
                      chip2,
                      setChip2,
                      chipsNeeded,
                      setChipsNeeded
                    );
                  }}
                >
                  {chips < 1 && !chip2 ? chipD : stockImg.chips[+chip2]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      chips,
                      setChips,
                      chip3,
                      setChip3,
                      chipsNeeded,
                      setChipsNeeded
                    );
                  }}
                >
                  {chips < 1 && !chip3 ? chipD : stockImg.chips[+chip3]}
                </div>

                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      chips,
                      setChips,
                      chip4,
                      setChip4,
                      chipsNeeded,
                      setChipsNeeded
                    );
                  }}
                >
                  {chips < 1 && !chip4 ? chipD : stockImg.chips[+chip4]}
                </div>
              </div>
              <div className="thirdRow">
                <div
                  className="img"
                  onClick={() => {
                    handleStock(
                      souls,
                      setSouls,
                      soul1,
                      setSoul1,
                      soulsNeeded,
                      setSoulsNeeded
                    );
                  }}
                >
                  {souls < 1 && !soul1 ? soulD : stockImg.souls[+soul1]}
                </div>
              </div>
            </div>

            <div className="productionNote">
              <p>
                {productionReady
                  ? "Все готово к производству"
                  : showNotification()}
              </p>
            </div>
          </div>

          {/* Третий блок с роботом */}
          <div className="productionItem">
            <div className="productionRobo">
              {productionReady
                ? robotsReady[+jobFront][+genderMale][+roboMounted]
                : robotsUnready[+jobFront][+genderMale]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
