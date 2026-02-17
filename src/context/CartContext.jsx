import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cart")
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = async (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      const updated = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
      await axios.put(`http://localhost:3000/cart/${product.id}`, { ...product, quantity: exists.quantity + 1 });
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
      await axios.post("http://localhost:3000/cart", newProduct);
    }
    toast.success("Added to Cart!");
  };

  const removeFromCart = async (id) => {
    setCart(cart.filter(item => item.id !== id));
    await axios.delete(`http://localhost:3000/cart/${id}`);
    toast.success("Removed from Cart!");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
