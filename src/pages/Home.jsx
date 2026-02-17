import { Link } from "react-router-dom";

const featuredCategories = [
  { id: 1, name: "Fruits", image: "https://via.placeholder.com/200x150?text=Fruits" },
  { id: 2, name: "Vegetables", image: "https://via.placeholder.com/200x150?text=Vegetables" },
  { id: 3, name: "Dairy", image: "https://via.placeholder.com/200x150?text=Dairy" },
  { id: 4, name: "Bakery", image: "https://via.placeholder.com/200x150?text=Bakery" },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div>
            <h1>Fresh Groceries, Delivered To Your Door</h1>
            <p>Shop fresh fruits, vegetables, dairy, and more from the comfort of your home.</p>
            <Link to="/shop" className="btn-primary">Start Shopping</Link>
          </div>
          <img src="https://via.placeholder.com/400x300?text=Fresh+Groceries" alt="Fresh Groceries" />
        </div>
      </section>

      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          {featuredCategories.map(category => (
            <Link to="/shop" key={category.id} className="category-card">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="promo">
        <h3>Free Delivery on Orders Over $50!</h3>
        <p>Enjoy fresh groceries delivered right to your doorstep with no extra cost on orders over $50.</p>
      </section>
    </div>
  );
};

export default Home;
