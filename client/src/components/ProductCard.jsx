function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{product.name}</h3>

        <p
          style={{
            color: "#f59e0b",
            fontWeight: "bold",
            margin: "8px 0",
          }}
        >
          ⭐⭐⭐⭐⭐ (4.8)
        </p>

        <h2 style={{ color: "#dc2626" }}>
          ₹{product.price}
        </h2>

        <button
          onClick={() => addToCart(product)}
          style={{
            width: "100%",
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🛒 Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;