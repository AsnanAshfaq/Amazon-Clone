import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvide";

function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    // whenever the authentication state  changes
    // like when the user signs in
    // the authStatechange function will run (because authStatechange is always listening to the change of auth state)
    // and it will give us the current user signed in
    // or gives us null if there is no user
    auth.onAuthStateChanged((authUser) => {
    
      if (authUser) {
        // user is logged in or user was logged in
        // store the user in the CONTEXT API
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
