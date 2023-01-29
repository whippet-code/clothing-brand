import React from "react";

// Import components
import Header from "./Header";
import Product from "./Product";

// import styles
import "./Styles.css";

//import images
import prodIm1 from "../images/product1.jpg";
import prodIm2 from "../images/product2.jpg";
import prodIm3 from "../images/product3.jpg";

// product object maker
function Products(id, item, desc, img) {
  // id key used by react to identify list items rendered
  this.id = id;
  this.item = item;
  this.desc = desc;
  this.img = img;
}

function Shop() {
  // product arr
  const prod1 = new Products(
    1,
    "Jumper Vest",
    "Womens hand knitted wool sleeveless jumper. Navy. Sourced from the Welsh valleys, the wool used in these garments is of the highest quality. Our artisan knitters then hand craft each item to order so please allow time for your order to be fulfilled. Dry Clean only.",
    prodIm1
  );
  const prod2 = new Products(
    2,
    "Denim Jeans",
    "Mens & womens heritage denim jeans. Made from recycled denim cloth sourced from Japan. Womens sized from size 8 to 18 short, regular and long. Mens sizing from 28-38 waist 28-34 leg. We recommend infrequent washing only when garment is dirty. Jeans do not need washing as often as you think.",
    prodIm2
  );
  const prod3 = new Products(
    3,
    "Merino Adventure Shirt",
    "Mens merino wool overshirt. Perfect for the cooler months. With sustainable merino wool source from New Zealand and crafted into a heavy knit thick pile cloth. Grey. Available in s, m, l & xl sizes. Machine wash cool.",
    prodIm3
  );
  const productArr = [prod1, prod2, prod3];

  return (
    // map the arr and for each product render a Product component passing in props of product and the key/id number
    <div className="Shop">
      <Header />
      <h4>Welcome the store. Have a look around</h4>
      <section className="products">
        {productArr.map((prod) => (
          <Product prod={prod} key={prod.id.toString()} />
        ))}
      </section>
    </div>
  );
}

export default Shop;
