import Product from "./Product";
import products from "../../data/data";

function Products() {
    return (
        <main>
            <h2>This is the Android Cathaloge</h2>
            {products.map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </main>
    );
}

export default Products;