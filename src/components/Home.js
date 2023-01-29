import React from "react";

//import Components
import Header from "./Header";
import Landing from "./Landing";

// import styles
import "./Styles.css";

function Home(props) {
  return (
    <div className="Legal">
      <Header />
      <Landing />
    </div>
  );
}

export default Home;
