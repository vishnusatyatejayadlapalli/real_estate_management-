import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>User Dashboard</h1>
      <p>Welcome to your dashboard! Here you can view your saved properties and manage your account.</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/wishlist")}>
          View Wishlist
        </button>
        <button style={styles.button} onClick={() => navigate("/search")}>
          Search Properties
        </button>
        <button style={styles.logoutButton} onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    background: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgb(238, 14, 14)",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 15px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    marginTop: "20px",
    padding: "10px 15px",
    background: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserDashboard;
