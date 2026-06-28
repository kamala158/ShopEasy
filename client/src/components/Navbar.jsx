import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1e3a8a",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>
        🛒 ShopEasy
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link style={linkStyle} to="/">
          Home
        </Link>

        <Link style={linkStyle} to="/products">
          Products
        </Link>

        <Link style={linkStyle} to="/about">
          About
        </Link>

        <Link style={linkStyle} to="/login">
          Login
        </Link>

        <Link style={linkStyle} to="/register">
          Register
        </Link>

        <Link style={linkStyle} to="/admin">
          Admin
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;