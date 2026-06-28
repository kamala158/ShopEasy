import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 16",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    
    {
      id: 3,
      name: "Sony Headphones",
      price: 14999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: 29999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 5,
      name: "Canon Camera",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 6,
      name: "Gaming Keyboard",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      id: 7,
      name: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
  ];

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e3a8a",
        }}
      >
        🛍 ShopEasy Products
      </h1>

      <h2
        style={{
          textAlign: "center",
          color: "#16a34a",
        }}
      >
        🛒 Cart Items: {cart.length}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "25px 0",
        }}
      >
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid gray",
            fontSize: "16px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;