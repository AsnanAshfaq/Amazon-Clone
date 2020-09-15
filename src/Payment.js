import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvide";
import Checkout_Product from "./Checkout_Product";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Axios from "./Axios.js";
import { useHistory } from "react-router-dom";
import {db} from './firebase'


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const History = useHistory();

  //   getting the hooks from the stripe
  const stripe = useStripe();
  const elements = useElements();

  //   states for card number of the user
  const [Error, setError] = useState("");
  const [succeeded, setsucceeded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [Disabled, setDisabled] = useState(true);
  //   client secret for telling the stripe that we have some payment coming for you
  const [clientsecret, setclientsecret] = useState("");

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const respone = await Axios({
        method: "post",
        //stripe accepts the amount in cents thats y we are multiplying by 100
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      // got the secret
      setclientsecret(respone.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);

    const payload = await stripe
      .confirmCardPayment(clientsecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment intent is actually the payment confirmation

        // payment is complete 
        // add the order in the firebase cloud database 
        db
          .collection('users')
          .doc(user?.id)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket : basket,
            amount : paymentIntent.amount,
            created : paymentIntent.created
          })

        // change the local states 
        setsucceeded(true);
        setError(null);
        setprocessing(false);

        // empty the basket 
        dispatch({
          type:'EMPTY_BASKET'
        })
        History.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div style={{ userSelect: "none" }}>
      {/* payment header  */}
      <div
        className="container-fluid d-flex justify-content-center p-1"
        style={{ backgroundColor: "#eaebec" }}
      >
        <div className="row">
          <div className="col">
            <h2>Checkout ( {basket?.length} items )</h2>
          </div>
        </div>
      </div>
      {/* payment delivery section  */}
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-2">
            <h5>Delivery Address</h5>
          </div>
          <div className="col-10 d-flex flex-start">
            <p>
              {user ? (
                <div>
                  <p>{user.email}</p>
                  <p>Testing Address</p>
                  <p>Chicago</p>
                </div>
              ) : (
                "No Address Given "
              )}
            </p>
          </div>
        </div>
      </div>
      <hr />
      {/* payment review items  section  */}
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-2">
            <h5>Review Items and delivery</h5>
          </div>
          <div className="col-10 d-flex flex-column">
            {basket?.length != 0 ? (
              basket.map((item) => (
                <Checkout_Product
                  key={Math.random()}
                  id={item.id}
                  desc={item.desc}
                  price={item.price}
                  rating={item.rating}
                  imageURL={item.image}
                />
              ))
            ) : (
              <div>
                <p>No Items in the Cart</p>
                <Link to="/">
                  <p>Add Items</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* show the card method only if we have something in the basket */}
      {basket?.length != 0 && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <h5>Payment Method</h5>
            </div>
            <div className="col-10 d-flex flex-column">
              <h6>Card Details</h6>
              {/* user card input detail by using STRIPE CARD MAGIC 💯 */}
              <div className="py-2 pl-1">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                </form>
              </div>
              <div className="border  p-3">
                <div className="d-flex flex-row">
                  <h5>Order Total: </h5>
                  <CurrencyFormat
                    renderText={(value) => <h5 className="pl-3"> {value}</h5>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix="$"
                  />
                </div>
                <div className="row d-flex flex-column">
                  <div className="col d-flex justify-content-center w-50">
                    <button
                      className="btn w-50 p-2"
                      style={{ backgroundColor: "#c0863e" }}
                      disabled={processing || Disabled || succeeded}
                    >
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
                  <div className="col">
                    {/* Error  */}
                    {Error && <spna className="text-danger">{Error}</spna>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
