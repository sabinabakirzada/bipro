import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png"
            alt=""
          />
          <nav className="h-nav">
            <ul className="h-ul">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>TEAM</li>
              <li>SKILL</li>
              <li>CLIENTS</li>
              <li>PRICING</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
