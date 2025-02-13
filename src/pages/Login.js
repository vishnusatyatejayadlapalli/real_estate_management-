import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulated login logic
    if (formData.email === "admin@example.com" && formData.password === "password") {
      setMessage("Successfully Logged In!");
      setTimeout(() => {
        navigate("/dashboard"); // Redirect to dashboard after login
      }, 2000);
    } else {
      setMessage("Invalid email or password. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      {message && <p style={{ color: message.includes("Successfully") ? "green" : "red" }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", marginBottom: "10px" }}>
          Login
        </button>
      </form>

      {/* Go to Home Button */}
      <button onClick={() => navigate("/")} style={{ width: "100%", padding: "10px", background: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}>
        Go to Home
      </button>
    </div>
  );
};

export default Login;
