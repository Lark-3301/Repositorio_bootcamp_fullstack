import Product from "./Product";
import products from "../../data/data";

function Products() {
    return (
        <main>
            <h2>This is the Android Cathaloge</h2>
            {products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} category={product.category} imageUrl={product.photo} />)};
        </main>
    );
}

export default Products;