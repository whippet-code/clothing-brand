import React from 'react'

// import styles
import './Styles.css'
// Import components

// import images/logos
import logo from '../images/thread-ginger-high-resolution-logo-black-on-transparent-background.png'

//props for Header = user {name: isLoggedIn:}
function Header(props) {
  return (
    <header className='heading'>
          <img src={logo} alt="Ginger & Thread logo" className='logo'/>
          {// JS to alter Welcome message - isLoggedIn?
            props.user.isLoggedIn ? <h1 className='welcome'>Welcome back, {props.user.name}</h1> : <button type='button' className='signInButton'> - - Log In - - </button>
          }
    </header>
  );
}

export default Header;