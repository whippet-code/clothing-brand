import React from 'react'

// import styles
import './Styles.css'

// Import components
import Product from "./Product"

//import images
import prodIm1 from "../images/product1.jpg"
import prodIm2 from "../images/product2.jpg"
import prodIm3 from "../images/product3.jpg"

// product object maker
function Products(id, item, desc, img) {
  // id key used by react to identify list items rendered
  this.id = id
  this.item = item
  this.desc = desc
  this.img = img
}

function Landing() {
  // product arr
  const prod1 = new Products(1, "Jumper Vest", "Womens hand knitted wool sleeveless jumper. Navy. Sourced from the Welsh valleys, the wool used in these garments is of the highest quality. Our artisan knitters then hand craft each item to order so please allow time for your order to be fulfilled. Dry Clean only.", prodIm1)
  const prod2 = new Products(2, "Denim Jeans", "Mens & womens heritage denim jeans. Made from recycled denim cloth sourced from Japan. Womens sized from size 8 to 18 short, regular and long. Mens sizing from 28-38 waist 28-34 leg. We recommend infrequent washing only when garment is dirty. Jeans do not need washing as often as you think.", prodIm2)
  const prod3 = new Products(3, "Merino Adventure Shirt", "Mens merino wool overshirt. Perfect for the cooler months. With sustainable merino wool source from New Zealand and crafted into a heavy knit thick pile cloth. Grey. Available in s, m, l & xl sizes. Machine wash cool.", prodIm3)
  const productArr = [prod1, prod2, prod3]

  return (
          //About the company blurb section
          // under this, within a section - map the arr and for each product render a Product component passing in props of product and the key/id number
    <div className='landing'>
      <section className='about'>
        <h4>We make proper stuff, British-made to last. Shipped from stock. Plain, plastic-free packaging.</h4>
        <p>Our garments have been tested and perfected by us. We wear them every day. We want you to be able to rely on and be completely satisfied with everything you order from us at thread & ginger. That’s why all our clothing is guaranteed for life for manufacturing defects. If at any point your thread & ginger products become damaged, get them back to us and we’ll arrange for the item to be repaired or replaced or – if the item is no longer available – we will send goods of the same value. The guarantee doesn’t include damage that may have been caused by misuse, unusual wear and tear, accident or alteration, but we’ll always try and help you out whatever you’ve done.</p>

      </section>

      <section className='products'>
        {productArr.map(prod => (
          <Product prod={prod} key={prod.id.toString()}/>
        ))}
      </section>
    </div>
  )
}

export default Landing