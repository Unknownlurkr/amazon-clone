/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../styling/Header.css";
//import { Link } from "react-router-dom";
//'npm i -s @material-ui/core if have trouble with icons
//dark logo text and white logo text:
//https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F8%2FAmazon-PNG-Transparent-Image.png&f=1&nofb=1

//turned into white text using gimp, not a desginer but it is a start!
//grab actual amazon products and store as json
//having issues with Link react-router-dom v6 as url param change
//but doest redirect have to read more V6 docs using a tage for now
function Header() {
  return (
    <div className="header">
      <a href='/'>
        <img
          className="header__logo"
          src="https://raw.githubusercontent.com/Unknownlurkr/amazon-clone/master/public/amazon-logo-light.png"
        />
        </a>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest!</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <a href='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
          </a>
      </div>
    </div>
  );
}

export default Header;
