import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const[{},dispatch]=useStateValue();
  // this will only run once the app component loads
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is:", authUser);
      if (authUser) {
        // the user just logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
