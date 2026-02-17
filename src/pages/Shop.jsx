import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="shop-page">
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
