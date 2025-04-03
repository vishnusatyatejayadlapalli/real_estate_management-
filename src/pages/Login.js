import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is 'user'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (role === "user") {
      navigate("/user-dashboard"); // Redirect to User Dashboard
    } else if (role === "seller") {
      navigate("/seller-dashboard"); // Redirect to Seller Dashboard
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </select>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
    background: "#f8f9fa",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "8px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Login;
