import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-detail">
            <div className="detail-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="detail-info">
                <span className="product-category">
                    {product.category}
                </span>

                <h1 className="product-title">
                    {product.name}
                </h1>

                <p className="product-description">
                    {product.description}
                </p>

                <h2 className="product-price">
                    ₦{product.price.toLocaleString()}
                </h2>

                <div className="actions">
                    <button 
                        className="add-to-cart" 
                        onClick={() => addToCart(product)}
                    >
                        🛒 Add to Cart
                    </button>
                    <button className="buy-now">
                        ⚡ Buy Now
                    </button>
                </div>

                <div className="extra-info">
                    <p><strong>Shipping:</strong> Free delivery within 3–5 days</p>
                    <p><strong>Returns:</strong> 30-day return policy</p>
                </div>
            </div>
        </div>
    );
}
