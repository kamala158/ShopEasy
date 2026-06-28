import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1e3a8a",
            marginBottom: "25px",
          }}
        >
          🔐 Login
        </h1>

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
        />

        <label>Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          style={inputStyle}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>

          <a href="#" style={{ color: "#2563eb" }}>
            Forgot Password?
          </a>
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?
          <span
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {" "}
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default Login;