import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvide";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";

function Checkout_Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div
      className="container-fluid p-3 m-2 rounded"
      style={{ backgroundColor: "#f3f2f3" }}
    >
      <CurrencyFormat
        renderText={(value) => (
          <div className="row">
            <div className="col p-2">
              <h6>
                Subtotal {basket?.length} item(s): <strong>{value}</strong>
                <br />
                <input type="checkbox" /> This Order Contains a gift
              </h6>
            </div>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix="$"
      />
      <Link to="/payment">
        <button
          className="btn border-none"
          style={{ backgroundColor: "#c0863e" }}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Checkout_Subtotal;
