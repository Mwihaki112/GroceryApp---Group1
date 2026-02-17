import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
