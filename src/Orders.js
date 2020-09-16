import React, { useEffect, useState } from "react";
import Header from "./Header";
import { db } from "./firebase";
import { useStateValue } from "./StateProvide";
import Order from "./Order";

function Orders() {
  const [{ user }] = useStateValue();
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [Orders]);
  return (
    <div className="container-fluid" style={{ backgroundColor: "#eaebec" }}>
      <div className="row">
        <div className="col">
          <h2>Your Orders</h2>
        </div>
      </div>
      <div className="row m-3 border">
        <div className="col">
          {Orders?.map((order) => (
            <div>
              <Order order={order} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
