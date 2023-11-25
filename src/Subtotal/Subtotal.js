import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from 'react-router-dom';


function Subtotal() {

  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            {/* {ShoppingBasket.length} */}
            <h4>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </h4>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
