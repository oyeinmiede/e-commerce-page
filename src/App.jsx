import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toast from './components/Toast';
import { useCart } from './context/CartContext';

import Navbar from "./components/Navbar";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import { useEffect, useState } from 'react';

function App() {
  const { toast, clearToast } = useCart()
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {toast && (
          <Toast message={toast} onClose={clearToast} />
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
