import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/Checkoutproduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase"; // Removed the unused 'functions' import
import { colors } from "@mui/material";
import { grey } from "@mui/material/colors";

function Payment() {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(""); // Updated initialization

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      console.log("respose", response);
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log(paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/Orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
            <br></br>
            <hr  />

            <br></br>
            <p className="cardInformation">
              use card number: 4242 4242 4242 4242 <br></br>
              date: 04/24 <br></br>
              cvc: 242 <br></br>
              zipcode: 42424
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
