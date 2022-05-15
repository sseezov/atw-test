import React from "react";
import "../styles/Production.scss";

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
              <p className="productionTypeRobo">Тип биоробота:</p>
              <div className="productionRadioTypes">
                <div className="radioFront">
                  <input type="radio" />
                  <label>FrontEnd</label>
                </div>
                <div className="radioDesign">
                  <input type="radio" />
                  <label>Design</label>
                </div>
              </div>

              <p>Cтабилизатор:</p>
              <div className="productionRadioTypes">
                <div className="radioMale">
                  <input type="radio" />
                  <label>Male</label>
                </div>
                <div className="radioFamale">
                  <input type="radio" />
                  <label>Famale</label>
                </div>
              </div>
              <button className="productionButton">
                Произвести за 10 монет
              </button>
            </div>
          </div>
          <div className="productionItem">
            <h3>Микрочип</h3>
            <p>Стоимость: 3 монет</p>
            <h5>$ шт</h5>
          </div>
          <div className="productionItem">
            <h3>Душа</h3>
            <p>Стоимость: 15 монет</p>
            <h5>$ шт</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
