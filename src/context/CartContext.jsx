import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then(res => setCart(res.data))
      .catch(() => toast.error("Failed to load cart"));
  }, []);

  const addToCart = async (product) => {
    try {
      const exists = cart.find(item => item.id === product.id);

      if (exists) {
        const updatedItem = {
          ...exists,
          quantity: exists.quantity + 1
        };

        setCart(prev =>
          prev.map(item =>
            item.id === product.id ? updatedItem : item
          )
        );

        await axios.put(
          `http://localhost:5000/cart/${product.id}`,
          updatedItem
        );
      } else {
        const newProduct = { ...product, quantity: 1 };

        setCart(prev => [...prev, newProduct]);

        await axios.post(
          "http://localhost:5000/cart",
          newProduct
        );
      }

      toast.success("Added to Cart!");
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  const removeFromCart = async (id) => {
    try {
      setCart(prev => prev.filter(item => item.id !== id));

      await axios.delete(`http://localhost:5000/cart/${id}`);

      toast.success("Removed from Cart!");
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};