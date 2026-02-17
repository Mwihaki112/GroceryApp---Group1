import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">GroceryMVP</Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">Cart ({cart.length})</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
