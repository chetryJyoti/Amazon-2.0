import React from "react";
import { useStateValue } from "../StateProvider";
import "./CartItem.css";
function CartItem({ id, img, title, price, rating }) {

    const[{cart},dispatch] =useStateValue();

    // for removing the item form cart
    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }

  return (
    <div className="cartItem">
      <img className="cartItem_img" src={img} alt="cart_img"></img>
      <div className="cartItem_info">
        <p className="cartItem_title">{title}</p>
        <p className="cartItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem_rating">
            {Array(rating).fill().map(()=>(
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove form cart.</button>
      </div>
    </div>
  );
}

export default CartItem;
