import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const [toast, setToast] = useState(null)

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id)

            if (exists) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        setToast(`${product.name} added to cart`)
    }

    const clearToast = () => setToast(null)

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const updateQty = (id, qty) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: qty } : item
            )
        )
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQty,
            toast,
            clearToast
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)