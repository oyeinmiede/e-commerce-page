import { useCart } from '../context/CartContext'

export default function Checkout() {
    const { cart } = useCart()
    const subtotal = cart.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );

    const shipping = 2000;
    const total = subtotal + shipping;

    return (
        <div className="checkout-page">
            <div className="checkout-items">
                {cart.map(item => (
                    <div key={item.id} className="checkout-item">
                        <div className="checkout-img">
                            <img src={item.image} alt="" />
                        </div>
                        <p>{item.name}</p>
                        <span>
                            {item.quantity} × ₦
                            {item.price}
                        </span>
                    </div>
                ))}
            </div>
            <div className="checkout-summary">
                <h2>Summary</h2>
                <p>Subtotal: ₦{subtotal}</p>
                <p>Shipping: ₦{shipping}</p>

                <h3>Total: ₦{total}</h3>

                <button className="pay-btn">
                    Pay Now
                </button>
            </div>
        </div>
    )
}