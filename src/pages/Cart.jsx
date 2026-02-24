import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useContext(CartContext);

  const updateQuantity = async (id, qty) => {
    if (qty <= 0) {
      await removeFromCart(id);
      return;
    }

    try {
      const item = cart.find(item => item.id === id);
      const updatedItem = { ...item, quantity: qty };

      const updatedCart = cart.map(item =>
        item.id === id ? updatedItem : item
      );

      // Optimistic UI update
      setCart(updatedCart);

      await axios.put(`http://localhost:5000/cart/${id}`, updatedItem);
    } catch (error) {
      toast.error("Failed to update quantity");
    }
  };

  const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          
          {/* Thumbnail */}
          <div className="cart-item-left">
            <img
              src={item.image}
              alt={item.name}
              className="cart-thumbnail"
            />
          </div>

          {/* Product Info */}
          <div className="cart-item-info">
            <h2>{item.name}</h2>
            <p>Ksh.{item.price.toFixed(2)}</p>
            <p className="item-subtotal">
              Subtotal: Ksh.{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          {/* Actions */}
          <div className="cart-item-actions">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={e =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Grand Total: Ksh.{grandTotal.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;