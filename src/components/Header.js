import React from "react";

// import styles
import "./Styles.css";
// Import components

// import images/logos
import logo from "../images/thread-ginger-high-resolution-logo-black-on-transparent-background.png";

// ----- Old header login / user name function --------------------
// data to send to header for isLoggedIn status
// const user = {
//   name: "Amelie Clerique",
//   isLoggedIn: false,
// };
// ------ Old code for user info in header from <Header /> --------
// {
//   // JS to alter Welcome message - isLoggedIn?
//   user.isLoggedIn ? (
//     <h1 className="welcome">Welcome back, {user.name}</h1>
//   ) : (
//     <button type="button" className="signInButton">
//       {" "}
//       - - Log In - -{" "}
//     </button>
//   )
// }

//props for Header = user {name: isLoggedIn:}
function Header() {
  return (
    <header className="heading">
      <img src={logo} alt="Ginger & Thread logo" className="logo" />
    </header>
  );
}

export default Header;
