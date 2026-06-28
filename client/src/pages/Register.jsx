import { useState } from "react";

function Register() {
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
          width: "450px",
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
          📝 Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email Address"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={inputStyle}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          style={inputStyle}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          style={inputStyle}
        />

        <label style={{ display: "block", marginBottom: "20px" }}>
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          Show Password
        </label>

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?
          <span
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {" "}
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default Register;