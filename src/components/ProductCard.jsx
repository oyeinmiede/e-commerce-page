import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} />
            </div>

            <div className="product-info">
                <span className="product-category">
                    {product.category}
                </span>

                <h3 className="product-name">
                    {product.name}
                </h3>

                <p className="product-price">
                    ₦{product.price}
                </p>

                <button className="product-button">
                    <Link to={`/product/${product.id}`}>View details</Link>
                </button>
            </div>
        </div>
    )
}

export default ProductCard
