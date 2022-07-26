/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F8%2FAmazon-PNG-Transparent-Image.png&f=1&nofb=1"
      />
      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest!</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
  );
}

export default Header;
