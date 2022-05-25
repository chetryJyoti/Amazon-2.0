import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";


function Product({ id, title, price, img, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log("cart>>", cart);

  const addToCart = () => {
    // sending the items in the dataLink layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        img: img,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt=""></img>
      <button onClick={addToCart}>Add to cart.</button>
    </div>
  );
}

export default Product;
