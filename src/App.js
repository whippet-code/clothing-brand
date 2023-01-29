import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import styles
import "./App.css";

// Import components
import Home from "./components/Home";
import Shop from "./components/Shop";
import User from "./components/User";
import Legal from "./components/Legal";
import Calc from "./components/Calc";

// Layout of components for App, send props to Header for loggedIn functionality
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/user">Account</Link>
          <Link to="/legal">Legal</Link>
          <Link to="/calc">Calc</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/calc" element={<Calc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
