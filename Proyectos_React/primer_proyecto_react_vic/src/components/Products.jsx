import Product from "./Product";
import products from "../../data/data";
import Modal from "./Modal";

function Products() {
  return (
    <main>
      <h2>This is the Android Cathaloge</h2>
      {products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
      <Modal />
    </main>
  );
}

export default Products;
