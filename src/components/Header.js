/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//chose better amazon logo with white text
//'npm i -s @material-ui/core if have trouble with icons
//dark logo text and white logo text:
//https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F8%2FAmazon-PNG-Transparent-Image.png&f=1&nofb=1
//turned into white text using gimp, not a desginer but it is a start!

function Header() {
  return (
    <div className="header">

      <img
        className="header__logo"
        src="https://raw.githubusercontent.com/Unknownlurkr/amazon-clone/master/public/amazon-logo-light.png"
      />

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

        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
      </div>
    </div>
  );
}

export default Header;
