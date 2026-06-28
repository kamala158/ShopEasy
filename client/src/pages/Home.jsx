import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const categories = [
    "💻 Electronics",
    "📱 Mobiles",
    "⌚ Watches",
    "🎧 Headphones",
    "📷 Cameras",
    "🖥 Accessories",
  ];

  const featuredProducts = [
    {
      name: "Apple iPhone 16",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    },
    {
      name: "MacBook Pro",
      price: "₹1,49,999",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
    },
    {
      name: "Sony Headphones",
      price: "₹14,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      name: "Smart Watch",
      price: "₹9,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
  ];

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh" }}>
      {/* Hero Banner */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "55px", marginBottom: "15px" }}>
            Welcome to ShopEasy
          </h1>

          <p style={{ fontSize: "22px" }}>
            Discover Amazing Deals Every Day
          </p>

          <Link to="/products">
            <button
              style={{
                marginTop: "20px",
                padding: "15px 35px",
                background: "#ff9900",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "50px" }}>
        <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {categories.map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ padding: "50px" }}>
        <h2 style={{ textAlign: "center", color: "#1e3a8a" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              style={{
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
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

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>

                <p
                  style={{
                    color: "#1e3a8a",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {product.price}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#16a34a",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          background: "#dbeafe",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Why Shop with Us?</h2>

        <h3>🚚 Fast Delivery</h3>
        <h3>💳 Secure Payments</h3>
        <h3>🏷 Best Prices</h3>
        <h3>⭐ Trusted by Thousands</h3>
      </div>

      <Footer />
    </div>
  );
}

export default Home;