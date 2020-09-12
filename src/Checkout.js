import React from "react";
import Checkout_Subtotal from "./Checkout_Subtotal";
import Checkout_Product from "./Checkout_Product";
import { useStateValue } from "./StateProvide";

function Checkout() {
  const [{ basket }, reducer] = useStateValue();

  return (
    <div className="container-fluid" style={{ userSelect: "none" }}>
      <div className="row">
        {/* left side */}
        <div className="col-xs-8 col-lg-8 col m-0 p-0 d-flex flex-column">
          {/*  banner  */}
          <img
            className="img-responsive w-100"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div className="mt-4 ml-3">
            <h3>Your Shopping Basket</h3>
            <hr />
            {/* if we do not have any items in the basket 😧  */}

            {basket.length == 0 ? (
              <div className="container-fluid d-flex justify-content-center">
                <h4>Basket is empty</h4>
              </div>
            ) : (
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
            )}
          </div>
        </div>
        {/* right side  */}
        <div className="col-xs-4 col-lg-4 col">
          {/* showing the total amount of the items in the basket 🅰️ 👽 */}
          <Checkout_Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
