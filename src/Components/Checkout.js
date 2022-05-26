import React from "react";
import { useStateValue } from "../StateProvider";
import CartItem from "./CartItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart,user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div> 
          <h3 className="checkout_title1">Hello, {user?.email} </h3>
          <h2 className="checkout_title2">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CartItem
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
