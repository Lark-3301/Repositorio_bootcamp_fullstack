function ShoppingCart({showCartProp}) {
    return (
        <div className={`class-div-shoping ${showCartProp ? "" : "none"}`}>
            <p className="class-p-shopping">Shopping Cart</p>
            <button className="class-button-shopping">❌</button>
        </div>
    )
}

export default ShoppingCart