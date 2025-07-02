import "../styles/ProductCart.css";

function ProductCart({product}) {
    
    return (
        <div className="card">
            <img src={product.imageUrl}/>
            <p className='team-name'>{product.info.team}</p>
            <p className='product-info'>{product.info.season} {product.info.condition}</p>
        </div>
    )
}

export default ProductCart