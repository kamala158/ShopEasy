import { useState, useEffect } from "react";

function AdminDashboard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple iPhone 16",
      price: 79999,
      category: "Mobile",
    },
    {
      id: 2,
      name: "MacBook Pro",
      price: 149999,
      category: "Laptop",
    },
    {
      id: 3,
      name: "Sony Headphones",
      price: 14999,
      category: "Accessories",
    },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ADD + EDIT PRODUCT
  const addProduct = () => {
    if (!name || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedProducts = products.map((product) =>
        product.id === editId
          ? { ...product, name, price, category }
          : product
      );

      setProducts(updatedProducts);
      setEditId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        category,
      };

      setProducts([...products, newProduct]);
    }

    setName("");
    setPrice("");
    setCategory("");
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1e3a8a" }}>
        👨‍💼 Admin Dashboard
      </h1>

      {/* FORM */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2>{editId ? "Edit Product" : "Add Product"}</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={addProduct}
          style={{
            background: "#16a34a",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {editId ? "Update Product" : "Add Product"}
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {/* TABLE */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2>Product List</h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#1e3a8a", color: "white" }}>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Product</th>
              <th style={{ padding: "12px" }}>Category</th>
              <th style={{ padding: "12px" }}>Price</th>
              <th style={{ padding: "12px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {products
              .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => (
                <tr key={product.id}>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    {product.id}
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    {product.name}
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    {product.category}
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    ₹{product.price}
                  </td>

                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <button
                      onClick={() => {
                        setEditId(product.id);
                        setName(product.name);
                        setPrice(product.price);
                        setCategory(product.category);
                      }}
                      style={{
                        background: "orange",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        marginRight: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;