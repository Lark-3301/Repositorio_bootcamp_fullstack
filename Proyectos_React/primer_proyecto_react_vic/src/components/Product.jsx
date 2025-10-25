function Product({ name, price, description, category, imageUrl }) {
    return (
        <div className="product">
            <h2 className="product-name">{name}</h2>
                    <ul className="product-ul">
                        <li className="product-category">Category: {category}</li>
                        <li className="product-price">Price : {price}</li> 
                        <li className="product-description">Description : {description}</li>
                    </ul>
                 <img className="product-img" src={imageUrl} alt={description} /> {/* El alt significa "texto alternativo" y su función es describir el contenido de la imagen (<img>) para las personas que no pueden verla. */}
        </div>
    );
}

export default Product;
