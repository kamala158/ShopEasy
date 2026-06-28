function About() {
  return (
    <div
      style={{
        padding: "50px",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#1e3a8a",
            textAlign: "center",
          }}
        >
          About ShopEasy
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "32px",
            marginTop: "30px",
          }}
        >
          ShopEasy is a modern E-Commerce website developed using React,
          Node.js, Express.js and MongoDB. Users can browse products,
          search items, add products to their cart and enjoy a smooth
          shopping experience.
        </p>

        <h2 style={{ marginTop: "35px", color: "#1e3a8a" }}>
          Features
        </h2>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "35px",
          }}
        >
          <li>🛒 Online Shopping</li>
          <li>🔍 Product Search</li>
          <li>⭐ Product Ratings</li>
          <li>💳 Secure Checkout</li>
          <li>👤 User Login & Registration</li>
          <li>👨‍💼 Admin Dashboard</li>
          <li>📱 Responsive Design</li>
        </ul>
      </div>
    </div>
  );
}

export default About;