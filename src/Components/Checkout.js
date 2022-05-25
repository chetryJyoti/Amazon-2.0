import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h2 className="checkout_titile">Shopping Cart</h2>
          {/* CartItems */}
          {/* CartItems */}
          {/* CartItems */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
