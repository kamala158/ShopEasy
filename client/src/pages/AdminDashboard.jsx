import { useState, useEffect } from "react";

function AdminDashboard() {
  const defaultProducts = [
    {
      id: 1,
      name: "Apple iPhone 16",
      price: 79999,
      category: "Mobile",
    },
    {
      id: 2,
      name: "Sony Headphones",
      price: 14999,
      category: "Accessories",
    },
  ];

  const [products, setProducts] = useState(defaultProducts);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Reset products once
  useEffect(() => {
    localStorage.removeItem("products");
    setProducts(defaultProducts);
  }, []);

  // Save products
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (!name || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updatedProducts = products.map((product) =>
        product.id === editId
          ? {
              ...product,
              name,
              price: Number(price),
              category,
            }
          : product
      );

      setProducts(updatedProducts);
      setEditId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price: Number(price),
        category,
      };

      setProducts([...products, newProduct]);
    }

    setName("");
    setPrice("");
    setCategory("");
  };

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
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
          marginBottom: "30px",
        }}
      >
        👨‍💼 Admin Dashboard
      </h1>

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

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2>Product List</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#1e3a8a",
                color: "white",
              }}
            >
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