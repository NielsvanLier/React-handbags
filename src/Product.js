import React from "react";

function Product ({ productCollection, productImage, productName, productPrice }) {
    return (
        <article>
            <span>{productCollection}</span>
            <img src={productImage} alt={productName}/>
            <p>{productName}</p>
            <h4>{productPrice}</h4>
        </article>
    )
}

export default Product;