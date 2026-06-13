import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
    return (
        <nav className="navbar">
            <Link to='/' className="logo">Zafi</Link>

            <div className="nav-right">
                <Link to='/cart' className="cart-badge">
                    Cart ({cart.length})
                </Link>
            </div>
        </nav>
    );
}

