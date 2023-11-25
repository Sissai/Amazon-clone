import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // Format the price with a thousand separator
  const formattedPrice = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{formattedPrice}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>🌟</p> // Add the "key" prop with a unique value
            ))}
        </div>
      </div>
      <div className="product__image-container">
        <img src={image} alt="" className="product__image" />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
