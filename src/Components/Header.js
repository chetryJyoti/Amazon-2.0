import React from "react";
import "./Header.css";
import amazon_logo from "../assets/images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={amazon_logo} alt="amazon_logo"></img>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBskt">
          <span className="header_optionLineTwo header__bsktCount">0</span>
          <ShoppingCartOutlinedIcon className="shoppingCardIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
