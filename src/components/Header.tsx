import React from "react";
import "./../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="pacman">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <button className="header-btn">произвести биоробота</button>
    </div>
  );
};

export default Header;
