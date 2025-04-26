import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "user") {
      navigate("/user-dashboard");
    } else if (role === "seller") {
      navigate("/seller-dashboard");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Please login to your account</p>
        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            placeholder="example@domain.com"
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
            placeholder="Enter your password"
          />

          <label style={styles.label}>Login As</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>

          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)"
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "40px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center"
  },
  title: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "24px"
  },
  subtitle: {
    marginBottom: "30px",
    fontSize: "14px",
    color: "#777"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    color: "#444"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  button: {
    padding: "12px",
    background: "#6e8efb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  }
};

export default Login;
