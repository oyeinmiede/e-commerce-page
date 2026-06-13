import { useCart } from '../context/CartContext'
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const navigate = useNavigate()
    const { cart, removeFromCart, updateQty } = useCart()

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const tax = subtotal * 0.075
    const total = subtotal + tax

    if (cart.length === 0) {
        return (
            <div>
                <h2>Your cart is empty.</h2>
            </div>
        )
    }

    return (
        <div className="cart-page">
            <div className="cart-items">
                <h2>Your Cart</h2>
                {cart.map(item => (
                    <div className='cart-item' key={item.id}>
                        <div className="cart-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="cart-info">
                            <h4>{item.name}</h4>
                            <p>₦{item.price}</p>
                        </div>

                        <div className="cart-controls">
                            <button onClick={() => updateQty(item.id, Math.max(1, item.quantity - 1))}>-</button>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => {
                                    const value = Number(e.target.value)
                                    updateQty(item.id, Math.max(1, value))
                                }}
                                min="1"
                            />
                            <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                        </div>

                        <button className='remove-btn' onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="summary-line">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="summary-line">
                    <span>Tax (7.5%)</span>
                    <span>₦{tax.toLocaleString()}</span>
                </div>
                <div className="summary-total">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                </div>
                <button className="checkout-btn" onClick={() => navigate('/checkout')}>
                    Proceed to Checkout
                </button>
            </div>
            
        </div>
    )
}