import Product from "./Product";
import products from "../../data/data";
import ShoppingCard from "./ShoppingCard";
import {useState} from "react"

function Products() {
  const [showCart, setShowCart] = useState(false)
  console.log("Valor actual de showCart: " + showCart)
  return (
    <main>
      <h2>This is the Android Cathaloge</h2>
      {products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
      <ShoppingCard showCartProp={showCart}/>
      <button className="class-button-carrito" onClick={() => setShowCart(!showCart)}>🛒</button>
    </main>
  );
}

export default Products;
