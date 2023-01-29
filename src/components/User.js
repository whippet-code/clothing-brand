import React from "react";

// import styles
import "./Styles.css";

//import Components
import Header from "./Header";

// data to send to header for isLoggedIn status
const user = {
  name: "Amelie Clerique",
  isLoggedIn: true,
};

function User() {
  // button click func
  function clicked() {
    alert("User is logged out");
    document.querySelector(".welcome").style.opacity = 0;
  }

  return (
    <div className="User">
      <Header />
      <h1>User</h1>
      {
        // JS to alter Welcome message - isLoggedIn?
        user.isLoggedIn ? (
          <div>
            <h1 className="welcome">Welcome back, {user.name}</h1>
            <button type="button" className="signInButton" onClick={clicked}>
              Sign Out
            </button>
          </div>
        ) : (
          <button type="button" className="signInButton">
            {" "}
            - - Log In - -{" "}
          </button>
        )
      }
    </div>
  );
}

export default User;
