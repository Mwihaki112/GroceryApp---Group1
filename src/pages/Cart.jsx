import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useContext(CartContext);

  const updateQuantity = (id, qty) => {
    const updated = cart.map(item => item.id === id ? { ...item, quantity: qty } : item);
    setCart(updated);
  };

  const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
          <div>
            <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value))} />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
