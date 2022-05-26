import React from "react";
import "./Header.css";
import amazon_logo from "../assets/images/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  // for logging out the user if on sign out btn click
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={amazon_logo} alt="amazon_logo"></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">Hello guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBskt">
            <span className="header_optionLineTwo header__bsktCount">
              {cart?.length}
            </span>
            <ShoppingCartOutlinedIcon className="shoppingCardIcon" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
