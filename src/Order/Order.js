import React from "react";
import "./Order.css";
import moment from "moment";
import Checkoutproduct from "../CheckoutProduct/Checkoutproduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  const { id, data } = order;

  return (
    <div className="order">
      <p>{moment.unix(data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{id}</small>
      </p>
      {data.basket?.map((item) => (
        <Checkoutproduct
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton={true} // Set hideButton to true to hide the button
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
