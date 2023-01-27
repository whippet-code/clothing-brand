import React from 'react'

// import styles
import './App.css'

// Import components
import Header from "./components/Header"
import Landing from "./components/Landing"

// data to send to header for isLoggedIn status
const user = {
  name: "Amelie Clerique",
  isLoggedIn: true,
}

// Layout of components for App, send props to Header for loggedIn functionality
function App(props) {
  return (
    <div className="App">
      <Header user={ user }/>
      <Landing />
    </div>
  );
}

export default App
