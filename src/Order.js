import React from "react";
import moment from "moment";
import Checkout_Product from "./Checkout_Product";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="container-fluid" style={{backgroundColor: 'white'}}>
        <div className="row p-2">
            <div className="col">
                <h4>
                    Order
                </h4>
            </div>
        </div>
      <div className="row d-flex flex-row p-2">
        <div className="col">
          <h6>
            {
              moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
          </h6>
        </div>
        <div className="col d-flex justify-content-end">
          <h6>ID{"   " +order.id}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {order.data.basket?.map((item) => (
            <Checkout_Product
              id={item.id}
              desc={item.desc}
              imageURL={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
        </div>
      </div>
      <div className="row px-2">
        <div className="col">
          <CurrencyFormat
            renderText={(value) => (
              <div className="row">
                <div className="col p-2">
                  <h4> Total : {value}</h4>
                </div>
              </div>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeperator={true}
            prefix="$"
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
