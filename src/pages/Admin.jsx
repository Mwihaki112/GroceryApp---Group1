import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

  const fetchProducts = () => {
    axios.get("http://localhost:3000/products").then(res => setProducts(res.data));
  };

  useEffect(() => fetchProducts(), []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/products/${id}`).then(() => {
          setProducts(products.filter(p => p.id !== id));
          toast.success("Deleted!");
        });
      }
    });
  };

  const handleAdd = () => {
    const newProduct = { ...form, price: parseFloat(form.price) };
    axios.post("http://localhost:3000/products", newProduct).then(() => {
      fetchProducts();
      toast.success("Product added!");
      setForm({ name: "", price: "", category: "", image: "" });
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="admin-form">
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <div className="admin-grid">
        {products.map(product => (
          <div key={product.id} className="admin-card">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
