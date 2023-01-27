import React from 'react'

// import styles
import './Styles.css'

// using props passed by Landing - each Product can be rendered by this component. Each within a div
function Product(props) {
  return (
    <div className='product'>
      <h2>{props.prod.item}</h2>
      <p>{props.prod.desc}</p>
      <img src={props.prod.img} alt="product visual"/>
    </div>
  )
}

export default Product