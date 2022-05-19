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
      <a href="#production">
        <button className="header-btn">Произвести биоробота</button>
      </a>
    </div>
  );
};

export default Header;
